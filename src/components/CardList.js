import React from 'react';
import axios from 'axios';
import Card from './Card';

let apiKey = "";

class CardList extends React.Component {
    
    state = {
      arrayResults: [],
      index: 50,
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
          {this.state.arrayResults && 
             this.state.arrayResults.map((element) => (
                <Card data={element} addMovieToArray={this.props.addMovieToArray}/>
             ))
           }
           
         </div>
     </div>
   )
  }
   
}


export default CardList;