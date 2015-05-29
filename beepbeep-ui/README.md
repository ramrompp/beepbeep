# BeepBeep — Frontend for Mepa-Store Market Ad Service

This project provides a user interface implementation for Mepa-Store Market Ad service.

The app provides basic functionality for searching, creation and deletion of market ads. 

## Getting Started

To get you started you can simply clone the beepbeep repository and install the dependencies:

### Prerequisites

You need git to clone the beepbeep repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

Number of node.js tools are also used to initialize and test beepbeep. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone beepbeep

Clone the beepbeep repository using [git][git]:

```
git clone https://github.com/ramrompp/beepbeep.git
cd beepbeep
```

If you just want to start a new project without the beepbeep commit history then you can do:

```bash
git clone --depth=1 https://github.com/ramrompp/beepbeep.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

BeepBeep has two kinds of dependencies: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
beepbeep changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app`.



## Directory Layout

```
app/                    --> all of the source files for the application
  assets/               --> all of the application specific custom assets
  components/           --> all app specific modules
    marketads/              --> marketads related components
      add/                  --> all components related to add module
        AddController.js              --> Controller for add module
        AddView.html                  --> Add view markup file
      delete/               --> all components related to delete module
        DeleteController.js           --> Controller for delete module
      details/              --> all components related to details module
        DetailsController.js          --> Controller for details module
        DetailsView.html              --> Details view markup file
      search/               --> all components realted to search module
        SearchController.js           --> Controller for search module
        SearchView.html               --> Search view markup file
      MarketAdService.js    --> Service module to wrap communication with Mepa-Store Market Ad service
  shared/                   --> Contains all application shared directives
    messages/               --> all components related to global message field.
      MessageDirective.js             --> Directive used in showing message content
      MessageView.html                --> Markup of message field.
  app.module.js       --> main application module
  app.route.js        --> application route module
  index.html          --> app layout file (the main html template file of the app)
e2e-tests/            --> end-to-end tests
  protractor-conf.js  --> Protractor config file
  GoldenPathStory.js  --> end-to-end golden path scenarios to be run by Protractor
tests/                --> unit tests
karma.conf.js         --> config file for running unit tests with Karma
package.json          --> application package descriptor
bower.json            --> bower configuration file
.bowerrc              --> additional bower configuration file
README.md             --> application documentation file
```

## Testing

There are two kinds of tests in the beepbeep application: Unit tests and End to End tests.

### Running Unit Tests

Unit tess are written in [Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found in `tests` directory. They are named as `*Spec.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The beepbeep app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

By default beepbeep Protractor configuration utilizes Chrome based WebDriver. This means that you need
 to have Google Chrome Browser installed on the system you are executing E2E tests on.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The beepbeep
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

You might need to start webdriver manually before executing Protractor. The beepbeep project 
comes with a predefined script to do this:

```
npm run start-webdriver
```

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


### Running the App during Development

The beepbeep project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

### Running the App in Production

All necessary components in order to run beepbeep in production http server of your choosing should
be in the `app`-directory.

Beepbeep has a http level dependency to external public ReST service. Make sure that your network
allows client browsers to access this endpoint.

## Continuous Integration

No CI environment is configured for this app.

## Contact

For more information on AngularJS please check out http://angularjs.org/

# Credits
Following credits are in order in relation to this project:

Project and documentation base was provided by [Angular Seed Project][angular-seed-project].
User interface assets are provided by [Semantic UI default assets][semantic-ui]

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[angular-seed-project]: https://github.com/angular/angular-seed
[semantic-ui]: http://semantic-ui.com
[http-server]: https://github.com/nodeapps/http-server