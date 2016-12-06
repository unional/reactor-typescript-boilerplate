declare module "@extjs/reactor" {
  import React = require('react')

  export interface InstallOptions {
    /**
     * Adds a stylesheet that mimics an Ext JS Viewport by setting the html, body, and react root element to height: 100%.
     * Set this to true when using an Ext JS compimport React = require('react')

export interface InstallOptions {
    /**
     * Adds a stylesheet that mimics an Ext JS Viewport by setting the html, body, and react root element to height: 100%.
     * Set this to true when using an Ext JS component at the root of your app.
     */
    viewport: boolean;
  }

  /**
   * Configures React.
   */
  export function install(options: Partial<InstallOptions>): void;

  /**
   * Creates a react component for a given Ext JS component.
   * For example: const Grid = reactify('grid');
   * @param target xtype or instance of Ext.Class.
   */
  export function reactify<Props, State>(target: string | (new () => any)): new () => React.Component<Props, State>;
  export function reactify<Props1, State1, Props2, State2>(target1: string | (new () => any), target2: string | (new () => any)): [new () => React.Component<Props1, State1>, new () => React.Component<Props2, State2>];
  export function reactify<Props1, State1, Props2, State2, Props3, State3>(target1: string | (new () => any), target2: string | (new () => any), target3: string | (new () => any)): [new () => React.Component<Props1, State1>, new () => React.Component<Props2, State2>, new () => React.Component<Props3, State3>];
  export function reactify<Props1, State1, Props2, State2, Props3, State3, Props4, State4>(target1: string | (new () => any), target2: string | (new () => any), target3: string | (new () => any), target4: string | (new () => any)): [new () => React.Component<Props1, State1>, new () => React.Component<Props2, State2>, new () => React.Component<Props3, State3>, new () => React.Component<Props4, State4>];
  export function reactify(...targets: (string | (new () => any))[]): (new () => React.Component<any, any>)[];
}
