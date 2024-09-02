import Input from "./Input";
import SectionHeading from "./SectionHeading";
import '../css/contactus.css';

import callcenter from '../images/callcenter.png';
import ContactSectionHead from "./ContactSectionHead";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

import axios from "axios";

function Contactus() {



    let [client_full_name, setClientFullName] = useState('');
    let [client_mobile_phone, setClientMobilePhone] = useState('');
    let [quey_subject, setQuerySubject] = useState('');
    let [query_about, setQueryMessage] = useState('');
    let [old_customer, setOldCustomer] = useState(false);
    let inqueryObject = {
        client_full_name,
        client_mobile_phone,
        quey_subject,
        query_about,
        old_customer
    }
    useEffect(() => {
        setOldCustomer(false)
    }, []);

    const handleClick = async (inqueryObject) => {
        if (!inqueryObject.client_full_name) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى إدخال الاسم الكامل.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }
        if (!inqueryObject.client_mobile_phone || inqueryObject.client_mobile_phone.length !== 9) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى إدخال رقم الهاتف المكون من 9 أرقام.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }
        if (!inqueryObject.quey_subject) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى إدخال عنوان لطلبكم.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }
        if (!inqueryObject.query_about) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى إدخال رسالة الاستفسار.',
                icon: 'warning',
                confirmButtonText: 'موافق'
            });
            return;
        }
        try {
            const { data } = await axios.post('http://127.0.0.1:8000/api/inqueries', inqueryObject, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(data);
            Swal.fire({
                title: 'تم ارسال استفساركم بنجاح',
                text: 'تم ارسال طلبكم بنجاح. وسنقوم بالتواصل معكم قريباً.',
                icon: 'success',
                confirmButtonText: 'موافق'
            }).then(() => {
                window.location.href = '/'; // إعادة تحميل الصفحة
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'حدث خطأ',
                text: 'عذراً، حدث خطأ أثناء ارسال طلبكم. يرجى المحاولة مرة أخرى.',
                icon: 'error',
                confirmButtonText: 'موافق'
            }).then(() => {
                window.location.href = '/'; // إعادة تحميل الصفحة
            });
        }
    };


    return (




        <>
            <ContactSectionHead img={callcenter} heading="فريق خدمة عملاء مميز لخدمتكم" body="نسعى دائماً في SHIFT لتقديم خدمات تلبى احتياجات عملائها ، لذلك قمنا بتعيين فريق خدمة عملاء مميز لخدمتكم على مدار اليوم" />
            <SectionHeading heading="تواصل مع SHIFT"></SectionHeading>
            <div className="container">
                <from className="row g-2">

                    <div className="col-6">
                        <Input
                            label="الأسم بالكامل"
                            placeholder="أدخل اسمك بالكامل"
                            type="text"
                            id="client_full_name"
                            inputFor="client_full_name"
                            onChange={setClientFullName}
                        ></Input>
                    </div>

                    <div className="col-6">
                        <Input
                            label="رقم الجوال"
                            placeholder="أدخل رقم الجوال"
                            type="text"
                            id="client_mobile_phone"
                            inputFor="client_mobile_phone"
                            onChange={setClientMobilePhone}
                        ></Input>
                    </div>
                    <div className="col-12">
                        <Input
                            label="استفسارك عن"
                            placeholder="أدخل رسالة استفسارك "
                            type="text"
                            id="quey_subject"
                            inputFor="quey_subject"
                            onChange={setQuerySubject}
                        ></Input>
                    </div>
                    <div className="col-12 form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            name="query_about"
                            id="floatingTextarea2"
                            onChange={(event) => {
                                setQueryMessage(event.target.value);
                                console.log(query_about)
                            }}
                        ></textarea>
                        <label for="floatingTextarea2" className="px-4">رسالة الاستفسار</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="clientForShift" onChange={(event) => {
                            if (old_customer == true) {
                                setOldCustomer(false)
                            }
                            else {
                                setOldCustomer(true)
                            }


                        }} />
                        <label class="form-check-label text-dark" for="clientForShift">عميل سابق لدى SHIFT ؟</label>
                    </div>
                    <div className="col-12">
                    <button 
    className="button form-button col-12 p-3" 
    onClick={function(){
        handleClick(inqueryObject);
       
    }}
>
    ارسال
</button>

                    </div>

                </from>

            </div>

        </>
    );
}

export default Contactus;
