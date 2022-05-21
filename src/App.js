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
      <h1>Database Image Viewer</h1>
      {data.map((singleData) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        );
        return (
          <div className="aboutbox">
            <img src={`data:image/png;base64,${base64String}`} alt={singleData.title} width="30%"/>
            <div className="textbox">
                <p>ID: {singleData._id}</p>
                <p>Title: {singleData.title} | Size:{singleData.size} | Price: ${singleData.price}</p>
                <p>Keywords: {singleData.keyword}</p>
                <p>Description: {singleData.description}</p>
                <a href={singleData.podLink}>Prints Link</a>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;