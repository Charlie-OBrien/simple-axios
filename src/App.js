import React, { useEffect, useState} from 'react';
import axios from 'axios';


const ENDPOINT_URL = "https://jsonplaceholder.typicode.com/comments"

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
      {data.map(item => (
            <li key={item.postId}>{item.postId}  {item.body}</li>
          ))}
      </ul>      
    </div>
  )}
  </div>
)
};

export default App;

