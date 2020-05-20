import React from 'react';

import { Provider } from 'mobx-react';
import stores from './stores';

import Collection from './components/Collection';

function App() {
  return (
    <Provider contacts={stores.contacts}>
      <Collection />
    </Provider>
  );
}

export default App;
