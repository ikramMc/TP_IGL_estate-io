from django.urls.resolvers import URLPattern
from backend import views

from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.igl, name='home'),
    path('User/', views.UserAPI),
    path('User/<int:pk>', views.UserAPI),
    path('Annonce/', views.AnnonceAPI),
    path('Annonce/<int:pk>', views.AnnonceAPI),
    path('Annonce/filter/<str:motsClés>', views.filterAPI),
    path('Annonce/filter/',views.filterAPI),
     path('bienImob/', views.BienImmobilierAPI),
     path('message/', views.MessageAPI),
     path('message/<int:pk>', views.MessageAPI),
    path('bienImob/<int:pk>', views.BienImmobilierAPI),
    path('Image/', views.PostView.as_view(), name= 'image_list'),]