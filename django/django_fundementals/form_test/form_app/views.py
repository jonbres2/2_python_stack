from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, "index.html")

def create_user(request):
    print("Got POST info......")
    name_from_form = request.POST['name']
    email_from_form = request.POST['email']
    
    context = {
        "name_on_template" : name_from_form,
        "email_on_template" : email_from_form
    }
    return render(request, "show.html", context)