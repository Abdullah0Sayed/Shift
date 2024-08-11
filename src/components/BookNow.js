import SectionHeading from "./SectionHeading";
import '../css/booknow.css';
import BookService from "./BookService";
import ItemBox from "./ItemBox";

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import icon from '../images/bookingIcon.png'
import Input from "./Input";
import BookReview from "./BookReview";


import applePay from '../images/epay.png';
import masterCard from '../images/mastercard.png';
import mada from '../images/mada.png';
import visa from '../images/visa.webp';
import cash from '../images/cash.png';


import confirmBtn from '../images/confirmIcon.png';
import { useState } from "react";


import Swal from 'sweetalert2'

function BookNow() {

    let products = [

        { id: 1, imgSrc: img1, productName: 'cae product', productPriceAfterDiscount: 390, productPriceBeforeDiscount: 403 },
        { id: 2, imgSrc: img2, productName: 'car product', productPriceAfterDiscount: 210, productPriceBeforeDiscount: 410 },
        { id: 3, imgSrc: img3, productName: 'best product', productPriceAfterDiscount: 400, productPriceBeforeDiscount: 480 },
        { id: 4, imgSrc: img4, productName: 'total product', productPriceAfterDiscount: 400, productPriceBeforeDiscount: 420 },

    ]

    let [carSize , setCarSize] = useState('صغيرة');


    return (

        <div className="container">

            <div className="row">
            <SectionHeading heading="حجم سيارتك" headingDescription="من فضلك قم بإختيار حجم سيارتك"></SectionHeading>
                <div className="wrapper">
                    <div className="wrapper-container">
                        <input type="radio" name="slide" id="c1" checked onClick={(event)=>{
                            console.log(event.target);
                        }}/>
                        <label for="c1" className="layout" onClick={(event)=>{
                            setCarSize('صغيرة')
                        }}>
                            <div className="layout-row">
                                <div className="layout-icon">سيارات صغيرة</div>
                                <div className="layout-description">
                                    {/* <h4 className="m-0">سيارات صغيرة</h4> */}
                                    <p className="m-0">تشمل سيارات هاتشباك صغيرة، سيارات سيدان صغيرة، سيارات رياضية صغيرة ذات ذات البابين</p>
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c2" onChange={(event)=>{
                            console.log(event);
                        }}/>
                        <label for="c2" className="layout" onClick={(event)=>{
                            setCarSize('متوسطة')
                        }}>
                            <div className="layout-row">
                                <div className="layout-icon">سيارات متوسطة</div>
                                <div className="layout-description">
                                    {/* <h4 className="m-0">سيارات متوسطة</h4> */}
                                    <p className="m-0">تشمل سيارات السيدان كبيرة الحجم، سيارات الكروس-اوفر – سيارات رياضية ذات اربع ابواب سيارات بيك أب ذات الباب الواحد</p>
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c3"  onChange={(event)=>{
                            console.log(event);
                        }}/>
                        <label for="c3" className="layout" onClick={(event)=>{
                            setCarSize('كبيرة')
                        }}>
                            <div className="layout-row">
                                <div className="layout-icon">سيارات كبيرة</div>
                                <div className="layout-description">
                                    {/* <h4 className="m-0">سيارات كبيرة</h4> */}
                                    <p className="m-0">تشمل السيارات الرياضية متعددة الاستخدامات (SUV) كبيرة الحجم و سيارات صالون بأربعة أبواب، سيارات بيك أب ذات الأربع ابواب</p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <SectionHeading heading="الباقات والخدمات" headingDescription="من فضلك قم باختيار الباقة أو الخدمة المطلوبة"></SectionHeading>
                <div className="row justify-content-center gap-2">
                    <BookService serviceName="خدمة التلميع"></BookService>
                    <BookService serviceName="خدمة التلميع"></BookService>
                    <BookService serviceName="خدمة التلميع"></BookService>
                    <BookService serviceName="خدمة التلميع"></BookService>
                    <BookService serviceName="خدمة التلميع"></BookService>
                </div>
               
                <div className="row justify-content-center gap-2">

                    {products.map((product, index) => {
                        return (
                            <ItemBox key={index} itemTitle={product.productName} itemImage={product.imgSrc} priceAfterDiscount={product.productPriceAfterDiscount} priceBeforeDiscount={product.productPriceBeforeDiscount} />

                        );
                    })}


                </div>
                <SectionHeading heading="خدمات اضافية" headingDescription="يمكنك اختيار خدمات اضافية مع طلب الحجز"></SectionHeading>
                <div className="row justify-content-center gap-2">


                </div>
                <SectionHeading heading="بيانات الحجز" headingDescription="من فضلك قم بملئ البيانات المطلوبة"></SectionHeading>
                <form action="" method="post" >
                    <div className="row book-details">

                        <div className="col-6">
                            <Input type="text" id="first-name" inputFor="first-name" label="الأسم الأول" placeholder="أدخل أسمك الأول : (مثال) أحمد"></Input>
                        </div>
                        <div className="col-6">
                            <Input type="text" id="last-name" inputFor="last-name" label="الأسم الأخير" placeholder="أدخل أسمك الأخير : (مثال) محمد"></Input>
                        </div>
                        <div className="col-6">
                            <Input type="email" id="email" inputFor="email" label="البريد الإلكتروني" placeholder="example@---.com"></Input>
                        </div>
                        <div className="col-6">
                            <Input type="text" id="mobile" inputFor="mobile" label="رقم الجوال" placeholder="أدخل رقم الجوال"></Input>
                        </div>
                    </div>
                </form>
                <SectionHeading heading="ملخص الحجز" headingDescription="من فضلك قم بمراجعة الخدمات المحجوزة"></SectionHeading>
                <div className="row book-review justify-content-center gap-2">
                    <BookReview bookReviewTitle="حجم سيارتك" bookReviewIcon={icon} reviewValue={carSize}></BookReview>
                    <BookReview bookReviewTitle="الخدمات المحجوزة" bookReviewIcon={icon} ></BookReview>
                    <BookReview bookReviewTitle="الخدمات الإضافية" bookReviewIcon={icon} ></BookReview>
                    <BookReview bookReviewTitle="مدة تنفيذ طلبك" bookReviewIcon={icon} ></BookReview>
                    <BookReview bookReviewTitle="التكلفة الإجمالية" bookReviewIcon={icon} ></BookReview>
                </div>
                <SectionHeading heading="معلومات الدفع" headingDescription="إليك جميع وسائل الدفع المتاحة لدينا"></SectionHeading>
                <div className="row payments-avaliable-ways">
                    <div className="third-party-payments">
                        <h2>عند زيارتك لـ SHIFT يمكنك الدفع بإستخدام إحدى الطرق الأتية</h2>
                        <div className="payments-ways">
                            <img src={applePay} alt="" class="payment-icon" title='يمكنك الدفع بإستخدام ابل اى باي' />
                            {/* <img src={visa} alt="" class="payment-icon" title='يمكنك الدفع بإستخدام فيزا' /> */}
                            {/* <img src={masterCard} alt="" class="payment-icon" title='يمكنك الدفع بإستخدام ماستر كارد' /> */}
                            <img src={mada} alt="" class="payment-icon" title='يمكنك الدفع بإستخدام شبكة مدى' />
                            <img src={cash} alt="" class="payment-icon" title='يمكنك الدفع نقدياً (كاش)' />
                        </div>
                    </div>
                </div>
                <SectionHeading heading="تاكيد الحجز"></SectionHeading>
                <div className="row book-confirmation">
                    <button type="button" className="book-confirm-btn" onClick={()=>{
                      Swal.fire({
                        // title: "Good job!",
                        text: "تم تأكيد عملية الحجز بنجاح",
                        icon: "success",
                        showCloseButton: true,
                        showConfirmButton: true,
                        confirmButtonText: '<a href="/">حسناً</a>',
                        confirmButtonColor: '#e3e3e3'
                      });
                    }}>
                        <span>تأكيد عملية الحجز</span>
                        <img src={confirmBtn} alt="" className="confirm-btn-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookNow;
