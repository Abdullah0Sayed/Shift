import { Link } from 'react-router-dom';
import '../css/productcard.css';


function ProductCard(props) {
  return (
    <div className="card col-md-2 col-sm-1 product-card " key={props.key}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body product-body">
        <h5 className="card-title text-center mb-1">{props.title}</h5>
        <p className="card-price text-center mb-2">{props.price} ر.س</p>
        <Link to={'/product-details'}><button  className="button p-2">{props.btn}</button></Link>
      </div>
    </div>
  );
}

export default ProductCard;
