from django.db import models

# Create your models here.
class User(models.Model):
  userId=models.AutoField(primary_key=True)
  nom=models.CharField(max_length=45)
  prenom=models.CharField(max_length=45)
  email=models.CharField(max_length=50)
  tel=models.CharField(max_length=10,null=True,blank=True)
  adresse=models.CharField(max_length=50,null=True,blank=True)

class Message(models.Model):
  msgId=models.AutoField(primary_key=True)
  emiteurId=models.IntegerField(default=0)
  recepteurId=models.IntegerField(default=0)
  contenu=models.CharField(max_length=150,default='msg')

class BienImmobilier(models.Model):
  class Type(models.TextChoices):
   TERRAIN='terrain'
   TERRAINAGRICOLE='terrainagricole'
   APPARTEMENT='appartement'
   MAISON='maison'
   BUNGALOW='bungalow'
  bienImmobilierId=models.AutoField(primary_key=True)
  titre=models.CharField(max_length=45)  
  description=models.CharField(max_length=45) 
  surface=models.IntegerField()
  prix=models.IntegerField()
  wilaya=models.CharField(max_length=45,default='w') 
  commune=models.CharField(max_length=45,default='c') 
  adresse=models.CharField(max_length=80,default='a') 
  latitude=models.FloatField(default= 36.7)
  longitude=models.FloatField(default= 2.985)
  type=models.CharField(max_length=25,choices=Type.choices,default=Type.APPARTEMENT)
class Annonce(models.Model):
  class Categorie(models.TextChoices):
    VENTE='vente'
    LOCATION='location'
    ECHANGE='echange'
    LOCATIONPOURVACANCE='location pour vacance' 
  annonceId=models.AutoField(primary_key=True)
  date=models.DateField()
  userId=models.IntegerField()
  bienId=models.ForeignKey(BienImmobilier,on_delete=models.CASCADE,default=None)
  Categorie=models.CharField(max_length=25,choices=Categorie.choices,
  default=Categorie.VENTE,)

def upload_to(instance,filename):
  return'images/{filename}'.format(filename=filename)

class Image(models.Model):
  id=models.AutoField(primary_key=True)
  image=models.ImageField(upload_to='images/',default=None) 
  bienid=models.IntegerField()
 
  

  
