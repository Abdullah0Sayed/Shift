import '../css/bookservice.css';

function  BookService(props) {
    return (
            <div className="col-1 book-service-componnet">
                
                <p className="book-service-name p-0 m-0">{props.serviceName}</p>
            </div>
    );
}

export default BookService;