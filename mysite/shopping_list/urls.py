from django.urls import path
from .views import ItemlListCreateView,IndexView, AddItemView


urlpatterns = [
    path("",IndexView.as_view(), name="index"),
    path("add_item/", AddItemView.as_view(), name="add_item"),
    path('Item/', ItemlListCreateView.as_view(), name='item-list-create'),
]
