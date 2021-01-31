import { useEffect, useState } from "react";
import FriendItem from "components/friendItem/FriendItem";
import Pagination from "components/pagination/Pagination";
import Modal, { MODAL } from 'components/modal/Modal';
import "./FriendList.css";

const FILTER = {
    All: "ALL",
    Favourite: "FAVOURITE",
    UnFavourite: "UNFAVOURITE",
};

const ROW_PER_PAGE = 4;

const FriendList = (props) => {
    const [friendList, setFriendList] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    useEffect(() => {
        setFriendList(props.list);
    }, [props.list]);

    const handlePageClick = (currentPage) => {
        setStartIndex((currentPage - 1) * ROW_PER_PAGE);
    };

    const handleDelete = (id) => {
        setShowModal(true);
        setDeleteId(id);
    };

    const toggleFavourite = (id, isFavourite) => {
        let updatedList = friendList.map((friend) => {
            if (friend.id === id) {
                friend.isFavourite = isFavourite;
            }

            return friend;
        });

        setFriendList(updatedList);
    };

    useEffect(() => {
        handleFilterChange(props.filter);
    }, [props.filter]);

    const handleFilterChange = (filter) => {
        let filterFriendList = [];

        switch (filter) {
            case FILTER.All:
                filterFriendList = props.list;
                break;
            case FILTER.Favourite:
                filterFriendList = props.list.filter((friend) => friend.isFavourite);
                break;
            case FILTER.UnFavourite:
                filterFriendList = props.list.filter((friend) => !friend.isFavourite);
                break;
        }

        setFriendList(filterFriendList);
    };

    const searchFriend = (e) => {
        if (e.key == "Enter") {
            if (searchText == "") {
                resetFriendList();
            } else {
                let value = searchText.toLowerCase();
                let updatedList = friendList.filter((friend) => {
                    let name = friend.name.toLowerCase();

                    return name.includes(value);
                });
                setFriendList(updatedList);
                setSearchText("");
            }
        }
    };

    const resetFriendList = () => {
        setFriendList(props.list);
    };

    const handleSubmitModal = (type) => {
        switch (type) {
            case MODAL.CANCEL:
                break;
            case MODAL.CONFIRM:

                let updatedList = friendList.filter((friend) => friend.id !== deleteId);
                setFriendList(updatedList);
                break;
        }

        setShowModal(false);
        setDeleteId("");
    };

    return (
        <div className="list-wrapper">
            {showModal && <Modal handleSubmitModal={handleSubmitModal} />}
            <div className="container">
                <div className="list-content">
                    <input placeholder="Search" type="search" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={searchFriend} />
                    <ul className="friend-list">
                        {friendList.slice(startIndex, startIndex + ROW_PER_PAGE).map((friend) => (
                            <FriendItem {...friend} toggleFavourite={toggleFavourite} handleDelete={handleDelete} />
                        ))}
                    </ul>
                    <Pagination pageCount={Math.ceil(friendList.length / ROW_PER_PAGE)} handlePageClick={handlePageClick} />
                </div>
            </div>
        </div>
    );
};

export default FriendList;
