import datetime
import json
from django.test import TestCase
from django.utils import timezone
from django.core.exceptions import ValidationError

from .models import ShoppingListItem

class ShoppingListItemModelTests(TestCase):
    def test_was_item_add_recently(self):
        """
        Check if item was published recently
        """
        time = timezone.now() + datetime.timedelta(days=30)
        created_item = ShoppingListItem(item="milk", amount=1, date_added=time, bought=False)
        self.assertIs(created_item.was_published_recently(), False)

    def test_if_amount_is_negative(self):
        """
        ValidationError should be raised if an item with negative amount is added to the database.
        validators will not be run automatically when you save a model. full_clean needs
        to be called in order to run all validators.
        """
        item = create_item(item="ketchup", amount=-99, date_added=timezone.now(), bought=False)
        self.assertRaises(ValidationError, item.full_clean)

def create_item(item, amount,date_added,bought):
    """
    Create an Item with item, amount, date_added, bought.
    """
    date_added = timezone.now()
    return ShoppingListItem.objects.create(item=item, amount=amount, date_added=date_added, bought=bought)

class ShoppingListDeleteItemViewTests(TestCase):
    def test_delete_item_from_list(self):
        """
        Add an item to the mock database and then delete it using the
        delete-item endpoint.
        """
        item = create_item(item="coffee", amount=1, date_added=timezone.now(), bought=False)
        response = self.client.delete(f"/shopping_list/api/shopping-list/delete-item/{item.pk}/")
        self.assertEqual(response.status_code, 204)

class ShoppingListItemlListCreateViewTests(TestCase):
    def test_list_item_using_endpoint(self):
        """
        Add an item to the mock database and create a json structure that the endpoint should
        generate when using GET.
        """
        item = create_item(item="item-added-for-test",
                            amount=1,
                            date_added=timezone.now(),
                            bought=False)
        response = self.client.get("/shopping_list/api/shopping-list/add-item/")
        self.assertEqual(response.status_code, 200)
        should_respond = [{"id":item.pk,
                          "item":item.item,
                          "amount":item.amount,
                          "date_added":item.date_added.strftime('%Y-%m-%dT%H:%M:%S'),
                          "bought":False}]
        json_should_respond = json.dumps(should_respond)
        json_response = json.dumps(response.json())

        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(json_response, json_should_respond)

    def test_item_with_zero_or_negative_amount_not_allowed(self):
        """
        The endpoint should not allow item with zero or negative amount to be added to
        the database.
        """
        zero_amount_item = {"id":1,
                          "item":"item-with-zero-amount",
                          "amount":0,
                          "date_added":"2024-01-24T12:00:00Z",
                          "bought":False}
        response = self.client.post("/shopping_list/api/shopping-list/add-item/",
                                     data=zero_amount_item, format="json")
        self.assertEqual(response.status_code, 400)
