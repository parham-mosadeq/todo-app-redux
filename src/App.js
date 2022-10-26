import React from 'react';
// redux
import { Provider } from 'react-redux';

import store from './redux/store';

// component
import Todos from './components/Todos';

const App = () => {
  return (
    <main>
      <h1>Todos</h1>

      <Provider store={store}>
        <article>
          <Todos />
        </article>
      </Provider>
    </main>
  );
};

export default App;
