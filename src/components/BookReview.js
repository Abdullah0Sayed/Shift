
import '../css/bookreview.css';
function BookReview(props) {
    let serviceItems = props.itemsArray ;
    return (
        <div className="book-review-componnet">
            <div className='review-heading'>
                <p className="book-review-name p-0 m-0">{props.bookReviewTitle}</p>
                <img src={props.bookReviewIcon} alt="" className='book-review-icon' />
            </div>
            {/* <p className='review-value'>{props.reviewValue}</p> */}
            
            <div className='review-value'>
               {serviceItems ? serviceItems.map((element)=>{return (<p className='review-value m-0'> - {element}</p>)}) : <p className='review-value'>{props.reviewValue}</p>}
               {/* {props.reviewValue} */}
            </div>

        </div>
    );
}

export default BookReview;