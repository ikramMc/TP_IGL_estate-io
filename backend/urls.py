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
    path('Annonce/<str:dateDebut>/<str:dateFin>/<str:wilaya>/<str:commune>/<str:motsClés>', views.AnnonceAPI),
     path('bienImob/', views.BienImmobilierAPI),
    path('bienImob/<int:pk>', views.BienImmobilierAPI),
    path('Image/', views.PostView.as_view(), name= 'image_list'),]