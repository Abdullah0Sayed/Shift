
import '../css/bookreview.css';
function BookReview(props) {
    let services = props.services ;
    return (
        <div className="col-1 book-review-componnet">
            <div className='review-heading'>
                <p className="book-review-name p-0 m-0">{props.bookReviewTitle}</p>
                <img src={props.bookReviewIcon} alt="" className='book-review-icon' />
            </div>
            {/* <p className='review-value'>{props.reviewValue}</p> */}
            
            <div className='review-value'>
               {services ? services.map((element)=>{return (<p className='review-value'>{element}</p>)}) : <p className='review-value'>{props.reviewValue}</p>}
            </div>

        </div>
    );
}

export default BookReview;