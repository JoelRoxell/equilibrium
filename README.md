# Equilibrium
An initial prototyping project based on some of the latest web technologies to date. It’s purpose is to swiftly allow new ideas to quickly become MVPs, equilibrium also provides an initial setup for a fairly advanced SPA. It provides initial component, folder, and testing -structures. The main goal of this project is to provide an efficient and stable "SPA-starting point”, which also is capable of growing into a more complex system.


## Core Technologies
- CSS modules
- Express
- Flow
- PostCSS
- React
- React-router
- Redux
- Stylus
- Webpack

### Component directory structure
Everything that concerns the component is located in the same folder, besides components that have a more generic behavior. General component are placed within the `common` folder but are still using the same component layout and structure. The reason for this isolation is to allow components to easily be exported to other projects or modules.

```
.
├── sub-components        # Sub-components should be located here.
├── style                 # This folder should export the different styles used within the presentational components.
├── test                  # Individual component tests.
├── core-container.js     # Container component, should use similar structures like HOCs.
├── core-presentation.js  # Core presentational component.
└── index.js              # Should export each component building-block(presentational, container, and combined).
```

## Quick Start

Install dependencies:

```
npm install
```

Run webpack (HMR) and hack on:

```
export NODE_ENV=development
npm run dev
```

## Test
Use `npm run test` to run the test suite once, `npm test-watch` to run defined specs on save.
```
export NODE_ENV=test
npm run test-watch
```
### Example
```javascript
import { expect, renderComponent } from 'helpers/test-helper';
import Navigation, { style } from 'components/navigation';

describe('#Navigation', () => {
  let node;

  beforeEach(function() {
    node = renderComponent(Navigation, document.getElementById('app'), {});
  });

  it('-Render', function() {
    expect(node).to.exist;
  });

  it('-Load style', function() {
    expect(node.className).to.equal(style.navigation);
  });
});
```


## Compile
Builds the project based on `NODE_ENV`, files are outputed to: `build`.
```
npm run compile
```
