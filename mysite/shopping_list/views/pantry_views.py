from django.views import generic
from django.utils import timezone
from rest_framework import generics
from ..serializers import PantryItemSerializer
from ..models import PantryItem


class PantryItemlListCreateView(generics.ListCreateAPIView):
    queryset = PantryItem.objects.all()
    serializer_class = PantryItemSerializer
    name="add-item"

class PantryDeleteItemView(generics.DestroyAPIView):
    queryset = PantryItem.objects.all()
    serializer_class = PantryItemSerializer
    name="delete-item"

class PantryItemView(generics.ListAPIView):
    queryset = PantryItem.objects.all()
    serializer_class = PantryItemSerializer
    name="items"

class PantryItemUpdateView(generics.UpdateAPIView):
    queryset = PantryItem.objects.all()
    serializer_class = PantryItemSerializer
    name="update-item"
