import logo from "./logo.svg";
import "./App.css";
import * as tf from "@tensorflow/tfjs";

//Model and metadata URL
const url = {
  model:
    "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json",
  metadata:
    "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json",
};
async function loadModel(url) {
  try {
    const model = await tf.loadLayersModel(url.model);
    setModel(model);
  } catch (err) {
    console.log(err);
  }
}
async function loadMetadata(url) {
  try {
    const metadataJson = await fetch(url.metadata);
    const metadata = await metadataJson.json();
    setMetadata(metadata);
  } catch (err) {
    console.log(err);
  }
}
//React Hook
const [metadata, setMetadata] = useState();
const [model, setModel] = useState();
useEffect(() => {
  tf.ready().then(() => {
    loadModel(url);
    loadMetadata(url);
  });
}, []);

const inputText = text
  .trim()
  .toLowerCase()
  .replace(/(\.|\,|\!)/g, "")
  .split(" ");

//Convert the alphabetical token to numerical token using metadata
const OOV_INDEX = 2;
const sequence = inputText.map((word) => {
  let wordIndex = metadata.word_index[word] + metadata.index_from;
  if (wordIndex > metadata.vocabulary_size) {
    wordIndex = OOV_INDEX;
  }
  return wordIndex;
});

const PAD_INDEX = 0;
const padSequences = (
  sequences,
  maxLen,
  padding = "pre",
  truncating = "pre",
  value = PAD_INDEX
) => {
  return sequences.map((seq) => {
    if (seq.length > maxLen) {
      if (truncating === "pre") {
        seq.splice(0, seq.length - maxLen);
      } else {
        seq.splice(maxLen, seq.length - maxLen);
      }
    }
    if (seq.length < maxLen) {
      const pad = [];
      for (let i = 0; i < maxLen - seq.length; ++i) {
        pad.push(value);
      }
      if (padding === "pre") {
        seq = pad.concat(seq);
      } else {
        seq = seq.concat(pad);
      }
    }
    return seq;
  });
};
const paddedSequence = padSequences([sequence], metadata.max_len);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
