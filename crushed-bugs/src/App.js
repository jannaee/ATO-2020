// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Carbon imports
import { Grid, Row, Column } from 'carbon-components-react';

// Local imports
import ATOForm from './components/ATOForm';
import Launch from './components/Launch';
import './app.scss';

function App () {
  return (
    <>
      <Grid className='testingForm'>
        <Row>
          <Column>
            <ATOForm />
            <Launch />
          </Column>
        </Row>
      </Grid>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById( 'root' )
);

export default App;