This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Errors 

I encountered a few errors with the setup that was recommended through Jest Enzyme and React. Here is a list of workarounds which lead me to what you see in this repo now.
```Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none.
          To configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
          before using any of Enzyme's top level APIs, where `Adapter` is the adapter
          corresponding to the library currently being tested. For example:

          import Adapter from 'enzyme-adapter-react-15';```

#### Followed by
```Cannot find module 'jest-enzyme' from 'setupTests.js'```

Instead of setupTests.js (I did not use a jest.config)
// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#jest-enzyme-environment
// import 'jest-enzyme';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

Use this

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
In the Package.json file
Add to scripts
    "test": "jest --collectCoverage --bail[=false] -u --setupFiles ./src/setupTests.js",

Place jest toward top as a top level and add
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],






To resolve the error:

    ```Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html```

Add a .babelrc file with this
```{
    "env": {
        "development": {
            "plugins": ["transform-es2015-modules-commonjs"]
        },
        "test": {
            "plugins": ["transform-es2015-modules-commonjs", "@babel/plugin-proposal-class-properties"],
            "presets": [
                "@babel/preset-react"
            ]
        }
    }
}```

Followed with installing this dependency
```npm i babel-plugin-transform-es2015-modules-commonjs```



