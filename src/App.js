import './App.css';
import axios from 'axios';

let apiKey = "677a37fe22msh245d997faf24bc1p1fd6d4jsn758c3d4122f2";
let index = 50;

function App() {
  let arrayResults = [];

  function fetchItems(){
    axios(`https://unogsng.p.rapidapi.com/search?rapidapi-key=${apiKey}`, 
    {"params":{
        "start_year":"2000",
        "orderby":"rating",
        "limit": `${index}`,
        "audio":"english",
        "offset":"50",
        "end_year":"2020"}
        }).then((response)=>{
          response.data.results.forEach(element => {
            arrayResults.push(element);
          });
        }).catch((error)=>{
          console.log(error);
        })
        index += 50;
  }

  // to do: try to make each request bring a different set of movies back
  // look into the offset?

  
//   fetchItems();
//   console.log(arrayResults);

// arrayResults = [];
// fetchItems();
// console.log(arrayResults);

// arrayResults = [];
// fetchItems();
// console.log(arrayResults);

  function displayOneItem(){

  }

  return (
  <div className="App">
      <div class="card">
        <img src="" alt ='' />
        <div class="container">
          {arrayResults[0]}
         
        </div>
      </div>
    </div>
    
  );
}

export default App;
