# React-Lazy-Reload
- Reload regularly when the network is down

- example:
```javascript
import React, { Suspense } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import RouterLoader from "./utils/routerLoader.js";
const SuspenseBox = import('@/pages/SuspenseBox');

const List = lazy(() => import('@/pages/list'));

export default function () {
  return (
    <Suspense fallback={<SuspenseBox />}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/list" />
        </Route>
        <Route path="/list" exact component={List} />
      </Switch>
    </Suspense>
  )
}
```

- Contributions:
1. [Tushar Mohan](https://medium.com/@botfather/react-loading-chunk-failed-error-88d0bb75b406)
1. [Guilherme Oenning](https://dev.to/goenning/how-to-retry-when-react-lazy-fails-mb5)