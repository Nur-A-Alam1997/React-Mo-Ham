const Pagination =
({
    itemCount,
    itemPerPage,
    paginationHandler,
    currentPage
}) => {
    console.log(itemCount)
    const pageNumber = Math.ceil(itemCount / itemPerPage)
    const pages = [...Array(pageNumber).keys()].map(i => (i + 1))
    console.log(pages, pageNumber, itemPerPage, itemCount)
    if (pages < 1) return null;
    return (<nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page => (
                <li key={page} className={page === currentPage ? "page-item active" : "page-item "}>
                    <a className="page-link" onClick={() => { paginationHandler(page) }}>{page}</a>
                </li>)
            )}

        </ul>
    </nav>)
}

export default Pagination