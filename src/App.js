import React from 'react';

// redux tools
import { Provider } from 'react-redux';

// redux
import store from './redux/store';

// component
import Todos from './components/Todos';

// style
import { Main } from './styles/styledComponents';

const App = () => {
  return (
    <Main>
      <Provider store={store}>
        <article className='w-screen'>
          <Todos />
        </article>
      </Provider>
    </Main>
  );
};

export default App;
