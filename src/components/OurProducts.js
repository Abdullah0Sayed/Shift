import ItemBox from "./ItemBox";
import Sidebar from "./Sidebar";
import "../css/ourproducts.css";



import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import Pageination from "./Pageination";
import { useEffect, useState } from "react";


function OurProducts() {
  

  // fetch posts 
  let limit = 9;
  
  // posts state
  let [posts , setPosts] = useState([]);
  let [pagesCount , setPagesCount] = useState(1);





  let getPosts = async (currentPage) => {
    console.log(currentPage)
    const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${currentPage}&limit=${limit}`);

    
    const data = await res.json();
    return data;
    
  }

  useEffect( ()=>{
   
    
    const fetechPosts = async (currentPage = 1) => {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${currentPage}&limit=${limit}`);

      console.log(`initially posts when loaded -: page No.${currentPage}`)
     
      const data = await res.json();

      const totalData = res.headers.get('x-total-count');
      let pagesCount = (totalData / limit);
  
      setPagesCount(pagesCount);

      setPosts(data); 
      console.log(data)
    }

    fetechPosts();
  } , []);

  // 

  const sortPostsByMinPrice = () => {
    const sortedPosts = [...posts].sort((a, b) => a.price - b.price);
    setPosts(sortedPosts);
  };
  const sortPostsByPriceDescending = () => {
    const sortedPosts = [...posts].sort((a, b) => b.price - a.price);
    setPosts(sortedPosts);
  };
  // handlePageClick 
  async function whenPageChange(page) {
    let currentPage = (page.selected + 1);
    const data = await getPosts(currentPage);
    setPosts(data);
    console.log(`new Data in ${currentPage}`);
    console.log(data)
    
    
  }
  

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-9 col-sm-1">
        <div className="search-bar px-4">
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
                  <a className="dropdown-item" href="#" onClick={sortPostsByMinPrice}>
                    الأقل سعر
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={sortPostsByPriceDescending}>
                    الأعلى سعر
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="row justify-content-center products-list">
          {posts.map((post)=>{
            return (
                  <ItemBox key={post.id} itemImage={post.images[1]} itemTitle={post.title} priceAfterDiscount={post.price} priceBeforeDiscount={post.price}/>
         
            );
          })}
          
        </div>
        <div className="row pageination justify-content-center">
          <Pageination pageCount={4} handlePageClick={whenPageChange}/>
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
