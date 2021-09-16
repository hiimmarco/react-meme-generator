import './App.css';
import { useState } from 'react';
import logo from './logo.svg';

function App() {
  const [toptext, setToptext] = useState('');
  const [bottomtext, setBottomtext] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to</p>
        <h1>Awesome Meme Generator</h1>
        <main className="form">
          <label className="formlabel">
            Text-Top:
            <input
              className="forminput"
              placeholder="e.g. 'Memes'"
              value={toptext}
              onChange={(event) => setToptext(event.currentTarget.value)}
            />
          </label>
          <label className="formlabel">
            Bottom-Text:
            <input
              className="forminput"
              placeholder="e.g. 'Memes Everywhere'"
              value={bottomtext}
              onChange={(event) => setBottomtext(event.currentTarget.value)}
            />
          </label>
          <label>
            Choose a car:
            <select name="possiblememes">
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="four">Four</option>
            </select>
          </label>
          <button>Generate meme</button>
          <p>Example:</p>
          <img
            src="./memes_everywhere.png"
            alt="Placeholder Meme"
            className="placeholderimg"
          />
        </main>
      </header>
    </div>
  );
}

export default App;
