import React from 'react';
// Import the functional component
import LoginFunctional from './LoginFunctional';
// Import the class component
// import LoginClass from './LoginClass';

function App() {
  return (
    <div className="App">
      <LoginFunctional />
      {/* Uncomment the below line to use the class component */}
      {/* <LoginClass /> */}
    </div>
  );
}

export default App;
