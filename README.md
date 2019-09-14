# YC-Battery

An example of a webcomponent using Lit-element.

## Installation

```sh
npm install yc-battery
```

or using yarn:

```sh
yarn add yc-battery
```

## Usage

Recommended way: in a lit template (see also, demo folder):

```js
import { html, render } from 'lit-html';
import '../src/YCBattery.js';

const app = document.getElementById('myApp');

const template = html`
  <yc-battery .fillAmount=${30}></yc-battery>
`;

render(template, app);
```

Regular usage in html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="module">
      import 'yc-battery/yc-battery.js';
    </script>
  </head>
  <body>
    <yc-battery fillAmount="10"></yc-battery>
  </body>
</html>
```
