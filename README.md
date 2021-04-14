[![npm version](https://badgen.net/npm/v/@vaadin/vaadin-date-range-picker)](https://www.npmjs.com/package/@vaadin/vaadin-date-range-picker)
[![Bower version](https://badgen.net/github/release/vaadin/vaadin-date-range-picker)](https://github.com/vaadin/vaadin-date-range-picker/releases)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vaadin/vaadin-date-range-picker)
[![Build Status](https://travis-ci.org/vaadin/vaadin-date-range-picker.svg?branch=master)](https://travis-ci.org/vaadin/vaadin-date-range-picker)
[![Coverage Status](https://coveralls.io/repos/github/vaadin/vaadin-date-range-picker/badge.svg?branch=master)](https://coveralls.io/github/vaadin/vaadin-date-range-picker?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-date-range-picker)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/vaadinvaadin-date-range-picker.svg)](https://vaadin.com/directory/component/vaadinvaadin-date-range-picker)

# &lt;vaadin-date-range-picker&gt;

[Live Demo ↗](https://vaadin.com/components/vaadin-date-range-picker/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-date-range-picker/html-api)

[&lt;vaadin-date-range-picker&gt;](https://vaadin.com/components/vaadin-date-range-picker) is a Web Component providing a date selection field which includes a scrollable month calendar view, part of the [Vaadin components](https://vaadin.com/components).

<!--
```
<custom-element-demo height="550">
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="vaadin-date-range-picker.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<vaadin-date-range-picker label="Label" placeholder="Placeholder">
</vaadin-date-range-picker>
```

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-date-range-picker/master/screenshot.png" width="439" alt="Screenshot of vaadin-date-range-picker">](https://vaadin.com/components/vaadin-date-range-picker)

## Installation

The Vaadin components are distributed as Bower and npm packages.
Please note that the version range is the same, as the API has not changed.
You should not mix Bower and npm versions in the same application, though.

Unlike the official Polymer Elements, the converted Polymer 3 compatible Vaadin components
are only published on npm, not pushed to GitHub repositories.

### Polymer 2 and HTML Imports Compatible Version

Install `vaadin-date-range-picker`:

```sh
bower i vaadin/vaadin-date-range-picker --save
```

Once installed, import it in your application:

```html
<link rel="import" href="bower_components/vaadin-date-range-picker/vaadin-date-range-picker.html">
```
### Polymer 3 and ES Modules Compatible Version

Install `vaadin-date-range-picker`:

```sh
npm i @vaadin/vaadin-date-range-picker --save
```

Once installed, import it in your application:

```js
import '@vaadin/vaadin-date-range-picker/vaadin-date-range-picker.js';
```

## Getting started

Vaadin components use the Lumo theme by default.

To use the Material theme, import the correspondent file from the `theme/material` folder.

## Entry points

- The components with the Lumo theme:

  `theme/lumo/vaadin-date-range-picker.html`  
  `theme/lumo/vaadin-date-range-picker-light.html`

- The components with the Material theme:

  `theme/material/vaadin-date-range-picker.html`  
  `theme/material/vaadin-date-range-picker-light.html`

- Alias for `theme/lumo/vaadin-date-range-picker.html`  
  `theme/lumo/vaadin-date-range-picker-light.html`:

  `vaadin-date-range-picker.html`  
  `vaadin-date-range-picker-light.html`


## Running demos and tests in a browser

1. Fork the `vaadin-date-range-picker` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) and [Bower](https://bower.io) installed.

1. When in the `vaadin-date-range-picker` directory, run `npm install` and then `bower install` to install dependencies.

1. Run `npm start`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:3000/components/vaadin-date-range-picker/demo
  - http://127.0.0.1:3000/components/vaadin-date-range-picker/test


## Running tests from the command line

1. When in the `vaadin-date-range-picker` directory, run `polymer test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `npm run lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).


## Contributing

  To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
