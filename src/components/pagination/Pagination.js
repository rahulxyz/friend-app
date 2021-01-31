import {useEffect, useState} from 'react'
import './Pagination.css';

const PREVIOUS ="PREVIOUS";
const NEXT = "NEXT";

const Pagination = (props) => {
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    useEffect(()=>{
        setMaxPage(props.pageCount)
        let pageArray = Array.from(Array(props.pageCount).keys()).map(i=>i+1);
        setPages(pageArray)
    },[props.pageCount]);

    useEffect(()=>{
        props.handlePageClick(currentPage);
    },[currentPage]);

    const pageHandler = (e,page)=>{
        switch(page){
            case "PREVIOUS":
                if(currentPage > 1) 
                    setCurrentPage(currentPage-1);
                break;
            case "NEXT": 
                if(currentPage < maxPage) 
                    setCurrentPage(currentPage+1);
                break;
            default:
                setCurrentPage(page);
        }

    }

    return ( 
        <ul className="page-list" >
            <li key={PREVIOUS} onClick={(e)=>pageHandler(e,PREVIOUS)}>&laquo;</li>
            {pages.map(page=>{
                return (
                    <li className={currentPage==page? "current-page" : ""} onClick={(e)=>pageHandler(e,page)} key={page}>{page}</li>
                )
            })
            }
            <li key={NEXT} onClick={(e)=>pageHandler(e,NEXT)}>&raquo;</li>
        </ul>
     );
}
 
export default Pagination;