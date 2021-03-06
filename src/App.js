import './App.css';
import saveAs from 'file-saver';
import { useEffect, useState } from 'react';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [newMeme, setNewMeme] = useState('');

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
  // Function to assign the given top text to the topText state variable

  const handleTopTextChange = (event) => {
    setTopText(event.currentTarget.value);
  };

  // Function to assign the given bottom text to the bottomText state variable

  const handleBottomTextChange = (event) => {
    setBottomText(event.currentTarget.value);
  };

  const generateMeme = () => {
    setNewMeme(
      `https://api.memegen.link/images/${selectedTemplate}/${topText}/${bottomText}.jpg`,
    );
  };

  // Function to assign the given bottom text to the bottomText state variable

  const downloadMeme = () => {
    saveAs(newMeme, `${topText}-${bottomText}.jpg`);
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
              onChange={handleTopTextChange}
            />
          </label>
          <label className="formlabel">
            Bottom-Text:
            <input
              className="forminput"
              placeholder="e.g. 'Memes Everywhere'"
              value={bottomText}
              onChange={handleBottomTextChange}
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
          <div className="buttons">
            <button onClick={generateMeme} className="button">
              Generate meme
            </button>
            <button onClick={downloadMeme} className="button downloadbutton">
              Download meme
            </button>
          </div>
          {/* Show example and generated meme */}
          <div>
            <h3>Your generated meme:</h3>
            <img src={newMeme} alt="Meme" />
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
