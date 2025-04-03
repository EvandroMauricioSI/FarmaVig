from django.urls import path, include

urlpatterns = [
    path('api/', include('app_farmacia.urls')),   # API de farmácia
    path('api/', include('app_medico.urls')),     # API de médicos
    path('api/', include('app_paciente.urls')),   # API de pacientes
]
