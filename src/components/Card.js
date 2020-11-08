import AcceptButton from './../elements/AcceptButton';
import DeclineButton from './../elements/DeclineButton';

function Card(props) {
   const { poster, title, synopsis, year} = props.data;
    return(
        <div className="card">
            <div className="card--poster" style={{backgroundImage: {poster}}}>
                {/* <img src={poster} alt="Poster"/> */}
            </div>
            <div className="card--button">
                <DeclineButton />
                <AcceptButton />  
            </div>
            <div className="card--info">
                <h1 className="title"> {title}</h1>
                <p className="year"> {year}</p>
                <p> {synopsis}</p>
            </div>
            
        </div>
    );
}

export default Card;