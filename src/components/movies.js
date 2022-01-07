import React from "react"
import { Link } from "react-router-dom"
import Listgroup from "./listgroup"
import Pagination from "./pagination"
import { getMovies, getGenre, moviesArray, sort_by } from "../utils/utils"

class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            genre: [],
            columns: ['id', 'title', 'rate', 'genre', 'stock'],
            itemPerPage: 3,
            currentPage: 1,
            sortBy: 'id',
            icon: '▲',
            selectedGenre: null
        }
    }
    componentDidMount() {
        this.setState({ movies: getMovies(), genre: getGenre() })
    }
    deleteMovies(movieId) {
        console.log("Hi,", movieId)
        const movies = this.state.movies.filter((movie) => movie.id !== movieId)
        this.setState({ movies: movies })
    }

    paginationHandler = (page) => {
        this.setState({ currentPage: page })
        console.log(page)
    }

    listHandler = (genre) => {
        this.setState({ selectedGenre: genre.genre, currentPage: 1 })
    }
    sortHandler = (sortBy) => {
        console.log(sortBy)
        return this.setState({ sortBy })
    }

    render() {
        const { movies: allMovies,
            currentPage,
            itemPerPage,
            sortBy,
            genre,
            selectedGenre,
            icon,
            columns,
        } = this.state
        const movieGenre = allMovies.filter(movie => { return (movie.genre === selectedGenre) })
        const movieArray = selectedGenre === null ? allMovies : movieGenre
        const movieSorted = movieArray.sort(sort_by(sortBy,))
        const movies = moviesArray(movieSorted, currentPage, itemPerPage)
        return (
            <div className="row m-5">
                <div className="col-3">
                    <Listgroup
                        genre={genre}
                        selectedGenre={selectedGenre}
                        listHandler={this.listHandler}
                    />
                </div>
                <div className="col-9">
                    <p>Total movies {movieArray.length}</p>
                    <table className="table table-bordered">
                        <thead className="thead-light">
                            <tr>
                                {columns.map(column => (
                                    <th key={column} onClick={() => this.sortHandler(column)}>
                                        <h1 style={{ cursor: 'pointer' }}> {column.toUpperCase()} {sortBy === column ? icon : ''}</h1>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(x =>
                                <tr key={x.id}>
                                    <th key={x.id} >{x.id}</th>
                                    <td> <Link to = {`${x.id}`}> {x.title} </Link></td>
                                    <td> {x.rate} </td>
                                    <td> {x.genre} </td>
                                    <td> {x.stock} </td>
                                    <td> <button className="btn btn-danger badge" id={x.id} onClick={() => { this.deleteMovies(x.id) }}>Delete</button> </td>
                                </tr>
                            )}
                        </tbody>

                    </table >
                </div>
                <div>
                    <Pagination
                        key={movies.length}
                        itemCount={movieArray.length}
                        itemPerPage={itemPerPage}
                        paginationHandler={this.paginationHandler}
                        currentPage={currentPage}
                    />
                </div>
            </div>


        )
    }
}

export default Movies