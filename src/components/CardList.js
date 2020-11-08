import React from 'react';
import axios from 'axios';
import Card from './Card';

let apiKey = "677a37fe22msh245d997faf24bc1p1fd6d4jsn758c3d4122f2";

class CardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arrayResults: [],
      index: 50,
    }
  }
    
getMovies(){
   axios(`https://unogsng.p.rapidapi.com/search?rapidapi-key=${apiKey}`, 
      {"params":{
          "start_year":"2000",
          "orderby":"rating",
          "limit": '50',
          "audio":"english",
          "offset":`${this.state.index}`,
          "end_year":"2020"}
          }).then((response)=>{
            response.data.results.forEach(element => {
              this.setState({
                arrayResults: [...this.state.arrayResults, element]
              });
            });
            console.log(this.state.arrayResults);
          }).catch((error)=>{
            console.log(error);
          })
  }

  componentDidMount() {
    this.getMovies();
  }

  render(){
    return (
      <div className="cardList">
         <img src="" alt ='' />
         <div className="container">
      
        {/* the code below renders all data at the same time */}
          {
             this.state.arrayResults.map((element) => (
                <Card data={element}/>
             ))
           }
           
         </div>
     </div>
   )
  }
   
}


export default CardList;