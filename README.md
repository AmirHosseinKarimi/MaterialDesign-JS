# Material Design JS 
[![Build Status](https://travis-ci.com/AmirHosseinKarimi/MaterialDesign-JS.svg?branch=master)](https://travis-ci.com/AmirHosseinKarimi/MaterialDesign-JS) [![npm](https://img.shields.io/npm/v/mdi-js?color=blue)](https://www.npmjs.com/package/mdi-js)

If you using the [MaterialDesign-JS](https://github.com/Templarian/MaterialDesign-JS) from [Templarian](https://github.com/Templarian), All variables of icons are stored in one file and you can import specific icon.

But if you want a dynamic import icons, which need when you create a dynamic application, you can not import icons dynamically.

This package read the original files which stored all variables of icons from [MaterialDesign-JS](https://github.com/Templarian/MaterialDesign-JS) and write them in splitted file per icon.
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
Simple import an icon:
```javascript
import mdiAccount from 'mdi-js/icons/mdiAccount';
console.log(mdiAccount); // "M...Z"
```

## Contribute
I will be happy if know someone like to contribute this package.
Just fork this repository, commit and make pull request.
