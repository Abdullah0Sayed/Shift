import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";

import power from "../images/power.webp";
import bookingIcon from "../images/bookingIcon.png";
import workIcon from "../images/workIcon.png";
import retoutch from "../images/retoutch.webp";
import "../css/home.css";
import Loader from "./Loader";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import ItemBox from "./ItemBox";
import ServiceBox from "./ServiceBox";
import QuickLinkBox from "./QuickLinkBox";
import { Link } from "react-router-dom";

function Home() {
  let [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3200);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            id="carouselExampleCaptions"
            class="carousel slide .carousel-fade gallery-show"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={car1} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h2 className="slide-heading">خدمة تلميع السيارات</h2>
                  <p>استمتع بغسييل سيارتك مع SHIFT وخصم حتى 20%</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={car2} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h2 className="slide-heading">خدمة تلميع السيارات</h2>
                  <p>استمتع بغسييل سيارتك مع SHIFT وخصم حتى 20%</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={car3} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h2 className="slide-heading">خدمة تلميع السيارات</h2>
                  <p>استمتع بغسييل سيارتك مع SHIFT وخصم حتى 20%</p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="container">
            <SectionHeading heading="تجربة فريدة" />
            <div className="row justify-content-evenly gap-2 ">
       
            <QuickLinkBox  heading="إحجز الأن" desc="تمتع بتجربة فريدة مع SHIFT" bg="purble" image={bookingIcon} url="/book-now"/>
            <QuickLinkBox  heading="أعمالنا" desc="شاهد جميع أعمال SHIFT" bg="white" image={workIcon} url="/our-works"/>

            <SectionHeading heading="أحدث منتجاتنا" />
            <div className="row justify-content-between gap-2 animate__animated animate__fadeInRight">

            <ItemBox itemImage={power} itemTitle={'ملمع زجاج'} priceAfterDiscount={50} priceBeforeDiscount={80}/>
            <ItemBox itemImage={power} itemTitle={'ملمع زجاج'} priceAfterDiscount={50} priceBeforeDiscount={80}/>
            <ItemBox itemImage={power} itemTitle={'ملمع زجاج'} priceAfterDiscount={50} priceBeforeDiscount={80}/>
            <ItemBox itemImage={power} itemTitle={'ملمع زجاج'} priceAfterDiscount={50} priceBeforeDiscount={80}/>
              

            </div>
            <SectionHeading heading="خدمتنا" />
            <div className="row gap-3 animate__animated animate__fadeInRight justify-content-center">
              
              <ServiceBox image={retoutch}  serviceTitle="خدمة تلميع" serviceWarranty="ضمان 4 سنوات"/>
              <ServiceBox image={retoutch}  serviceTitle="خدمة عزل" serviceWarranty="ضمان 5 سنوات"/>
              <ServiceBox image={retoutch}  serviceTitle="خدمة نانو" serviceWarranty="ضمان 4 سنوات"/>
              <ServiceBox image={retoutch}  serviceTitle="خدمة افلام حماية" serviceWarranty="ضمان 4 سنوات"/>


            </div>
            </div>
           
          </div>

        </>
      )}
    </>
  );
}

export default Home;
