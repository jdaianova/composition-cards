import "./Card.css";

function Card(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <a href={props.href} className="btn btn-primary">
                    <strong>Go somewhere</strong>
                </a>
            </div>
        </div>
    );
}

export default Card;