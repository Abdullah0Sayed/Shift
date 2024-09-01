import { Link } from 'react-router-dom';
import '../css/serviceitem.css';

import addCart from '../images/addCart.png';
import { useDispatch, useSelector } from 'react-redux';
import { addServiceToCart } from '../rtk/slicer/bookingCartSlicer';
function ServiceItem(props) {

    const cart = useSelector((state)=>{
        return state.bookingCart
    });
    const disPatch = useDispatch();


    return (
        <>
            <div className="service col-2">
                <div className='item-image'>
                    <img src={props.itemImage} alt="image" className='product-image' />
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
                <div className='item-btn row'>

                    <Link to={`/product-details/${props.uuid}`} className='col-7'><button type="button" className='item-btn-details py-1 px-2'>تفاصيل</button></Link>
                    <button type="button" className='addCartBtn col-5 btn btn-dark p-0 px-1' onClick={(e)=>{
                            disPatch(addServiceToCart(props.serivce));
                            console.log(cart)
                    }}><img src={addCart} alt=""className='addCartIcon'/> حجز</button>
                    <button type="button" className='deleteCartBtn col-5 btn btn-danger d-none'><img src={addCart} alt=""className='deleteCartIcon'/> ازالة</button>
                </div>
            </div>
        </>
    );
}

export default ServiceItem;