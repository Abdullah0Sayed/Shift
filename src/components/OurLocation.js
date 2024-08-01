import SectionHeading from "./SectionHeading";
import '../css/ourlocation.css';
import location from '../images/locationPageIcon.gif';
import ContactSectionHead from "./ContactSectionHead";

function OurLocation() {
    return(
        <>
            <SectionHeading heading="فرعنا الرئيسي"></SectionHeading>
            <ContactSectionHead img={location} heading="عنوان مركزنا الرئيسي في المملكة" body="طريق وادي وج , المثناه , 26511 الطائف , السعودية"/>
            <div className="row">
            
            

            </div>
        </>
    );
}

export default OurLocation;