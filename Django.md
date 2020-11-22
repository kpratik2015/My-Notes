# Django

- [Django](#django)
  - [What is Django](#what-is-django)
  - [Advantages](#advantages)
    - [Fast](#fast)
    - [Security](#security)
    - [Admin Panel](#admin-panel)
    - [Scalable](#scalable)
    - [Good for Data Science and Analytics​​](#good-for-data-science-and-analytics)
    - [Community Support​​](#community-support)
  - [Learning Django by Creating a Project](#learning-django-by-creating-a-project)
    - [First App](#first-app)
    - [Models](#models)
    - [Admin](#admin)
    - [Views](#views)

## What is Django

Django is the web framework or backend framework used for creating efficient and attractive websites or web apps very easily.

## Advantages

### Fast

There is much pre-built code already available for you in Django which makes your task much easy.

### Security

It can prevent your website or app from most of the attacks like – SQL Injection, XSS, CSRF, Clickjacking, and many more.

### Admin Panel

It comes with the built-in administration panel, which makes development much easy and fast.

### Scalable

You can use Django on any type of project and in the future if you want to scale your project to a bigger one, then you can easily extend it as well.

### Good for Data Science and Analytics​​

### Community Support​​

## Learning Django by Creating a Project

```
pipenv install django==2.2.6
pipenv shell
```

Pipenv creates a `Pipfile` and a `Pipfile.lock` within our current directory.

A traditional Django website consists of a single project and one (or more) apps representing discrete functionality.

```
django-admin startproject library_project .
```

Django automatically generates a new project for us which we can see with the `tree` command.

The files have following roles:

- `__init__.py` is a Python way to treat a directory as a package; it is empty
- `settings.py` contains all the configuration for our project
- `urls.py` controls the top-level URL routes
- `wsgi.py` stands for web server gateway interface and helps Django serve the eventual web pages
- `manage.py` executes various Django commands such as running the local web server or creating a new app.

Run `migrate` to sync the database with Django’s default settings and start up the local Django web server.

```
python manage.py migrate
python manage.py runserver
```

### First App

The typical next step is to start adding apps, which represent discrete areas of functionality. A single Django project can support multiple apps.

```
python manage.py startapp books
```

There are 6 new files created:

- `admin.py` is a configuration file for the built-in Django Admin app
- `apps.py` is a configuration file for the app itself
- the `migrations/` directory stores migrations files for database changes
- `models.py` is where we define our database models
- `tests.py` is for our app-specific tests
- `views.py` is where we handle the request/response logic for our web app

Typically developers will also create an `urls.py` file within each app too for routing.

The first step is to add the new app to our `INSTALLED_APPS` configuration.
Django will read them in order and we want the built-in core Django apps like admin and auth to already be loaded before it loads ours.

```py
INSTALLED_APPS = [
'django.contrib.admin',
'django.contrib.auth',
'django.contrib.contenttypes',
'django.contrib.sessions',
'django.contrib.messages',
'django.contrib.staticfiles',
# Local
'books.apps.BooksConfig', # new
]
# Then run migrate to sync our database with the changes.
```

Each web page in traditional Django requires several files: a view, url, and template.
But first we need a database model so let’s start there.

### Models

```py
# books/models.py
from django.db import models
class Book(models.Model):
  title = models.CharField(max_length=250)
  subtitle = models.CharField(max_length=250)
  author = models.CharField(max_length=100)
  isbn = models.CharField(max_length=13)
def __str__(self):
  return self.title
```

Since we created a new database model we need to create a migration file to go along with it.
We could just type `python manage.py makemigrations` but if there were multiple apps with database changes, both would be added to the migrations file which makes debugging in the future more of a challenge. Keep your migrations files as specific as possible.

```
python manage.py makemigrations books
python manage.py migrate
```

### Admin

We can start entering data into our new model via the built-in Django app. But we must do two things first: create a superuser account and update `admin.py` so the books app is displayed.

```
python manage.py createsuperuser
```

Now update our book app’s admin.py file.

```py
# books/admin.py
from django.contrib import admin
from .models import Book
admin.site.register(Book)
```

Now starting the server

```
python manage.py runserver
```

### Views

The `views.py` file controls how the database model content is displayed.
Update the `books/views.py` file.

```py
# books/views.py
from django.views.generic import ListView
from .models import Book
class BookListView(ListView):
  model = Book
  template_name = 'book_list.html'
```
