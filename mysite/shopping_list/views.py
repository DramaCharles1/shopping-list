from django.views import generic
from django.http import HttpResponse
from django.utils import timezone

from .models import Item

class IndexView(generic.ListView):
    template_name = "shopping_list/index.html"
    context_object_name = "latest_shopping_list"

    def get_queryset(self):
        """
        Excludes any questions that aren't published yet.
        """
        return Item.objects.filter(date_added__lte=timezone.now())
