# Generated by Django 4.1.7 on 2023-03-14 11:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userdetails',
            old_name='description',
            new_name='password',
        ),
        migrations.RenameField(
            model_name='userdetails',
            old_name='title',
            new_name='username',
        ),
    ]