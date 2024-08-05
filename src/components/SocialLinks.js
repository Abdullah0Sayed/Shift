
import '../css/socialLink.css';
function SocialLinks(props) {
    return (
        <>
            
                <a href={props.link}><img src={props.icon} alt="" className="social-icon"/></a>
                
            
        </>
    );
}

export default SocialLinks;