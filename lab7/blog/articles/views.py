from .models import Article
from django.shortcuts import render, redirect
from django.http import Http404
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User

def archive(request):
	return render(request, 'archive.html', {"posts": Article.objects.all(),"Current_user": request.user})
def whyareyouhere(request):
	return render(request, 'whyareyouhere.html', {})
def get_article(request, article_id):
	try:
		post = Article.objects.get(id=article_id)
		return render(request, 'article.html', {"post": post})
	except Article.DoesNotExist:
		raise Http404
def create_post(request):
	if not request.user.is_anonymous:
		if request.method == "POST":
			# обработать данные формы, если метод POST
			form = {'text': request.POST["text"], 'title': request.POST["title"]}
			# в словаре form будет храниться информация, введенная пользователем
			if form["text"] and form["title"]:
		# если поля заполнены без ошибок
				all_posts = Article.objects.all()
				for i in all_posts:
					if i.title == form["title"]:
						form['errors'] = u"Такая статья уже есть"
						return render(request, 'create_post.html', {'form': form})
				post = Article.objects.create(text=form["text"], title=form["title"], author=request.user)
				return redirect('get_article', article_id=post.id)
			# перейти на страницу поста
			else:
		# если введенные данные некорректны
				form['errors'] = u"Не все поля заполнены"
				return render(request, 'create_post.html', {'form': form})
		else:
		# просто вернуть страницу с формой, если метод GET
				return render(request, 'create_post.html', {})
	else:
		return render(request, 'whyareyouhere.html', {})
def registration(request):
	if request.user.is_anonymous:
		if request.method == "POST":
			form = {'username': request.POST["username"], 'password': request.POST["password"],
			"email": request.POST["email"]}
			if form["username"] and form["password"]:
				try:
					User.objects.get(username=form["username"])
					form['errors'] = u"Имя пользователя занято!"
					return render(request, 'registration.html', {'form': form})
				except User.DoesNotExist:
					User.objects.create_user(form["username"], form["email"], form["password"])
					login(request, authenticate(request, username=form["username"], password=form["password"]))
					return redirect('/')
			# перейти на страницу поста
			else:
		# если введенные данные некорректны
				form['errors'] = u"Не все поля заполнены"
				return render(request, 'registration.html', {'form': form})
		else:
		# просто вернуть страницу с формой, если метод GET
			return render(request, 'registration.html', {})
	else:
		return render(request, 'whyareyouhere.html', {})
def auth(request):
	if request.user.is_anonymous:
		if request.method == "POST":
			form = {'username': request.POST["username"], 'password': request.POST["password"]}
			if form["username"] and form["password"]:
				current_user = authenticate(request, username=form["username"], password=form["password"])
				if current_user == None:
					form['errors'] = u"Имя пользователя или пароль неверны"
					return render(request, 'login.html', {'form': form})
				else:
					login(request, current_user)
					return redirect('/')
			else:
				form['errors'] = u"Не все поля заполнены"
				return render(request, 'login.html', {'form': form})
		else:
			return render(request, 'login.html', {})
	else:
		return render(request, 'whyareyouhere.html', {})
def logout_user(request):
    logout(request)
    return redirect('/')

