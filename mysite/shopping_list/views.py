from django.views import generic
from django.utils import timezone
from rest_framework import generics
from .serializers import ItemSerializer
from .models import Item


class ItemlListCreateView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class IndexView(generic.ListView):
    template_name = "shopping_list/index.html"
    context_object_name = "latest_shopping_list"

    def get_queryset(self):
        """
        Excludes any questions that aren't published yet.
        """
        return Item.objects.filter(date_added__lte=timezone.now())
