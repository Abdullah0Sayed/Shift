function ContactSectionHead(props) {
  return (
    <div className="row locationBox">
      <div className="col-6 callcenterBox">
        <img src={props.img} alt="" className="callcenter" />
      </div>
      <div className="col-6 callcenterBoxHeadingTitle">
        <h3 className="contact-heading ">{props.heading}</h3>
        <p className="contact-body text-wrap">
          {props.body}
        </p>
      </div>
    </div>
  );
}

export default ContactSectionHead;
