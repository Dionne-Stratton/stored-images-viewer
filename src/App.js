import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/artwork")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div className="App">
      <h1>Image uploading react</h1>
      {data.map((singleData) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        );
        return (
          <div>
            <img src={`data:image/png;base64,${base64String}`} width="300"/>
            <p>{singleData.title}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;