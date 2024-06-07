<p align="center">
<img alt="Logo Banner" src="https://github.com/GreenestGoat/ShittyIcons/blob/ddc8deae16078ab74fd0546b5d8455281c33be1d/banner/banner.svg?sanitize=true"/>
<br/>

<div align="left">Shitty Icons is a crappy handdrawn icon library built to seamlessly integrate with any project.</div>
<div align="left">

[Documentation](https://paperui.com/)

</div>

## Installation

### CDN

Import Shitty Icons using CDN. The import-min.js file will automatically import all styles and JavaScript files into the ```<head>```.

```html
<script type="module" src="https://unpkg.com/shittyicons"></script>
```

#### 🚧 Specific Version
```html
<script type="module" src="https://unpkg.com/shittyicons@latest"></script>
```

<!--#### 🚧 Development
```html
<script type="module" src="https://unpkg.com/shittyicons@latest"></script>
```-->

### NPM

Install Shity Icons using [npm and node](https://nodejs.org/en).

```bash
npm install shittyicons
```

## Import

Import icon definitions from ```shityicons```.

```index.js```

```js
import shittyIcons from 'shityicons';

document.addEventListener('DOMContentLoaded', () => {
  shittyIcons.replaceIcons();
});
```

## Usage

Use the ```<icon-name>``` tag in HTML markup. Refer to the [Icon Docs](https://paperui.com) for more guidance on using each icon. That's it 🎉.

```HTML```

```html
<!-- example icon -->
<i shitty-icon="archive"></i>

<!-- using vanilla js with no framework -->

<script>
  document.addEventListener('DOMContentLoaded', () => {
    window.shittyIcons.replaceIcons();
  });
</script>
```

Check out the demo on [codepen](https://codepen.io/GreenestGoat/pen/WNBEeNz).

<!--## Backers

Thank you to all our backers! 🙏.

[![Backers](https://opencollective.com/bootstrap/backers.svg?width=890)](https://opencollective.com/bootstrap#backers)-->


## Copyright and license

Licensed under the MIT License, Copyright © 2024-present GreenestGoat.

See [LICENSE](https://github.com/GreenestGoat/ShittyIcons/blob/main/LICENSE) for more information.
