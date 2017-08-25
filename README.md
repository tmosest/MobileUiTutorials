# Mobile UI Tutorials (SPA Angular 2):

In this tutorial we are going to be looking at how to create an angular 2 web application in typescript. This application will allow the user to create a list of objects and store them locally using angular local host. At the end of the tutorial, we will go over how to actually put your files on an AWS server if you don't have one.

# Getting started:

The first things you are going to need to download are [Node](https://nodejs.org/en/download/) and npm. If you're on a mac install Node with homebrew instead.

With npm you can install the [angular-cli](https://angular.io/guide/quickstart) with:

```npm install -g @angular/cli```

Now you will have an ```ng``` command that will allow you to create a new angular project with:

```ng new dictionary-app```

This will create a new directory with a working angular-2 project named dictionary-app.

simply run the following to open it:

```cd dictionary-app```

then to launch the server and browser:

```ng serve --open```

# Creating a simple dictionary:

Now if we open the project in an IDE we can start making changes. Visual Studio Code and WebStorm are my recommendations. The cool thing about the way this project is setup is that it has live reload so we don't have to rebuild the project each time we make a change.

For the moment we are only going to be concerned with whats in the src folder; but if you want a great explanation of what each file does check out the (Quick Start Angular Guide)[https://angular.io/guide/quickstart].

Now before we begin coding, we need to note that a lot of things changed between Angular 1 and Angular 2. In Angular 2 Controllers and Directives kinda got combined into Component.

The root Component of the application is by defualt app-root which is found in the src/app folder.


