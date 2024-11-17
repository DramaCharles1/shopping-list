from django.urls import path
from .views import ShoppingListItemlListCreateView, ShoppingListDeleteItemView, ShoppingListItemView, ShoppingListItemUpdateView, PantryItemlListCreateView, PantryDeleteItemView, PantryItemView, PantryItemUpdateView

urlpatterns = [
    path('api/shopping-list/delete-item/<int:pk>/', ShoppingListDeleteItemView.as_view(), name=ShoppingListDeleteItemView.name),
    path('api/shopping-list/add-item/', ShoppingListItemlListCreateView.as_view(), name=ShoppingListItemlListCreateView.name),
    path('api/shopping-list/update-item/<int:pk>/', ShoppingListItemUpdateView.as_view(), name=ShoppingListItemUpdateView.name),
    path('api/shopping-list/items/', ShoppingListItemView.as_view(), name=ShoppingListItemView.name),
    path('api/pantry/delete-item/<int:pk>/', PantryDeleteItemView.as_view(), name=PantryDeleteItemView.name),
    path('api/pantry/add-item/', PantryItemlListCreateView.as_view(), name=PantryItemlListCreateView.name),
    path('api/pantry/update-item/<int:pk>/', PantryItemUpdateView.as_view(), name=PantryItemUpdateView.name),
    path('api/pantry/items/', PantryItemView.as_view(), name=PantryItemView.name),
]
