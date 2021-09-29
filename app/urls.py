# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.urls import path, re_path
from app import views
from .views import *

urlpatterns = [

    # The home page
    path('', views.index, name='home'),
    path('customers/', CustomerTemplate.as_view(), name="customers"),
    path('suppliers/', SupplierTemplate.as_view(), name="suppliers"),
    path('settings/', SettingsTemplate.as_view(), name="settings"),
    path('register/', RegisterTemplate.as_view(), name="register"),
    path('materials/', MaterialsTemplate.as_view(), name="materials"),

    # Matches any html file
    re_path(r'^.*\.*', views.pages, name='pages'),

]
