# Generated by Django 2.2.10 on 2021-09-09 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0006_auto_20210908_2144'),
    ]

    operations = [
        migrations.AddField(
            model_name='baseuser',
            name='gender',
            field=models.IntegerField(choices=[('male', 'Male'), ('female', 'Female')], default=0),
        ),
        migrations.AlterField(
            model_name='baseuser',
            name='last_name',
            field=models.CharField(default='male', max_length=150, verbose_name='last name'),
        ),
    ]
