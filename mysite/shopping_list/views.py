from django.views import generic
from django.utils import timezone
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .serializers import ItemSerializer
from .models import Item

class ApiRoot(generics.GenericAPIView): 
    name = 'api-root'
    def get(self, request, *args, **kwargs): 
        return Response({ 
            'items': reverse(Item.item, request=request), 
            })  

class ItemlListCreateView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class DeleteItemView(generics.DestroyAPIView):
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

class AddItemView(generic.TemplateView):
    template_name = "shopping_list/add_item.html"