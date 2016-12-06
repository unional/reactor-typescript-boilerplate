import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App'; // app components
import { install } from '@extjs/reactor';

// Here we configure react to recognize jsx tags starting with "x-" as Ext JS components by xtype.
install({
    // We set viewport: true because we are using an Ext JS component to manage layouts at the root of our app.
    // Setting viewport: true adds css rules to make the html, body, and the root react element height: 100% to
    // allow the root component to expand to fill the full screen. You should omit this option when using
    // other stylesheets or component libraries to control the layout.
    viewport: true
});

// launch the react app once Ext JS is ready
Ext.onReady(() => ReactDOM.render(<App />, document.getElementById('root')));
