import '../css/itembox.css';
import product from '../images/headphone.webp';

function ItemBox(props) {
    return(
        <>
            <div className="item col-3">
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
                <button type="button" className='item-btn-details'>تفاصيل المنتج</button>
            </div>
        </>
    );
}

export default ItemBox;