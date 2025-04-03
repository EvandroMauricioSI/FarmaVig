from django.shortcuts import render

def medico_home(request):
    return render(request, 'frontend/app_medico/index_medico.html')
