import datetime
from django.test import TestCase
from django.utils import timezone

from .models import Item

class ItemModelTests(TestCase):
    def test_was_item_add_recently(self):
        """
        Check if item was published recently
        """
        time = timezone.now() + datetime.timedelta(days=30)
        created_item = Item(item="milk", amount=1, date_added=time, bought=False)
        self.assertIs(created_item.was_published_recently(), False)

def create_item(item, amount,date_added,bought):
    """
    Create an Item with item, amount, date_added, bought.
    """
    date_added = timezone.now()
    return Item.objects.create(item=item, amount=amount, date_added=date_added, bought=bought)

class ShoppingListIndexViewTests(TestCase):
    def test_no_items(self):
        """
        If no items exist, an appropriate message is displayed.
        """
        response = self.client.get("/shopping_list/")
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "No items are available.")
        self.assertQuerySetEqual(response.context["latest_shopping_list"], [])

