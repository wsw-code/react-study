import React, { useState, useEffect } from 'react';

function App(props) {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect')
    // console.log(document.getElementById('box'))
    document.title = `You clicked ${props.id} times`;
    return ()=>{
      console.log('clear')
      // console.log(count)
    }
  });
  // console.log('render'+count)
  return (
    
    <div id="box">
      <p>You clicked {props.id} times</p>
      {/* <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
    </div>
  );
}

export default App;
