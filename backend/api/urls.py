from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='api'),
    path('csv', views.loading_csv, name='loading_csv'),
]