import React, { useEffect, useState} from 'react';
import axios from 'axios';


const ENDPOINT_URL = "http://localhost:5000/video/video1"

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`${ENDPOINT_URL}`);
        setData(response);
        //console.log("The response is -> " + JSON.stringify(response) + " <-") //for debug
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

return (
  <div>
  {loading && <div>Loading</div>}
  {!loading && (
    <div>
      <h2>Doing stuff with data</h2>
      <ul>

          {data.title}
      </ul>      
    </div>
  )}
  </div>
)
};

export default App;

