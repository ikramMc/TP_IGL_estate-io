from rest_framework import fields,serializers
from backend.models import User
from backend.models import Annonce
from backend.models import BienImmobilier
from backend.models import  Image
class UserSerializer (serializers.ModelSerializer):
 class Meta:
  model=User
  fields=('userId','nom','prenom','email','tel','adresse')

class AnnonceSerializer (serializers.ModelSerializer):
 class Meta:
  model=Annonce
  fields=('annonceId','date','userId','bienId')

class BienImmobilierSerializer (serializers.ModelSerializer):
 class Meta:
  model=BienImmobilier
  fields=('bienImmobilierId','titre','description','surface','prix','wilaya','commune','adresse','latitude','longitude')

class ImageSerializer (serializers.ModelSerializer):
 class Meta:
  model=Image
  fields=('id','image','bienid')