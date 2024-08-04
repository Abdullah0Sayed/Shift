function ContactSectionHead(props) {
  return (
    <div className="row locationBox flex-md-row flex-sm-column justify-content-center">
      <div className="col-md-6 callcenterBox mb-4">
        <img src={props.img} alt="" className="callcenter" />
      </div>
      <div className="col-md-6 callcenterBoxHeadingTitle">
        <h3 className="contact-heading ">{props.heading}</h3>
        <p className="contact-body text-wrap">
          {props.body}
        </p>
      </div>
    </div>
  );
}

export default ContactSectionHead;
