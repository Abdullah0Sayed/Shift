function ProductDetailsCard(props) {
    return (

        <div className="row">
                <div className="col-6 product-details gap-6">
                    <div className="product-name"><p>{props.productName}</p></div>
                    <div className="product-description py-4"><p>{props.productCategory}</p></div>
                    <div className="product-code"><span className='m-0'>كود المنتج : </span><span className='code-product'>{props.productCode}</span></div>
                    <div className="product-price mt-4"><span>السعر : </span><span className='price-product'>{props.productPrice} ر.س</span></div>
                </div>
                <div className="col-6 product-images">
                    <div className="col-6 image-cover">
                        <img src={props.productCover} alt="" />
                    </div>
                    <div className='row image-thumnbails justify-content-evenly gap-2'>
                        <div className='col-2 image-thumbnail'>
                            <img src={props.productCover} alt="" />
                        </div>
                        <div className='col-2 image-thumbnail'>
                            <img src={props.productCover} alt="" />
                        </div>
                        <div className='col-2 image-thumbnail'>
                            <img src={props.productCover} alt="" />
                        </div>
                    </div>

                </div>
            </div>
    );
}

export default ProductDetailsCard;