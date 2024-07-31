
import loading from '../images/loading.gif';
import '../css/loader.css';
function Loader() {
    return (
        <div class="container-loader">
            <img src={loading} alt="" class="loader"/>
        </div>
        
    );
}

export default Loader;