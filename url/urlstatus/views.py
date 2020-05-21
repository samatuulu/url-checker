from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.response import Response
from rest_framework.views import APIView
import requests

from .models import Url


class UrlListView(LoginRequiredMixin, ListView):
	model = Url
	template_name = 'urlstatus/index.html'
	context_object_name = 'urls'


class UrlViewSet(APIView):

	def post(self, request, format=None):
		url = request.data['url_name']
		r = requests.get(url)
		if r.status_code == 200:
			return Response({"status": "success"})
		return Response({"status": "error"})
