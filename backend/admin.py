from django.contrib import admin
from .models import User
from .models import Annonce
from .models import BienImmobilier
from .models import Image
# Register your models here.
models_list1=[User]
admin.site.register(models_list1)
models_list2=[Annonce]
admin.site.register(models_list2)

models_list3=[BienImmobilier]
admin.site.register(models_list3)

models_list4=[Image]
admin.site.register(models_list4)