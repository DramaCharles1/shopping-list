from django.views import generic
from django.utils import timezone
from rest_framework import generics
from .serializers import ItemSerializer
from .models import Item


class ItemlListCreateView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    name="add-item"

class DeleteItemView(generics.DestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    name="delete-item"

class ItemView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    name="items"

class IndexView(generic.ListView):
    template_name = "shopping_list/index.html"
    context_object_name = "latest_shopping_list"
    name = "index"

    def get_queryset(self):
        """
        Excludes any questions that aren't published yet.
        """
        return Item.objects.filter(date_added__lte=timezone.now())

class AddItemView(generic.TemplateView):
    template_name = "shopping_list/add_item.html"
    name = "add_item"
