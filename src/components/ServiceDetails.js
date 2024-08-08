import ProductDetailsCard from "./ProductDetailsCard";
import productCover from '../images/headphone.webp';
import SectionHeading from "./SectionHeading";
import '../css/servicedeatilsgallery.css';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';


function ServiceDetails(props) {

    let imags = [

        { id: 1, imgSrc: img1 },
        { id: 2, imgSrc: img2 },
        { id: 3, imgSrc: img3 },
        { id: 4, imgSrc: img4 },

    ]
    return (

        <div className="container">

            <div className="row">
                <SectionHeading heading="تفاصيل عامة"/>
                <ProductDetailsCard productName="ملمع زجاج" productCover={productCover} productCode="#Sh14258" productPrice="200" />
            </div>

            <SectionHeading heading="تفاصيل الخدمة" headingDescription="كل ما تحتاج معرفته عن الخدمة" />
            <div className='row overview'>


            </div>
            <SectionHeading heading="معرض أعمال الخدمة" />
            <div className="row ">
                <div className='gallery-service'>
                    {

                        imags.map((image) => {
                            return (
                                <div className='image-gallery' key={image.id}>
                                    <img src={image.imgSrc} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default ServiceDetails;