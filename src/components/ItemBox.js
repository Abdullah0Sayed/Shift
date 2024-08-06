import { Link } from 'react-router-dom';
import '../css/itembox.css';
import product from '../images/headphone.webp';

function ItemBox(props) {
    return(
        <>
            <div className="item col-2">
                <div className='item-image'>
                    <img src={props.itemImage} alt="image" className='product-image'/>
                </div>
                <div className='item-title-pricing'>
                    <div className='item-title'>
                        <p>{props.itemTitle}</p>
                    </div>
                    <div className='item-price'>
                        <p className='price-after-discount'>{props.priceAfterDiscount + '  ر.س'}</p>
                        <p className='price-before-discount'>{props.priceBeforeDiscount + '  ر.س'}</p>
                    </div>
                </div>
                <Link to={'/product-details'}><button type="button" className='item-btn-details'>تفاصيل المنتج</button></Link>
            </div>
        </>
    );
}

export default ItemBox;