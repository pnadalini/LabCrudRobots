# LabCrudRobots

This project was created to work together with NodeJS project [ExpressCRUD](https://github.com/pnadalini/ExpressCRUD)

## Project Description

This project was created to make a CRUD implementation with Angular 7, Bootstrap 4, NgBootstrap and Sweet Alert.
Currently the functionalities from the page are implemented in `app/robots/` components, there's a model that has the structure of every robot in `app/models/robot-model.ts` and the calls to the API are in the `app/services/` folder. 

The structure from the navigation menu and footer is located in the `app/ui/` folder. 
Currently there's no testing functionality implemented, but the files for those unit test haven't been removed for future additions on the project.

## Docker 

In order to use docker, first I run the command to build what's inside Dockerfile.

    docker build -t robots:latest .

After thar I run the docker file with the following command so it can be accessed through `http://localhost:8000`

    docker run --rm -d -p 8000:80 robots:latest

To see how run docker with the API, check the `README.md` from [ExpressCRUD](https://github.com/pnadalini/ExpressCRUD)

