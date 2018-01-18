from django.conf.urls import include, url

urlpatterns = [
    url('home/', include('main.urls')),
]
