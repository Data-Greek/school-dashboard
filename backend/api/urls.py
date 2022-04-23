from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    # JWT authentification
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    # User profile
    path('users/profile/', views.user_login, name='user'),
    
    path('', views.index, name='api'),
    path('csv', views.loading_csv, name='loading_csv'),
]