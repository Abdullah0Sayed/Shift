
import '../css/bookreview.css';
function BookReview(props) {
    return (
        <div className="col-1 book-review-componnet">
            <div className='review-heading'>
                <p className="book-review-name p-0 m-0">{props.bookReviewTitle}</p>
                <img src={props.bookReviewIcon} alt="" className='book-review-icon'/>
            </div>

            {/* <div className='book-values'>
               {props.array.map((element)=>{
                return (<p className='book-value'>{element.value}</p>);
               })}
            </div> */}

        </div>
    );
}

export default BookReview;