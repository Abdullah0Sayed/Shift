function FeatureBox(props) {
  return (
    <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12 feature">
      <div className="feature-icon mb-2"><img src={props.featureIcon} alt="" className="feature-icon-img"/></div>
      <div className="feature-name">
        <p className="m-0">{props.featureName}</p>
      </div>
      <div className="feature-details">
        <p className="m-0">{props.featureDescription}</p>
      </div>
    </div>
  );
}

export default FeatureBox;
