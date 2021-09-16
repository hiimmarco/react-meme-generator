import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [templates, setTemplates] = useState([]);
  const [topText, setToptext] = useState('');
  const [bottomText, setBottomtext] = useState('');

  useEffect(() => {
    fetch('https://api.memegen.link/templates').then((response) =>
      response.json().then((stream) => setTemplates(stream.blank)),
    );
  }, []);

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
              value={topText}
              onChange={(event) => setToptext(event.currentTarget.value)}
            />
          </label>
          <label className="formlabel">
            Bottom-Text:
            <input
              className="forminput"
              placeholder="e.g. 'Memes Everywhere'"
              value={bottomText}
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
            alt="Example Meme"
            className="exampleMeme"
          />
        </main>
      </header>
    </div>
  );
}

export default App;
