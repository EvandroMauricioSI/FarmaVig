from django.urls import path
from .views import farmacia_home  # Substitua pelo nome correto das views

urlpatterns = [
    path('', farmacia_home, name='farmacia_home'),
]