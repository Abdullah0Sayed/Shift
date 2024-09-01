import productCover from '../images/headphone.webp';
import '../css/productdetails.css'
import ProductDetailsCard from './ProductDetailsCard';
import SectionHeading from './SectionHeading';
import FeatureBox from './FeatureBox';
import ItemBox from './ItemBox';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import axios from 'axios';
import Loader from './Loader';

function ProductDetails() {
    let [service , setService] = useState();
    const {id} = useParams('id');


    useEffect(()=>{
        async function fetchService() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/services/${id}`);
                setService(response.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        }

        fetchService();
        
    },[])


    if (!service || !service.main_service) {
        return  <Loader/>
    }
    
    return (
        <div className="container">
            <SectionHeading heading="تفاصيل عامة"/>
            <ProductDetailsCard productName={service.main_service.service_name} productCover={service.service_image} productCategory={service.main_service.service_category_id.service_category_name} productCode={service.service_id} productPriceAfter={service.service_price} productPriceBefore={service.service_price_before_discount} productDiscount={service.service_discount}/>
            <SectionHeading heading="مميزات"/>
            <div className='row features justify-content-center p-4'>
                   <FeatureBox featureIcon="icon" featureName="ضمان" featureDescription="وصف الخدمة"/>
                   <FeatureBox featureIcon="icon" featureName="ضمان" featureDescription="وصف الخدمة"/>
                   <FeatureBox featureIcon="icon" featureName="ضمان" featureDescription="وصف الخدمة"/>
            </div>
            <SectionHeading heading="نظرة عامة"/>
            <div className='row overview justify-content-center align-items-center'>
                <span className='col-lg-6 m-0'>وقت تنفيذ الخدمة : {  service.service_execution_time+' - '+service.service_time_measure}</span>
                <span className='col-lg-6 m-0'>سنوات ضمان الخدمة : {  service.main_service.service_warranty+' سنوات'}</span>
                <div className='description col-12 my-4'>
                    <h3>وصف الخدمة</h3>
                    <span>
                        {service.main_service.service_description}
                    </span>
                </div>
            </div>
            <SectionHeading heading="منتجات مشابهة"/>
            <div className='row gap-4 similar-products justify-content-center'>
                <ItemBox itemTitle="منتج مشابه"/>
                <ItemBox itemTitle="منتج مشابه"/>
                <ItemBox itemTitle="منتج مشابه"/>
                <ItemBox itemTitle="منتج مشابه"/>
            </div>
        </div>
    );
}

export default ProductDetails;