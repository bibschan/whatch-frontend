import AcceptButton from './../elements/AcceptButton';
import DeclineButton from './../elements/DeclineButton';

function Card(props) {
   const { poster, title, synopsis, year} = props.data;
//    const { addMovieToArray } = props;
    return(
        <div className="card">
            <div className="card--poster" >
                {/* must work on displaying the buttons overlayed with image */}
                <img src={poster} alt="Poster"/>
            </div>
            <div className="card--button">
                <DeclineButton />
                <AcceptButton {...props}/>  
            </div>
            <div className="card--info">
                <h1 className="title"> {title}</h1>
                <p className="year"> {year}</p>
                <p> {synopsis} </p>
            </div>
            
        </div>
    );
}

export default Card;