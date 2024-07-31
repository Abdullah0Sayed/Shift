
import '../css/socialLink.css';
function SocialLinks(props) {
    return (
        <>
            <div class="links">
                <a href={props.link}><img src={props.icon} alt="" class="social-icon"/></a>
                
            </div>
        </>
    );
}

export default SocialLinks;