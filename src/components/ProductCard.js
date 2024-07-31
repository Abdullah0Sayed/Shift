import '../css/productcard.css';


function ProductCard(props) {
  return (
    <div className="card col-3 product-card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body product-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-price text-center m-0">{props.price} ر.س</p>
        <button  className="button p-0">{props.btn}</button>
      </div>
    </div>
  );
}

export default ProductCard;
