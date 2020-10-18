import React from 'react';
import ReactDOM from 'react-dom';
import ATOForm from './components/ATOForm';
import { Grid } from 'carbon-components-react';
import './app.scss';

function App () {
  return (
    <>
      <Grid
        className='testingForm'>
        <ATOForm />
      </Grid>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById( 'root' )
);

export default App;