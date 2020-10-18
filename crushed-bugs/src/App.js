import React from 'react';
import ReactDOM from 'react-dom';
import ATOForm from './components/ATOForm';
import './app.scss';

function App() {
  return (
    <div>
      <ATOForm />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;