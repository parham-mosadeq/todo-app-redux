import React from 'react';
// redux
import { Provider } from 'react-redux';

import store from './redux/store';

// component
import Todos from './components/Todos';

const App = () => {
  return (
    <main className=' h-screen flex flex-row align-center justify-center text-center  '>
      <Provider store={store}>
        <article className='w-screen'>
          <Todos />
        </article>
      </Provider>
    </main>
  );
};

export default App;
