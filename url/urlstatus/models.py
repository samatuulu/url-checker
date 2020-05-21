from django.db import models


class Url(models.Model):
	url_name = models.CharField(max_length=100)

	def __str__ (self):
		return self.url_name
