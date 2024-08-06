
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import '../css/gallery.css';

import closeBtn from '../images/closeBtn.png'



import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

function Gallery() {
    let imags = [

        { id: 1, imgSrc: img1 },
        { id: 2, imgSrc: img2 },
        { id: 3, imgSrc: img3 },
        { id: 4, imgSrc: img4 },
        { id: 5, imgSrc: img5 },
        { id: 6, imgSrc: img6 },
        { id: 7, imgSrc: img6 },
        { id: 8, imgSrc: img6 },
        { id: 9, imgSrc: img6 },
        { id: 10, imgSrc: img6 },
        { id: 11, imgSrc: img6 },
        { id: 12, imgSrc: img6 },
        { id: 13, imgSrc: img6 },
        { id: 14, imgSrc: img6 },
        { id: 15, imgSrc: img6 },
    ]
    // states (model , tmpImage)
    let [model, setModel] = useState(false);
    let [tmpImage, setTmpImage] = useState('');

    // function 
    function setItemIntoModel(imageSource) {
        setTmpImage(imageSource)
        setModel(true);
    }

    return (
        <>



            <div className='container'>

                <div className={model ? "model-show" : "model"}>
                    <img src={closeBtn} alt="" className='close-model-btn' onClick={()=>{
                        setModel(false)
                    }}/>
                    <div className='model-content animate__animated animate__fadeInRight'>
                        <div className='model-content-image-name'>
                            <h1>عازل حراري من SHIFT</h1>
                        </div>
                        <div className='model-content-service-name'>
                            <h4>خدمة العازل الحراري</h4>
                        </div>
                        <div className='model-content-service-details'>
                            <h2>تفاصيل الخدمة</h2>
                            <div>

                                <span className='service-title'>الوقت المستغرق للخدمة : </span><span className='service-title-value'>4 ساعات</span>
                            </div>
                            <div>

                                <span className='service-title'>مدة الضمان : </span><span className='service-title-value'>6 شهور</span>
                            </div>
                            <div>

                                <span className='service-title'>العمر الإفتراضي للخدمة : </span><span className='service-title-value'>3 سنوات</span>
                            </div>
                        </div>
                        <div className='model-content-service-video'>
                            <h2>فيديو توضيحي</h2>
                            <iframe className='service-video-frame' src="https://www.youtube-nocookie.com/embed/rt8qxX8V4ZM?si=PZarADgSq9DSckrG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>




                    </div>
                    <div className='model-image animate__animated animate__fadeInLeft'>

                        <img src={tmpImage} alt="" />
                    </div>
                </div>
                <SectionHeading heading="معرض أعمالنا" />
                <div className='gallery'>
                    {

                        imags.map((image) => {
                            return (
                                <div className='image-slice' key={image.id} onClick={() => { setItemIntoModel(image.imgSrc) }}>
                                    <img src={image.imgSrc} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default Gallery;