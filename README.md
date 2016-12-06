# Ext JS Reactor Boilerplate

A foundation for React apps that use Ext JS components.

## Requirements

* Ext JS 6.2+
* Sencha Cmd 6.2+

## Quick Start

If you haven't already, download Ext JS 6.2+ and Sencha Cmd 6.2+.

Then, run the following to clone and build the project:

    git clone git@github.com:sencha/extjs-reactor.git
    cd extjs-reactor/packages/reactor-boilerplate
    npm install

Copy your Ext JS SDK into packages/reactor-boilerplate/ext, then run:

    npm start

This will build and server the app using webpack-dev-server.  The build is done when you see the following line:

    [INF] Waiting for changes...  

You can view the app by pointing your browser to [http://localhost:8080](http://localhost:8080)

You can also run and serve a production build using:

    npm run build
    npm run prod

