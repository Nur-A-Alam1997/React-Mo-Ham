const genre = [{ "id": 1, "genre": "Action" },
{ "id": 2, "genre": "Comedy", },
{ "id": 3, "genre": "Thriller" },]

export const getGenre = () => {
    return genre
}

const movies = [{ "id": 1, "title": "Cave, The", "genre": "Action", "stock": 3, "rate": 9 },
{ "id": 2, "title": "Cop and ½", "genre": "Comedy", "stock": 2, "rate": 3 },
{ "id": 3, "title": "African Queen, The", "genre": "Comedy", "stock": 7, "rate": 9 },
{ "id": 4, "title": "Seven Years Bad Luck", "genre": "Comedy", "stock": 3, "rate": 5 },
{ "id": 5, "title": "Life After Beth", "genre": "Comedy", "stock": 1, "rate": 5 },
{ "id": 6, "title": "Moving Out", "genre": "Action", "stock": 8, "rate": 7 },
{ "id": 7, "title": "Romeo Must Die", "genre": "Thriller", "stock": 9, "rate": 5 },
{ "id": 8, "title": "Cape Fear", "genre": "Thriller", "stock": 6, "rate": 8 },
{ "id": 9, "title": "Robe, The", "genre": "Action", "stock": 8, "rate": 6 },
{ "id": 10, "title": "Seduced and Abandoned", "genre": "Comedy", "stock": 9, "rate": 4 }]

export const getMovies = () => {
    return movies
}

export const moviesArray = (movies, currentPage, itemPerPage) => {
    const moviesArray = movies.slice((currentPage - 1) * itemPerPage, (currentPage - 1) * itemPerPage + itemPerPage)
    return moviesArray
}


export const sort_by = (field, reverse, primer) => {
    const key = primer ? (x) => { return primer(x[field]) } : (x) => { return x[field] };
    reverse = !reverse ? 1 : -1;
    return (a, b) => {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}
