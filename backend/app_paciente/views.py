# app_paciente/views.py
from rest_framework import generics
from .models import Paciente
from .serializers import PacienteSerializer

class PacienteListCreate(generics.ListCreateAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

class PacienteRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer