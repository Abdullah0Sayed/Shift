
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import '../css/gallery.css';


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
                <SectionHeading heading="معرض أعمالنا" />
                <div className='gallery'>
                {

                    imags.map((image)=>{
                        return(
                            <div className='image-slice' key={image.id} onClick={()=>{setItemIntoModel(image.imgSrc)}}>
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