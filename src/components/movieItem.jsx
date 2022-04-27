export default function MovieItem(props) {
    return (
        <div className="movie-item-style-2">
            <img src={props.movieImage} alt="" />
            <div className="mv-item-infor">
                <h6><a href="moviesingle.html">{props.title} <span>{props.yearMovie}</span></a></h6>
                <p className="rate"><i className="ion-android-star"></i><span>{props.calification}</span> /10</p>
                <p className="describe">{props.describe}</p>
                <p className="run-time"> Duración: {props.runTime}’    .     <span>MMPA: {props.MMPA} </span>    .     <span>Lanzamiento: {props.release}</span></p>
                <p>Director: <a href="#">{props.director}</a></p>
                <p>Actores: <a href="#">{props.actorOne},</a> <a href="#">{props.actorTwo},</a> <a href="#"> {props.actorThree}</a></p>
            </div>
        </div>
    )
}