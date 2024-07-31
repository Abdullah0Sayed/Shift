
import '../css/box.css';
function Box(props) {
    return (
        <div class="box">
            <div class="box-icon">
                <img src={props.icon} alt=""/>
            </div>
            <div class="box-title">
                <p>{props.title}</p>
            </div>
            <div class="box-description">
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Box;