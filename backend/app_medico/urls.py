from django.urls import path
from .views import medico_home

urlpatterns = [
    path('', medico_home, name='medico_home'),
]
