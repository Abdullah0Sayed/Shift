import SectionHeading from "./SectionHeading";
import "../css/booknow.css";
import BookService from "./BookService";
import FeatureBox from './FeatureBox';
import ServiceItem from "./ServiceItem";
import axios from "axios";

import bookingIcon from "../images/bookingIcon.png";
import carIcon from "../images/carIcon.png";
import timeIcon from "../images/timeIcon.png";
import priceIcon from "../images/priceIcon.png";
import sortIcon from '../images/sortIcon.png';

import Input from "./Input";
import BookReview from "./BookReview";

import applePay from "../images/epay.png";
import mada from "../images/mada.png";
import cash from "../images/cash.png";

import confirmBtn from "../images/confirmIcon.png";

import userStepIcon from '../images/userStepIcon.png';
import carStepIcon from '../images/carStepIcon.png';
import serviceStepIcon from '../images/serviceStepIcon.png';
import searchStepIcon from '../images/searchStepIcon.png';
import callStepIcon from '../images/callStepIcon.png';
import dateStepIcon from '../images/dateStepIcon.png';



import addCart from '../images/addCart.png';
import removeCart from '../images/removeCart.png';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addServiceToCart, clearCart, removeFromCart } from "../rtk/slicer/bookingCartSlicer";



function BookNow() {


    let [service_category, setServiceCategoryQuery] = useState();
    let [car_size, setCarSizeQuery] = useState();
    let [services, setService] = useState([]);
    let [activeService, setActiveService] = useState(null);

    let [client_full_name, setClientFullName] = useState('');
    let [client_mobile, setClientMobile] = useState('');
    let [car_brand, setCarBrand] = useState('');
    let [car_model, setCarModel] = useState('');

    const cart = useSelector(state => state.bookingCart);

    // console.log(cart.length)
    // let cartLength = cart.length;
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc, service) => {
        return acc += parseFloat(service.service_price)
    }, 0)
    const totalTimeExecution = cart.reduce((acc, service) => {
        return acc += parseInt(service.service_execution_time)
    }, 0)
    const cartItemsArray = cart.map((service) => {
        return service.main_service.service_name
    });
    const cartItemsString = cartItemsArray.join(' + ')
    // console.log(cartItemsString)
    let [carSize, setCarSize] = useState("");

    const handleServiceClick = (serviceName) => {
        let newCategory;
        switch (serviceName) {
            case "التلميع":
                newCategory = 1;
                break;
            case "العازل الحراري":
                newCategory = 2;
                break;
            case "أفلام الحماية":
                newCategory = 3;
                break;
            case "النانو سيراميك":
                newCategory = 4;
                break;
            default:
                newCategory = 4;
        }
        setServiceCategoryQuery(newCategory);
        setActiveService(serviceName);
    };
    const bookingObject = {
        client_name: null,
        client_phone: null,
        car_brand: null,
        car_model: null,
        car_size: null,
        services: []
    };
    const handleClick = async (bookingObject, cart) => {
        // التحقق من صحة الحقول
        if (!bookingObject.client_name) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى إدخال الاسم الكامل.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }

        if (!bookingObject.client_phone || bookingObject.client_phone.length !== 9) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى إدخال رقم الهاتف المكون من 9 أرقام.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }

        if (!bookingObject.car_brand) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى إدخال نوع السيارة.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }

        if (!bookingObject.car_model) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى إدخال موديل السيارة.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }

        // التحقق من أن حجم السيارة قد تم اختياره
        if (!bookingObject.car_size) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى اختيار حجم السيارة.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }

        if (cart.length < 1) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى اختيار اختيار خدمة واحدة على الأقل لتاكيد عملية الحجز.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }
        // إرسال الطلب بعد التحقق من صحة المدخلات
        try {
            const { data } = await axios.post('http://127.0.0.1:8000/api/booking-order', bookingObject, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(data);
            Swal.fire({
                title: 'تم تأكيد الحجز',
                text: 'تم تأكيد الحجز بنجاح. سنقوم بالتواصل معكم قريباً.',
                icon: 'success',
                confirmButtonText: 'موافق'
            }).then(() => {
                window.location.href = '/'; // إعادة تحميل الصفحة
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'حدث خطأ',
                text: 'عذراً، حدث خطأ أثناء تأكيد الحجز. يرجى المحاولة مرة أخرى.',
                icon: 'error',
                confirmButtonText: 'موافق'
            }).then(() => {
                window.location.href = '/'; // إعادة تحميل الصفحة
            });;
        }
    };

    useEffect(() => {
        async function fetchServices() {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/services/${car_size}/${service_category}`
                );
                setService(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        }

        fetchServices();
    }, [car_size, service_category]);

    return (
        <div className="container">
            <div className="row">
                <SectionHeading
                    heading="طريقة الحجز"
                    headingDescription="قم بإتباع مراحل الحجز لإستلام طلبك بشكل صحيح"
                ></SectionHeading>
                <div className="row booking-steps gap-3 justify-content-between align-items-center">
                    <FeatureBox featureIcon={userStepIcon} featureName="الخطوة الأولى" featureDescription="قم بملئ البيانات الشخصية وبيانات السيارة" />
                    <FeatureBox featureIcon={carStepIcon} featureName="الخطوة الثانية" featureDescription="قم بإختيار حجم سيارتك ما بين (صغير - وسط - كبير)" />
                    <FeatureBox featureIcon={serviceStepIcon} featureName="الخطوة الثالثة" featureDescription="قم بإختيار تصنيف الخدمة التي ترديها ثم احجز الخدمة المرادة" />
                    <FeatureBox featureIcon={searchStepIcon} featureName="الخطوة الرابعة" featureDescription="قم بمراجعة طلبك جيداً من خلال عربة الشراء وملخص الحجز الخاص بك ، ثم اضغط على زر تأكيد الحجز" />
                    <FeatureBox featureIcon={callStepIcon} featureName="الخطوة الخامسة" featureDescription="بعد تأكيد الحجز ، نستقبل طلبكم وسيقوم أحد ممثلي خدمة عملائنا بالتواصل معكم" />
                    <FeatureBox featureIcon={dateStepIcon} featureName="الخطوة الساسة" featureDescription="بعد استقبال طلبكم ، يتم تعيين ميعاد حجز وإخباركم به من خلال الاتصال على رقم الجوال الخاص بكم" />
                </div>
                <SectionHeading
                    heading="بيانات الحجز"
                    headingDescription="من فضلك قم بملئ البيانات المطلوبة"
                ></SectionHeading>
                <form action="" method="post">
                    <div className="row book-details">
                        <div className="col-6">
                            <Input
                                type="text"
                                id="client_full_name"
                                inputFor="client_full_name"
                                label="الأسم بالكامل"
                                placeholder="أدخل أسمك الأول : (مثال) أحمد"
                                onChange={setClientFullName}
                            ></Input>
                        </div>
                        <div className="col-6">
                            <Input
                                type="text"
                                id="mobile"
                                inputFor="mobile"
                                label="رقم الجوال"
                                placeholder="أدخل رقم الجوال"
                                onChange={setClientMobile}
                            ></Input>
                        </div>
                        <div className="col-6">
                            <Input
                                type="text"
                                id="car-model"
                                inputFor="car-model"
                                label="ماركة السيارة"
                                placeholder="ماركة السيارة"
                                onChange={setCarBrand}
                            ></Input>
                        </div>
                        <div className="col-6">
                            <Input
                                type="text"
                                id="car-model"
                                inputFor="car-model"
                                label="موديل السيارة"
                                placeholder="موديل السيارة"
                                onChange={setCarModel}
                            ></Input>
                        </div>

                    </div>
                </form>
                <SectionHeading
                    heading="حجم سيارتك"
                    headingDescription="من فضلك قم بإختيار حجم سيارتك"
                ></SectionHeading>
                <div className="wrapper">
                    <div className="wrapper-container">
                        <input
                            type="radio"
                            name="slide"
                            id="c1"
                            onClick={(event) => {
                                setCarSize("صغيرة");
                                setCarSizeQuery(1);
                                dispatch(clearCart())
                            }}
                        />
                        <label
                            for="c1"
                            className="layout"
                            onClick={(event) => {
                                setCarSize("صغيرة");
                                setCarSizeQuery(1);
                                dispatch(clearCart())
                            }}
                        >
                            <div className="layout-row">
                                <div className="layout-icon">سيارات صغيرة</div>
                                <div className="layout-description">
                                    {/* <h4 className="m-0">سيارات صغيرة</h4> */}
                                    <p className="m-0">
                                        تشمل سيارات هاتشباك صغيرة، سيارات سيدان صغيرة، سيارات رياضية
                                        صغيرة ذات ذات البابين
                                    </p>
                                </div>
                            </div>
                        </label>
                        <input
                            type="radio"
                            name="slide"
                            id="c2"
                            onChange={(event) => {
                                setCarSize("متوسطة");
                                setCarSizeQuery(2);
                                console.log(event);
                                dispatch(clearCart())
                            }}
                        />
                        <label
                            for="c2"
                            className="layout"
                            onClick={(event) => {
                                setCarSize("متوسطة");
                                setCarSizeQuery(2);
                                dispatch(clearCart())
                            }}
                        >
                            <div className="layout-row">
                                <div className="layout-icon">سيارات متوسطة</div>
                                <div className="layout-description">
                                    {/* <h4 className="m-0">سيارات متوسطة</h4> */}
                                    <p className="m-0">
                                        تشمل سيارات السيدان كبيرة الحجم، سيارات الكروس-اوفر – سيارات
                                        رياضية ذات اربع ابواب سيارات بيك أب ذات الباب الواحد
                                    </p>
                                </div>
                            </div>
                        </label>
                        <input
                            type="radio"
                            name="slide"
                            id="c3"
                            onChange={(event) => {
                                setCarSize("كبيرة");
                                setCarSizeQuery(3);
                                dispatch(clearCart())
                            }}
                        />
                        <label
                            for="c3"
                            className="layout"
                            onClick={(event) => {
                                setCarSize("كبيرة");
                                setCarSizeQuery(3);
                                dispatch(clearCart())
                            }}
                        >
                            <div className="layout-row">
                                <div className="layout-icon">سيارات كبيرة</div>
                                <div className="layout-description">
                                    {/* <h4 className="m-0">سيارات كبيرة</h4> */}
                                    <p className="m-0">
                                        تشمل السيارات الرياضية متعددة الاستخدامات (SUV) كبيرة الحجم
                                        و سيارات صالون بأربعة أبواب، سيارات بيك أب ذات الأربع ابواب
                                    </p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <SectionHeading
                    heading="الباقات والخدمات"
                    headingDescription="من فضلك قم باختيار الباقة أو الخدمة المطلوبة"
                ></SectionHeading>
                <div className="row justify-content-evenly gap-2">
                    <BookService
                        serviceName="التلميع"
                        isActive={activeService === "التلميع"}
                        onClick={handleServiceClick}
                    />
                    <BookService
                        serviceName="العازل الحراري"
                        isActive={activeService === "العازل الحراري"}
                        onClick={handleServiceClick}
                    />
                    <BookService
                        serviceName="أفلام الحماية"
                        isActive={activeService === "أفلام الحماية"}
                        onClick={handleServiceClick}
                    />
                    <BookService
                        serviceName="النانو سيراميك"
                        isActive={activeService === "النانو سيراميك"}
                        onClick={handleServiceClick}
                    />
                </div>

                <div className="row justify-content-center gap-4">
                    {services.map((serivce, index) => {

                        return (


                            <div className="service col-lg-3 col-sm-12" key={serivce.uuid}>
                                <div className='item-image'>
                                    <img src={serivce.service_image} alt="image" className='product-image' />
                                </div>
                                <div className='item-title-pricing'>
                                    <div className='item-title'>
                                        <p>{serivce.main_service.service_name}</p>
                                    </div>
                                    <div className='item-price'>
                                        <p className='price-after-discount'>{serivce.service_price + '  ر.س'}</p>



                                        <p className='price-before-discount'>{serivce.service_price_before_discount + '  ر.س'}</p>
                                    </div>
                                </div>
                                <div className='item-btn row'>

                                    <Link to={`/product-details/${serivce.uuid}`} className='col-7'><button type="button" className='item-btn-details py-1 px-2'>تفاصيل</button></Link>
                                    <button id="addToCart" type="button" className='addCartBtn col-5 btn btn-dark p-0 px-1' onClick={(e) => {
                                        dispatch(addServiceToCart(serivce))
                                        // e.target.classList.add('d-none')
                                        // e.target.nextElementSibling.classList.remove('d-none');
                                    }}><img src={addCart} alt="" className='addCartIcon' /> حجز</button>
                                    <button id="deleteFromCart" type="button" className='deleteCartBtn col-5 btn btn-danger p-0 px-1 d-none' onClick={(e) => {
                                        dispatch(removeFromCart(serivce))
                                        // e.target.classList.add('d-none');
                                        // e.target.previousElementSibling.classList.remove('d-none');

                                    }}><img src={removeCart} alt="" className='deleteCartIcon' /> ازالة</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* <SectionHeading heading="خدمات اضافية" headingDescription="يمكنك اختيار خدمات اضافية مع طلب الحجز"></SectionHeading>
                <div className="row justify-content-center gap-2">


                </div> */}
                <SectionHeading
                    heading="معلومات الدفع"
                    headingDescription="إليك جميع وسائل الدفع المتاحة لدينا"
                ></SectionHeading>
                <div className="row payments-avaliable-ways">
                    <div className="third-party-payments">
                        <h2>عند زيارتك لـ SHIFT يمكنك الدفع بإستخدام إحدى الطرق الأتية</h2>
                        <div className="payments-ways">
                            <img
                                src={applePay}
                                alt=""
                                class="payment-icon"
                                title="يمكنك الدفع بإستخدام ابل اى باي"
                            />
                            <img
                                src={mada}
                                alt=""
                                class="payment-icon"
                                title="يمكنك الدفع بإستخدام شبكة مدى"
                            />
                            <img
                                src={cash}
                                alt=""
                                class="payment-icon"
                                title="يمكنك الدفع نقدياً (كاش)"
                            />
                        </div>
                    </div>
                </div>
                <SectionHeading
                    heading="ملخص الحجز"
                    headingDescription="من فضلك قم بمراجعة الخدمات المحجوزة"
                ></SectionHeading>
                <div className="row book-review gap-2">
                    <BookReview
                        bookReviewTitle="حجم سيارتك"
                        bookReviewIcon={carIcon}
                        reviewValue={carSize}
                    ></BookReview>
                    <BookReview
                        bookReviewTitle="عدد الخدمات المحجوزة"
                        bookReviewIcon={sortIcon}
                        reviewValue={cart.length}
                    ></BookReview>
                    <BookReview
                        bookReviewTitle="الخدمات المحجوزة"
                        bookReviewIcon={bookingIcon}
                        itemsArray={cartItemsArray}
                    ></BookReview>
                    {/* <BookReview bookReviewTitle="الخدمات الإضافية" bookReviewIcon={icon} ></BookReview> */}
                    <BookReview
                        bookReviewTitle="مدة تنفيذ طلبك"
                        bookReviewIcon={timeIcon}
                        reviewValue={totalTimeExecution + ' ساعة'}
                    ></BookReview>
                    <BookReview
                        bookReviewTitle="التكلفة الإجمالية"
                        bookReviewIcon={priceIcon}
                        reviewValue={totalPrice + ' ر.س'}
                    ></BookReview>
                </div>
                <SectionHeading heading="عربة الشراء"></SectionHeading>
                <div className="row cart table-responsive">
                    <table class="table table-hover align-middle">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">اسم الخدمة</th>
                                <th scope="col">سعر الخدمة</th>
                                <th scope="col">مدة تنفيذ (بالساعات)</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                cart.map((service, index) => {
                                    return (
                                        <tr key={service.uuid}>
                                            <th scope="row">{++index}</th>
                                            <td>{service.main_service.service_name}</td>
                                            <td>{service.service_price + ' ر.س'}</td>
                                            <td>{service.service_execution_time}</td>
                                            <td>
                                                <button type="button" className="btn btn-outline-danger" onClick={(e) => {
                                                    dispatch(removeFromCart(service))
                                                }}>ازالة</button>
                                            </td>

                                        </tr>
                                    );

                                    // console.log(service)
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <SectionHeading heading="تاكيد الحجز"></SectionHeading>
                <div className="row book-confirmation">
                    <button
                        type="button"
                        className="book-confirm-btn"
                        onClick={() => {
                            bookingObject.client_name = client_full_name;
                            bookingObject.client_phone = client_mobile;
                            bookingObject.car_brand = car_brand;
                            bookingObject.car_model = car_model;
                            bookingObject.car_size = carSize;

                            cart.forEach((element) => {
                                bookingObject.services.push({
                                    execution_time: element.service_execution_time,
                                    id: element.service_id,
                                    name: element.main_service.service_name,
                                    price: element.service_price
                                });
                            });
                            handleClick(bookingObject, cart);
                        }}
                    >
                        <span>تأكيد عملية الحجز</span>
                        <img src={confirmBtn} alt="" className="confirm-btn-icon" />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default BookNow;
