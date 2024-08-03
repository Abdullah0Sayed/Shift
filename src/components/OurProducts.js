import ItemBox from "./ItemBox";
import Sidebar from "./Sidebar";
import "../css/ourproducts.css";
function OurProducts() {
  return (
    <div className="row">
      <div className="col-9">
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
                className="btn btn-sorting dropdown-toggle p-4"
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
        <div className="row products-list">
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </div>

       
      </div>
      <div className="col-3">
        <Sidebar />
      </div>
    </div>
  );
}

export default OurProducts;
