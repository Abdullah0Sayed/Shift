import '../css/productcard.css';


function ProductCard(props) {
  return (
    <div className="card col-3 product-card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body product-body">
        <h5 className="card-title text-center mb-1">{props.title}</h5>
        <p className="card-price text-center mb-2">{props.price} ر.س</p>
        <button  className="button p-2">{props.btn}</button>
      </div>
    </div>
  );
}

export default ProductCard;
