import '../css/productcard.css';


function ProductCard(props) {
  return (
    <div className="card col-3">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-price text-center">{props.price} ر.س</p>
        <button  className="button">{props.btn}</button>
      </div>
    </div>
  );
}

export default ProductCard;
