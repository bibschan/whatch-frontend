import './../scss/App.css';

function AcceptButton(props) {
    const { addMovieToArray } = props;
    const { id } = props.data;

    return(
        <div className="accept-button" onClick={ () =>  addMovieToArray(id) }>
            <input type="image" src="assets/—Pngtree—3d green check icon_5142993.png" alt="accept"/>
        </div>
    )
}

export default AcceptButton;