# Material Design JS 
[![Build Status](https://travis-ci.com/AmirHosseinKarimi/MaterialDesign-JS.svg?branch=master)](https://travis-ci.com/AmirHosseinKarimi/MaterialDesign-JS) [![npm](https://img.shields.io/npm/v/mdi-js?color=blue)](https://www.npmjs.com/package/mdi-js)

Note: This package is a dependency of another package, which I will create for React that automatically load the icon.

If you using the [MaterialDesign-JS](https://github.com/Templarian/MaterialDesign-JS) from [Templarian](https://github.com/Templarian), All variables of icons are stored in one file and you can import specific icon.

But if you want a dynamic import icons, which need when you create a dynamic application, you can not import icons dynamically.

This package read the original files which stored all variables of icons from [MaterialDesign-JS](https://github.com/Templarian/MaterialDesign-JS) and write them in one file per icon.
So you can also dynamically import icons.

## Installation
via npm:
```
npm install mdi-js
```
via yarn:
```
yarn add mdi-js
```

## Usage
### Simply import an icon:
```javascript
import mdiAccount from 'mdi-js/icons/mdiAccount';
console.log(mdiAccount); // "M...Z"
```

### Create dynamically load icons:
If you need a dynamically load icon, you can create the following component:
```javascript
import React from "react";
import { Icon as MDIcon } from "@mdi/react";

class Icon extends React.Component {
  render() {
    let icon = require(`mdi-js/icons/${this.props.icon}`).default;
    if (!icon) {
      throw Error(`Could not find mdi-js/icons/${icon}`);
    }
    const iconName = this.props.icon.substr(3);
    return <MDIcon path={icon} />;
  }
}

export default Icon;
```
and use like this:
```javascript
import Icon from "./Icon";
...
<Icon icon="mdiAccount" />
```

## Contribute
I will be happy if know someone like to contribute this package.
Just fork this repository, commit and make pull request.
