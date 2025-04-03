# app_paciente/urls.py
from django.urls import path
from .views import PacienteListCreate, PacienteRetrieveUpdateDestroy

urlpatterns = [
    path('pacientes/', PacienteListCreate.as_view(), name='paciente-list'),
    path('pacientes/<int:pk>/', PacienteRetrieveUpdateDestroy.as_view(), name='paciente-detail'),
]