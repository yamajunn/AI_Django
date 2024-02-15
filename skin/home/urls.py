from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('list', views.list, name='list'),
    path('make', views.make, name='make'),
    path('use', views.use, name='use'),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)