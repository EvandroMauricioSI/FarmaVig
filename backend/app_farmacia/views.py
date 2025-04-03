from django.shortcuts import render

def farmacia_home(request):
    return render(request, 'frontend/app_farmacia/index_farmacia.html')
