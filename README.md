# Polymer Typescript Starter Kit

This is a clone from the polymer starter kit. https://github.com/PolymerElements/polymer-starter-kit
The only difference is the use of typescript, gulp, and browsersync.
Included is the visual studio code settings.json that hides .js and .jsmap
files by default. It also sets format on save to true.

### Setup

##### Prerequisites

    npm install -g polymer-cli
    npm install -g bower

##### Initialize project from template

    git clone https://github.com/kaseyhinton/Polymer-Typescript-Starter-Kit.git
    cd polymer-typescript-starter-kit
    bower install
    npm install

### Start the development server
    
    This command watches the html and js files in the src file and updates
    the browsers. The typescript should compile on save.

    gulp

### Build

    polymer build

### Preview the build

    polymer serve build/unbundled

    polymer serve build/bundled
    
### Run tests
    
    polymer test

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the `bundled` build.
