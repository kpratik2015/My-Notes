# Docker

- [Docker](#docker)
  - [Introduction to Docker Images](#introduction-to-docker-images)
    - [Docker Client](#docker-client)
    - [Docker Server](#docker-server)
    - [Docker Images](#docker-images)
    - [Testing Docker Setup](#testing-docker-setup)
    - [Exploring the Dockerfile](#exploring-the-dockerfile)
    - [Linux Containers](#linux-containers)
    - [Building Image](#building-image)
  - [Q&A](#qa)
    - [What is Docker?](#what-is-docker)
    - [What is the difference between Docker image and Docker container?](#what-is-the-difference-between-docker-image-and-docker-container)
    - [How will you remove an image from Docker?](#how-will-you-remove-an-image-from-docker)
    - [How is a Docker container different from a hypervisor?](#how-is-a-docker-container-different-from-a-hypervisor)
    - [Can we write compose file in json file instead of yaml?](#can-we-write-compose-file-in-json-file-instead-of-yaml)
    - [Can we run multiple apps on one server with Docker?](#can-we-run-multiple-apps-on-one-server-with-docker)
    - [What are the common use cases of Docker?](#what-are-the-common-use-cases-of-docker)
    - [What are the main features of Docker-compose?](#what-are-the-main-features-of-docker-compose)
    - [What is the most popular use of Docker?](#what-is-the-most-popular-use-of-docker)
    - [What is the role of open source development in the popularity of Docker?](#what-is-the-role-of-open-source-development-in-the-popularity-of-docker)

## Introduction to Docker Images

Most of the time the docker server is a Virtual Machine.

### Docker Client

It's the `docker` command. Its job to take everything you typed and wrap those into API calls and pings the server. You can directly use the API calls but `docker` CLI might be running multiple calls in the background.

### Docker Server

`dockerd` It's the daemon that allows to run docker containers. Server needs access to dockerhub with `docker login`. `.docker/config.json` can be checked out.

### Docker Images

Contains one or more filesystem layers and some important metadata that represent all the files required to run a Dockerized application. Result of docker build. You can download them. They're immutable and you mostly copy them. They act as a base to create containers from.

### Testing Docker Setup

`docker image ls` - lists out all of the images on Docker Server.
`docker container run -d --rm --name quantum --publish mode=ingress,target=8080,published=18080 some_image_name:latest` - runs a docker container. `-d` detach or daemonize. `--rm` short for remove i.e. delete the container as soon as it exits since images can be huge size. `--name` gives a human readable name to later stop the container. `ingress` means to enter i.e. traffic coming inside container from outside world. `target` port inside container which is listening to outside world. `published` port that we would like to be exposed from host that we're running on.

Docker has its own network stack sort of like VMs.

`docker container ls` - list all running docker containers. It lists a container hash that is unique to the system. Often referred as long id. Often we only need the first 12 characters or you can work with first 3 characters.

`docker container stop {id}` - stops the container.

`docker container ls -a` - shows all containers that have been run but in stop state currently.

`docker ps` is same as `docker container ls`. `docker image ls` lists images.

### Exploring the Dockerfile

```Dockerfile
cd ${HOME}
mkdir class-docker-images
cd ${HOME}/class-docker-images
git clone ...
cd folder_name
```

It is a file of instructions. `FROM` sets the base image. `FROM` is actually not a requirement. `scratch` can be used as `FROM` to make a fresh image without base.
`alpine` is a distribution of linux. Designed to be small, used for embedded system.
`RUN` executes a command on top of an image.
`ADD` (`COPY` preferred for non-url) - get files out of our project and add it inside container.

If nothing is running in foreground in a container then the kernel shuts it down. So like apache server is run then run it in FOREGROUND.

`EXPOSE 80` - port 80 on this container should be available to other containers in the network. Docker uses IP table in the background and makes sure this port is reachable. You don't need to provide it if you're using `-p`.

`CMD` is not the same thing as `RUN`. It is just setting some metadata. It also has an entry point. When container is created from image, the first thing its gonna do is what's mentioned in `CMD` e.g. `CMD ["./start.sh"]`

`ENTRYPOINT` - if mentioned then following `CMD` commands will run in the executable environment.

Default shell environment can be different. So `/bin/bash` should be defined as ENTRYPOINT.

### Linux Containers

A Linux Container is a single instantiation of a Docker or OCI-standard image. OCI - Open Container Initiative.

### Building Image

`docker image build -t image_name:latest .` - `-t` saves a step as we know what it needs to be tagged. `latest` is the default. The `.` is the build context - this is where the files are which needed to be uploaded. The current directory is looked at by default for the `Dockerfile`.

The reason to tag is to push `docker image push image_name`

`docker search something` can be used to search in dockerhub.

## Q&A

### What is Docker?

Docker is Open Source software. It provides the automation of Linux application deployment in a software container.
We can do operating system level virtualization on Linux with Docker.
Docker can package software in a complete file system that contains software code, runtime environment, system tools, & libraries that are required to install and run the software on a server.

### What is the difference between Docker image and Docker container?

Docker container is simply an instance of Docker image.
A Docker image is an immutable file, which is a snapshot of container. We create an image with build command.
When we use run command, an Image will produce a container.
In programming language, an Image is a Class and a Container is an instance of the class.

### How will you remove an image from Docker?

We can use `docker rmi` command to delete an image from our local system.

Exact command is:
`docker rmi <Image Id>`
If we want to find IDs of all the Docker images in our local system, we can user docker images command.
`docker images`
If we want to remove a docker container then we use docker rm command.
`docker rm <Container Id>`

### How is a Docker container different from a hypervisor?

In a Hypervisor environment we first create a Virtual Machine and then install an Operating System on it. After that we deploy the application. The virtual machine may also be installed on different hardware configurations.
In a Docker environment, we just deploy the application in Docker.
There is no OS layer in this environment. We specify libraries, and rest of the kernel is provided by Docker engine.
In a way, Docker container and hypervisor are complementary to each other.

### Can we write compose file in json file instead of yaml?

Yes. Yaml format is a superset of json format. Therefore any json file is also a valid Yaml file.
If we use a json file then we have to specify in docker command that we are using a json file as follows:

`docker-compose -f docker-compose.json up`

### Can we run multiple apps on one server with Docker?

Yes, theoretically we can run multiples apps on one Docker server.
But in practice, it is better to run different components on separate containers.
With this we get cleaner environment and it can be used for multiple uses.

### What are the common use cases of Docker?

1. **Setting up Development Environment**: We can use Docker to set the development environment with the applications on which our code is dependent.
2. **Testing Automation Setup**: Docker can also help in creating the Testing Automation setup. We can setup different services and apps with Docker to create the automation testing environment.
3. **Production Deployment**: Docker also helps in implementing the Production deployment for an application. We can use it to create the exact environment and process that will be used for doing the production deployment.

### What are the main features of Docker-compose?

1. **Multiple environments on same Host**: We can use it to create multiple environments on the same host server.
2. **Preserve Volume Data on Container Creation**: Docker compose also preserves the volume data when we create a container.
3. **Recreate the changed Containers**: We can also use compose to recreate the changed containers.
4. **Variables in Compose file**: Docker compose also supports variables in compose file. In this way we can create variations of our containers.

### What is the most popular use of Docker?

The most popular use of Docker is in build pipeline. With the use of Docker it is much easier to automate the development to deployment process in build pipeline.
We use Docker for the complete build flow from development work, test run and deployment to production environment.

### What is the role of open source development in the popularity of Docker?

Since Linux was an open source operating system, it opened new opportunities for developers who want to contribute to open source systems.
One of the very good outcomes of open source software is Docker.
It has very powerful features.
Docker has wide acceptance due to its usability as well as its open source approach of integrating with different systems.
