import productCover from '../images/headphone.webp';
import '../css/productdetails.css'
import ProductDetailsCard from './ProductDetailsCard';
import SectionHeading from './SectionHeading';
import FeatureBox from './FeatureBox';
import ItemBox from './ItemBox';
function ProductDetails() {
    return (
        <div className="container">
            <ProductDetailsCard productName="ملمع زجاج" productCover={productCover} productCategory="قسم المنتج" productCode="#Sh14258" productPrice="200"/>
            <SectionHeading heading="مميزات"/>
            <div className='row features gap-4 p-4'>
                   <FeatureBox featureIcon="icon" featureName="ضمان" featureDescription="وصف الخدمة"/>
                   <FeatureBox featureIcon="icon" featureName="ضمان" featureDescription="وصف الخدمة"/>
                   <FeatureBox featureIcon="icon" featureName="ضمان" featureDescription="وصف الخدمة"/>
                   <FeatureBox featureIcon="icon" featureName="ضمان" featureDescription="وصف الخدمة"/>
                   <FeatureBox featureIcon="icon" featureName="ضمان" featureDescription="وصف الخدمة"/>
                   <FeatureBox featureIcon="icon" featureName="ضمان" featureDescription="وصف الخدمة"/>
            </div>
            <SectionHeading heading="نظرة عامة"/>
            <div className='row overview'>


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