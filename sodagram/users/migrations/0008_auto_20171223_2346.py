# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-12-24 05:46
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_auto_20171223_1548'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='webstie',
            new_name='website',
        ),
    ]