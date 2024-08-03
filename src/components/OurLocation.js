import SectionHeading from "./SectionHeading";
import '../css/ourlocation.css';
import location from '../images/locationPageIcon.gif';
import ContactSectionHead from "./ContactSectionHead";

function OurLocation() {
    return(
        <>
            <SectionHeading heading="فرعنا الرئيسي"></SectionHeading>
            <ContactSectionHead img={location} heading="عنوان مركزنا الرئيسي في المملكة" body="طريق وادي وج , المثناه , 26511 الطائف , السعودية"/>
            <div className="row gmlocation">

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7436.506726484322!2d40.39163718463944!3d21.261436249246973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e98f005314c6d1%3A0x54061735a30cd0e3!2zU0hpRlQg2KfZhtiq2YLYp9mEINmE2K7Yr9mF2KfYqiDYp9mE2LPZitin2LHYp9iq!5e0!3m2!1sen!2seg!4v1722670424974!5m2!1sen!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            

            </div>
        </>
    );
}

export default OurLocation;