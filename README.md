# Hello_API

## Build and run your container with Docker compose
```
> docker-compose build
> docker-compose up
```

## Registry container image on Heroku
```
> docker login
> heroku container:login
> heroku git:remote -a example-app
> heroku container:push web
> heroku container:release web
```

## Deploy with heroku.yml
```
> git add heroku.yml
> git commit -m "Add heroku.yml"
> heroku stack:set container
> git push heroku your-branch
```