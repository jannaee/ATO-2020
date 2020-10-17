import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'carbon-components-react';
import './app.scss';

function App() {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;