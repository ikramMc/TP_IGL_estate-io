# Generated by Django 4.1.4 on 2023-01-01 14:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0008_bienimmobilier_adresse_bienimmobilier_commune_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='annonce',
            name='bienId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.bienimmobilier'),
        ),
    ]
