import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState<string>('')

  console.log(text.split(' ').filter(letter => letter !== '').length)

  return (
    <div className="App">
      <header className="App-content">
        <h1>Paste you text</h1>
        <textarea name="textarea" id="textarea" value={text} onChange={(e) => setText(e.target.value)} ></textarea>
        <h3>Words: {text.split(' ').filter(letter => letter !== '').length}</h3>
        <h3>Characters: {text.length}</h3>
        {!!text && <button className="reset" onClick={()=> setText('')}>Reset</button>}
        

      </header>
    </div>
  );
}

export default App;
