from django.views import generic
from django.utils import timezone
from rest_framework import generics
from ..serializers import ShoppingListItemSerializer
from ..models import ShoppingListItem


class ShoppingListItemlListCreateView(generics.ListCreateAPIView):
    queryset = ShoppingListItem.objects.all()
    serializer_class = ShoppingListItemSerializer
    name="add-item"

class ShoppingListDeleteItemView(generics.DestroyAPIView):
    queryset = ShoppingListItem.objects.all()
    serializer_class = ShoppingListItemSerializer
    name="delete-item"

class ShoppingListItemView(generics.ListAPIView):
    queryset = ShoppingListItem.objects.all()
    serializer_class = ShoppingListItemSerializer
    name="items"

class ShoppingListItemUpdateView(generics.UpdateAPIView):
    queryset = ShoppingListItem.objects.all()
    serializer_class = ShoppingListItemSerializer
    name="update-item"
