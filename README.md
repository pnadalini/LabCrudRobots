# LabCrudRobots

This project was created to work together with NodeJS project [ExpressCRUD](https://github.com/pnadalini/ExpressCRUD)

## Project Description

This project was created to make a basic CRUD implementation with Angular 7, Bootstrap 4, NgBootstrap and Sweet Alert.

## Docker 

In order to use docker, first I run the command to build what's inside Dockerfile.

    docker build -t robots:latest .

After thar I run the docker file with the following command so it can be accessed through `http://localhost:8000`

    docker run --rm -d -p 8000:80 robots:latest
