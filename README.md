# vanilla-js-tabs-library

A complex yet elegantly contained library for managing tabbed interfaces using vanilla JavaScript.

## Installation

Install `vanilla-js-tabs-library` using npm:

```bash
npm install vanilla-js-tabs-library
```

## Usage

To use `vanilla-js-tabs-library`, include it in your project and initialize it by passing a selector that targets your
tabs container.

```html
<!-- Example HTML structure -->
<div id="tabs">
    <div class="tab">Tab 1</div>
    <div class="tab">Tab 2</div>
    <div class="content">Content 1</div>
    <div class="content">Content 2</div>
</div>
```

```javascript
const Tabs = require('vanilla-js-tabs-library');

const myTabs = new Tabs('#tabs');
```

Ensure your HTML follows the structure shown in the example above, with `.tab` for tab headers and `.content` for tab
content.
