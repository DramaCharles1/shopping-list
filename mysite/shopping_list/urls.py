from django.urls import path
from . import views
from .views import ItemlListCreateView


urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path('Item/', ItemlListCreateView.as_view(), name='item-list-create'),
]
