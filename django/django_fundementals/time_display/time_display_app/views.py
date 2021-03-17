from django.shortcuts import render, HttpResponse, redirect, render
from time import gmtime, strftime

def clock(request):
    context = {
        'time': strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    return render(request, 'clock.html', context)
