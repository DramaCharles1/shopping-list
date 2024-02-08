from django.urls import path
from .views import ItemlListCreateView,IndexView, AddItemView, DeleteItemView, ApiRoot


urlpatterns = [
    path("",IndexView.as_view(), name="index"),
    path("add_item/", AddItemView.as_view(), name="add_item"),
    path('api/delete_item/<int:pk>/', DeleteItemView.as_view(), name='delete-item'),
    path('Item/', ItemlListCreateView.as_view(), name='item-list-create'),
    path('api/', ApiRoot.as_view(), name='api-root'),
]
