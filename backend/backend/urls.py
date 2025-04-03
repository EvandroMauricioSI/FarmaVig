# projeto/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app_paciente.urls')),
    path('api/', include('app_medico.urls')),
    path('api/', include('app_farmacia.urls')),
    path('api/', include('app_farma_vig.urls')),
]