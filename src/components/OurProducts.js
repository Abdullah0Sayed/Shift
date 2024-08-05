import ItemBox from "./ItemBox";
import Sidebar from "./Sidebar";
import "../css/ourproducts.css";


function OurProducts() {
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
          <ItemBox itemTitle="منتج"/>
          <ItemBox itemTitle="منتج"/>
          <ItemBox itemTitle="منتج"/>
          <ItemBox itemTitle="منتج"/>
          <ItemBox itemTitle="منتج"/>
          <ItemBox itemTitle="منتج"/>
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
