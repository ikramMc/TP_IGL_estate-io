# Generated by Django 4.1.4 on 2023-01-04 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0010_alter_annonce_bienid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='adresse',
            field=models.CharField(default='a', max_length=50),
        ),
        migrations.AlterField(
            model_name='user',
            name='tel',
            field=models.CharField(default='0', max_length=10),
        ),
    ]
