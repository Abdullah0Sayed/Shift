import '../css/sectionheading.css';


function SectionHeading(props) {

    return (
        <div className="section-heading text-center">

            <h2 className='heading'>{props.heading}</h2>
        </div>
    );

}


export default SectionHeading;