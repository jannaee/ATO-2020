import React from 'react';
import ReactDOM from 'react-dom';
import ATOForm from './components/ATOForm';
import { Grid, Row, Column } from 'carbon-components-react';

import './app.scss';

function App() {
  return (
    <>

      <ATOForm />

    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;