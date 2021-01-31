import "./FriendItem.css";

const FriendItem = (props) => {
    const { id, name, description, isFavourite, toggleFavourite, handleDelete } = props;
    const starClass = isFavourite ? "highlight" : "";
    return (
        <li key={id} className="friend-item">
            <div className="friend-item-text">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="friend-item-button">
                <button className={starClass} onClick={() => toggleFavourite(id, !isFavourite)}>{isFavourite ? <i className="fa fa-star"></i> : <i className="fa fa-star" ></i>}</button>
                <button className="delete-button" onClick={() => handleDelete(id)}><i className="fa fa-trash"></i></button>
            </div>
        </li>
    );
};

export default FriendItem;
