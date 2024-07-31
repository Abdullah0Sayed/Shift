import "../css/quicklink.css";

function QuickLinkBox(props) {
  return (
    <div className={"col-" + props.cols}>
      <div className={"box-" + props.bg}>
        <div>
          <h1 className="quick-link-box-heading">{props.heading}</h1>
          <p className="quick-link-box-desc">{props.desc}</p>
        </div>

        <img src={props.image} alt="" className="quick-link-box-icon" />
      </div>
    </div>
  );
}

export default QuickLinkBox;
