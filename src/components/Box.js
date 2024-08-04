
import '../css/box.css';
function Box(props) {
    return (
        <div className="box col-md-3 col-sm-1">
           
            <div className="box-title">
                <p className='m-0'>{props.title}</p>
            </div>
            <div className="box-icon">
                <img src={props.icon} alt=""/>
            </div>
            <div className="box-description">
                <p className='m-0 px-4 py-2'>{props.description}</p>
            </div>
        </div>
    );
}

export default Box;