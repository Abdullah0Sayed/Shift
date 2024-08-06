import '../css/sectionheading.css';


function SectionHeading(props) {

    return (
        <div className="section-heading text-center">

            <h2 className='heading'>{props.heading}</h2>
            <p className='heading-description'>{props.headingDescription}</p>
        </div>
    );

}


export default SectionHeading;