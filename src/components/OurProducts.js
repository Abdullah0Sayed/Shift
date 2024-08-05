import ItemBox from "./ItemBox";
import Sidebar from "./Sidebar";
import "../css/ourproducts.css";

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';


function OurProducts() {

  let products = [

    { id: 1, imgSrc: img1 , productName: 'cae product' , productPriceAfterDiscount: 390 , productPriceBeforeDiscount: 403},
    { id: 2, imgSrc: img2 , productName: 'car product' , productPriceAfterDiscount: 210 , productPriceBeforeDiscount: 410},
    { id: 3, imgSrc: img3 , productName: 'best product' , productPriceAfterDiscount: 400 , productPriceBeforeDiscount: 480},
    { id: 4, imgSrc: img4 , productName: 'total product' , productPriceAfterDiscount: 400 , productPriceBeforeDiscount: 420},
    { id: 5, imgSrc: img5 , productName: 'sum product' , productPriceAfterDiscount: 700 , productPriceBeforeDiscount: 800},
    { id: 6, imgSrc: img6 , productName: 'sun product' , productPriceAfterDiscount: 520 , productPriceBeforeDiscount: 600},
    { id: 7, imgSrc: img6 , productName: 'glass product' , productPriceAfterDiscount: 580 , productPriceBeforeDiscount: 630},
    { id: 8, imgSrc: img6 , productName: 'hob product' , productPriceAfterDiscount: 100 , productPriceBeforeDiscount: 150},
    { id: 9, imgSrc: img6 , productName: 'dog product' , productPriceAfterDiscount: 50 , productPriceBeforeDiscount: 80},
    { id: 10, imgSrc: img6 , productName: 'mail product' , productPriceAfterDiscount: 44.5 , productPriceBeforeDiscount: 90},
    { id: 11, imgSrc: img6 , productName: 'low product' , productPriceAfterDiscount: 850 , productPriceBeforeDiscount: 1200},
    { id: 12, imgSrc: img6 , productName: 'high product' , productPriceAfterDiscount: 25.5 , productPriceBeforeDiscount: 43.5},
    { id: 13, imgSrc: img6 , productName: 'speed product' , productPriceAfterDiscount: 20 , productPriceBeforeDiscount: 40},
    { id: 14, imgSrc: img6 , productName: 'war product' , productPriceAfterDiscount: 159.5 , productPriceBeforeDiscount: 759.5},
    // { id: 15, imgSrc: img6 , productName: 'test product' , productPriceAfterDiscount: 50 , productPriceBeforeDiscount: 40},
]


  return (
    <div className="container">
    <div className="row">
      <div className="col-md-9 col-sm-1">
        <div className="search-bar">
          <form className="search-form">
            <input
              type="search"
              name="search"
              placeholder="بحث عن منتج"
              className="search-input"
            />
            <button type="submit">بحث</button>
            <div className="dropdown">
              <a
                className="btn btn-sorting dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ترتيب حسب
              </a>
            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    الأقل سعر
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    الأعلى سعر
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="row justify-content-center products-list">
          {products.map((product , index)=>{
            return (
                  <ItemBox key={index} itemTitle={product.productName} itemImage={product.imgSrc} priceAfterDiscount={product.productPriceAfterDiscount} priceBeforeDiscount={product.productPriceBeforeDiscount}/>
         
            );
          })}
          
        </div>

       
      </div>
      <div className="col-md-3 col-sm-1 justify-content-center">
        <Sidebar />
      </div>
    </div>
    </div>

  );
}

export default OurProducts;
