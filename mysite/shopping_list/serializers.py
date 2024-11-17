from rest_framework import serializers
from .models import ShoppingListItem
from .models import PantryItem


class ShoppingListItemSerializer(serializers.ModelSerializer):
    date_added = serializers.DateTimeField(format='%Y-%m-%dT%H:%M:%S')
    bought = serializers.BooleanField()

    class Meta:
        model = ShoppingListItem
        fields = ['id', 'item', 'amount', 'date_added', 'bought']

class PantryItemSerializer(serializers.ModelSerializer):
    date_added = serializers.DateTimeField(format='%Y-%m-%dT%H:%M:%S')

    class Meta:
        model = PantryItem
        fields = ['id', 'item', 'amount', 'date_added']