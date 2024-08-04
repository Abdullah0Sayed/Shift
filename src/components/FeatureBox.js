function FeatureBox(props) {
  return (
    <div className="col-2 feature">
      <div className="feature-icon mb-2">{props.featureIcon}</div>
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
