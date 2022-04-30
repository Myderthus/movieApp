export default function Pagination(props) {

    props.page;
    props.total;

    // Esta funcoin sirve para recorrer el array de numero de paginas
    // y mostrarlas, esta forma es con JS puro
    const getPage = () => {
        const result = [];
        for (let i = 0; i < props.total; i++) {
            let page = i + 1;
            result.push(
                <a
                    onClick={() => props.onChange(page)}
                    className={props.page === page ? "active" : ''}
                    href="#">
                    {page}
                </a>
            );
        }
        return result;
    }


    return (
        <div>
            <div className="topbar-filter">
                <label>Movies per page:</label>
                {/* <select>
                    <option value="range">5 Movies</option>
                    <option value="saab">10 Movies</option>
                </select> */}
                <div className="pagination2">
                    <span>Page {props.page} of {props.total}:</span>
                    {/* <a className="active" href="#">1</a> */}

                    {/* {Array.apply(0, props.total).map(value => 
                        <a className="active" href="#">1</a>
                        )} Esta forma de la funcion ocupa menos espaciop en memoria
                        pero es mas compliada de leer*/}

                    {getPage()}

                    {/* <a href="#">2</a>
                    <a href="#"><i className="ion-arrow-right-b"></i></a> */}
                </div>
            </div>
        </div>
    )
}