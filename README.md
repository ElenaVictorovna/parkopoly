# Parkopoly Web

## Dependencies 

This Angular Application was generated using Yeoman generator-gulp-angular.

Before You can build this project, you must install and configure the following dependencies on your machine:
 
 1. **Node.js**: We use Node to run a development web server and build the project.
 
 After installing node,   you should be able to run the following command to install development tools
 (dependencies are described in **package.json**)
 
  `npm install`
 
2. We use **Gulp** as our build system. Install gulp  command-line tool globally with:

  `npm install -g gulp`

3. **Bower** is used to manage dependencies used in this application. 
You can upgrade dependencies by specifying a newer version in bower.json.
You can also run bower update and bower install to manage dependencies. 

To install **bower** globally, run command

  `npm install -g bower`
  
4. 'bower install'


## Run dev mode

Run the following command to start development mode experience, the browser
auto-refreshes when changing are made on the app files.
In the next command line, replace **profile** by local, test or prod.

  `gulp serve --profil`

## Build the app

To build application, run the command with suitable profile (local, test, prod)
Default profile is local. Replace **profile** in the next command line.

  `gulp build --profile`  (build app)
  
  **or**
  
  `gulp --profile`  (clean app then buil)

## Test the app

### Unit tests

Running `gulp test` will run the unit tests with karma.

## Clean the app

To remove builded artifacts, run command

  `gulp clean`





