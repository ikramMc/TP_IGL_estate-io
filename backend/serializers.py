from rest_framework import fields,serializers
from backend.models import User
from backend.models import Annonce
from backend.models import BienImmobilier
from backend.models import  Image
from backend.models import  Message
class UserSerializer (serializers.ModelSerializer):
 class Meta:
  model=User
  fields='__all__'

class AnnonceSerializer (serializers.ModelSerializer):
 class Meta:
  model=Annonce
  fields='__all__'

class BienImmobilierSerializer (serializers.ModelSerializer):
 class Meta:
  model=BienImmobilier
  fields='__all__'
class MessageSerializer(serializers.ModelSerializer):
 class Meta:
  model=Message
  fields = '__all__'
class ImageSerializer (serializers.ModelSerializer):
 class Meta:
  model=Image
  fields='__all__'