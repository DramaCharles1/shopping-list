from django.urls import path
from .views import ItemlListCreateView,IndexView, AddItemView, DeleteItemView


urlpatterns = [
    path("",IndexView.as_view(), name=IndexView.name),
    path("add_item/", AddItemView.as_view(), name=AddItemView.name),
    path('api/delete-item/<int:pk>/', DeleteItemView.as_view(), name=DeleteItemView.name),
    path('api/add-item/', ItemlListCreateView.as_view(), name=ItemlListCreateView.name),
]
