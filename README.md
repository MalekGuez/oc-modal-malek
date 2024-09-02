# oc-modal-malek

> OC Modal

[![NPM](https://img.shields.io/npm/v/oc-modal-malek.svg)](https://www.npmjs.com/package/oc-modal-malek) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save oc-modal-malek
```

## Usage

```jsx
import React, { Component } from 'react'

import OCModalMalek from 'oc-modal-malek'
import 'oc-modal-malek/dist/index.css'

class Example extends Component {
  render() {
    // isOpen should be a boolean state to handle display
    // onClose sets boolean state to false 
    return <OCModalMalek isOpen={true} onClose={() => console.log("closed")} text="Thanks for your subscription !" />
  }
}
```

## License

MIT © [](https://github.com/)
