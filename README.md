# Ext JS Reactor Boilerplate

A foundation for React apps that use Ext JS components, in TypeScript.

## Requirements

* Ext JS 6.2+
* Sencha Cmd 6.2+

## Quick Start

If you haven't already, download Ext JS 6.2+ and Sencha Cmd 6.2+ (and install it).

Then, run the following to clone and build the project:

```sh
git clone https://github.com/unional/reactor-typescript-boilerplate.git

cd reactor-typescript-boilerplate
npm install
```

Copy your Ext JS SDK into packages/reactor-boilerplate/ext, then run:

```sh
npm start
```

This will build and server the app using `webpack-dev-server`.  The build is done when you see the following line:

    [INF] Waiting for changes...

You can view the app by pointing your browser to [http://localhost:8070](http://localhost:8070)

You can also run and serve a production build using:

```sh
npm run build
npm run prod
```
