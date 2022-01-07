import { Link } from "react-router-dom";

const Listgroup = (props) => {
    const { genre, listHandler, selectedGenre } = props
    // console.log(selectedGenre)
    return (<div className="list-group" id="list-tab" role="tablist">
        <li className={selectedGenre == null ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
            style={{ cursor: 'pointer' }}
            onClick={() => listHandler({ genre: null })}>
            Genres</li>
        {genre.map(genre => (
            <li key={genre.id}
                className={genre.genre == selectedGenre ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                style={{ cursor: 'pointer' }}
                onClick={() => listHandler(genre)}>
                {genre.genre}
            </li>
        ))}
    </div>
    );
}


export default Listgroup