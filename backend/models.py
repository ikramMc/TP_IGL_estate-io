from django.db import models

# Create your models here.
class User(models.Model):
  userId=models.AutoField(primary_key=True)
  nom=models.CharField(max_length=45)
  prenom=models.CharField(max_length=45)
  email=models.CharField(max_length=50)
  tel=models.CharField(max_length=10,null=True,blank=True)
  adresse=models.CharField(max_length=50,null=True,blank=True)

class BienImmobilier(models.Model):
  bienImmobilierId=models.AutoField(primary_key=True)
  titre=models.CharField(max_length=45)  
  description=models.CharField(max_length=45) 
  surface=models.IntegerField()
  prix=models.IntegerField()
  wilaya=models.CharField(max_length=45,default='w') 
  commune=models.CharField(max_length=45,default='c') 
  adresse=models.CharField(max_length=80,default='a') 
def upload_to(instance,filename):
  return'images/{filename}'.format(filename=filename)

class Annonce(models.Model):
  annonceId=models.AutoField(primary_key=True)
  date=models.DateField()
  userId=models.IntegerField()
  bienId=models.ForeignKey(BienImmobilier,on_delete=models.CASCADE,default=None)

class Image(models.Model):
  id=models.AutoField(primary_key=True)
  image=models.ImageField(upload_to='images/',default=None) 
  bienid=models.IntegerField()
 
  

  
