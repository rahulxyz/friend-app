import { useState } from "react";
import FriendList from "components/friendList/FriendList";
import "./Home.css";

const LIST = [
    {
        id: "1",
        name: "Vijay",
        description: "is your friend",
        isFavourite: false,
    },
    {
        id: "2",
        name: "Avinash",
        description: "is your friend",
        isFavourite: false,
    },
    {
        id: "3",
        name: "Abhishek",
        description: "is your friend",
        isFavourite: false,
    },
    {
        id: "4",
        name: "Anubhav",
        description: "is your friend",
        isFavourite: false,
    },
    {
        id: "5",
        name: "Abhay",
        description: "is your friend",
        isFavourite: false,
    },
];

const FILTER = {
    All: "ALL",
    Favourite: "FAVOURITE",
    UnFavourite: "UNFAVOURITE",
};

const Home = () => {
    const [friendList, setFriendList] = useState(LIST);
    const [filter, setFilter] = useState(FILTER.All);
    const [newFriend, setNewFriend] = useState("");

    const addFriend = (e) => {
        if (e.key == "Enter") {
            let newFriend = {
                id: (friendList.length + 1).toString(),
                name: e.target.value,
                description: "is your friend",
                isFavourite: false,
            };
            let updatedList = [...friendList, newFriend];
            setFriendList(updatedList);
            setNewFriend("");
        }
    };

    

    return (
        <div className="home-wrapper">
            <div className="container">
                <div className="home-content">
                    <div className="main">
                        <h2>FriendList</h2>
                        <div className="filter">
                            <input value={newFriend} onChange={(e) => setNewFriend(e.target.value)} placeholder="Add New Friend" type="text" name="friendName" onKeyDown={addFriend} autoComplete="off"/>
                            <select name="filter" onChange={(e) => setFilter(e.target.value)} value={filter}>
                                <option value={FILTER.All}>{FILTER.All}</option>
                                <option value={FILTER.Favourite}>{FILTER.Favourite}</option>
                                <option value={FILTER.UnFavourite}>{FILTER.UnFavourite}</option>
                            </select>
                        </div>
                    </div>
                    <div className="main-list">
                        <FriendList list={friendList} filter={filter} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
