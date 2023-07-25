import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/"
});

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axiosInstance.get(`/people`).then(function (response) {
          setList(response.data.results);
        });
      } catch (error) {
        console.log("error");
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="App">
      <h1>Star wars</h1>

      {list && (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
