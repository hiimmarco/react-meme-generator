import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('SELECT A TEMPLATE');

  const baseUrl = 'https://api.memegen.link/images/';

  /* Get array of template information (id, name) to use in dropdown*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.memegen.link/templates');
        const json = await response.json();
        setTemplates(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Function to assign the selected template to the selectedTemplate state variable
  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  // Return UI elements
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to</p>
        <h1>Awesome Meme Generator</h1>
        <main className="form">
          {/* Create text input fields for custom text */}
          <label className="formlabel">
            Text-Top:
            <input
              className="forminput"
              placeholder="e.g. 'Memes'"
              value={topText}
              onChange={(event) => setTopText(event.currentTarget.value)}
            />
          </label>
          <label className="formlabel">
            Bottom-Text:
            <input
              className="forminput"
              placeholder="e.g. 'Memes Everywhere'"
              value={bottomText}
              onChange={(event) => setBottomText(event.currentTarget.value)}
            />
          </label>
          <label>
            Choose a template:
            <select onChange={handleTemplateChange}>
              <option value="SELECT A TEMPLATE">
                {' '}
                -- Select a template --{' '}
              </option>
              {templates.map((meme) => (
                <option key={meme.id} value={meme.id}>
                  {meme.name}
                </option>
              ))}
            </select>
          </label>

          <button>Generate meme</button>
          <p>Your generated meme:</p>
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

/*
{templates.map((item) => (
  <option value={item.id} key={item.id}>
    {item.name}
  </option>
))}
*/
