# Generated by Django 4.1.4 on 2023-02-01 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0018_annonce_categorie'),
    ]

    operations = [
        migrations.AddField(
            model_name='bienimmobilier',
            name='type',
            field=models.CharField(choices=[('terrain', 'Terrain'), ('terrainagricole', 'Terrainagricole'), ('appartement', 'Appartement'), ('maison', 'Maison'), ('bungalow', 'Bungalow')], default='appartement', max_length=25),
        ),
    ]