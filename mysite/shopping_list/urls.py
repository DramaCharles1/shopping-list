from django.urls import path
from .views import ItemlListCreateView,IndexView, AddItemView


urlpatterns = [
    path("",IndexView.as_view(), name=IndexView.name),
    path("add_item/", AddItemView.as_view(), name=AddItemView.name),
    path('api/add-item/', ItemlListCreateView.as_view(), name=ItemlListCreateView.name),
]
