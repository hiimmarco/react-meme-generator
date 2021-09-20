import './App.css';
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

  const onDownloadClick = () => {
    saveAs(customUrl, `${imageStyle}-${topText}-${bottomText}.jpg`);
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

          <button onClick={generateMeme}>Generate meme</button>
          {/* Show example and generated meme */}
          <div>
            <p>Example:</p>

            <img
              src="./memes_everywhere.png"
              alt="Example Meme"
              className="exampleMeme"
            />
            <p>Your generated meme:</p>
            <img src={newMeme} alt="Meme" />
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
