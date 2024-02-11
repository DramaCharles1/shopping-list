from rest_framework import serializers
from .models import Item


class ItemSerializer(serializers.ModelSerializer):
    date_added = serializers.DateTimeField(format='%Y-%m-%dT%H:%M:%S')
    bought = serializers.BooleanField()

    class Meta:
        model = Item
        fields = ['id', 'item', 'amount', 'date_added', 'bought']
