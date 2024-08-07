
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import '../css/pageination.css';


function Pageination(props) {


    return (

       

        <ReactPaginate
        
            previousLabel={'السابق'}
            nextLabel={'التالي'}
            breakLabel={'...'}
            pageCount={Math.ceil(props.pageCount)}
            pageRangeDisplayed={1}
            marginPagesDisplayed={4}
            onPageChange={props.handlePageClick}

            // classes bootstrap
            containerClassName={'pagination justify-content-center'}
            pageClassName={"page-item"}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
        
        />
    );
}

export default Pageination;