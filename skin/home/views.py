from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, "home/home.html")

def list(request):
    return render(request, "home/list.html")

def make(request):
    return render(request, "home/make.html")

def use(request):
    return render(request, "home/use.html")