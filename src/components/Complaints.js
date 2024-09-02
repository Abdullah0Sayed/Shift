import Input from "./Input";
import SectionHeading from "./SectionHeading";
import "../css/contactus.css";

import complaints from "../images/complaints.gif";
import ContactSectionHead from "./ContactSectionHead";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";

function Complaints() {
    const [client_full_name, setClientFullName] = useState('');
    const [client_mobile_phone, setClientMobilePhone] = useState('');
    const [order_type, setOrderType] = useState('');
    const [order_for_service, setOrderService] = useState('');
    const [message, setMessage] = useState('');
    const [old_customer, setOldCustomer] = useState(0);
    const [invoice_file, setInvoiceFile] = useState(null);
    const [warranty_file, setWarrantyFile] = useState(null);
    const [damages_file, setDamagesFile] = useState(null);

    useEffect(() => {
        setOldCustomer(0);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const complaintForm = new FormData();
            complaintForm.append('client_full_name' , client_full_name)
            complaintForm.append('client_mobile_phone' , client_mobile_phone)
            complaintForm.append('order_type' , order_type)
            complaintForm.append('order_for_service' , order_for_service)
            complaintForm.append('message' , message)
            complaintForm.append('old_customer' , old_customer)
            complaintForm.append('invoice_file' , invoice_file)
            complaintForm.append('warranty_file' , warranty_file)
            complaintForm.append('damages_file' , damages_file)

            if(complaintForm.get('client_full_name') === '') {
                Swal.fire({
                    title: 'خطأ',
                    text: 'يرجى إدخال الاسم الكامل.',
                    icon: 'warning',
                    confirmButtonText: 'موافق'
                });
                return;
            }
            if(complaintForm.get('client_mobile_phone') === '' || complaintForm.get('client_mobile_phone').length !== 9) {
                Swal.fire({
                    title: 'خطأ',
                    text: 'يرجى إدخال رقم الهاتف المكون من 9 أرقام.',
                    icon: 'warning',
                    confirmButtonText: 'موافق'
                });
                return;
            }
            if(complaintForm.get('order_type') === '') {
                Swal.fire({
                    title: 'خطأ',
                    text: 'يرجى تحديد نوع الطلب ( شكوى / مقترح ).',
                    icon: 'warning',
                    confirmButtonText: 'موافق'
                });
                return;
            }
            if(complaintForm.get('order_for_service') === '') {
                Swal.fire({
                    title: 'خطأ',
                    text: 'يرجى تحديد نوع الخدمة التي تود إرسال مقترح / شكوى عنها.',
                    icon: 'warning',
                    confirmButtonText: 'موافق'
                });
                return;
            }
            if(complaintForm.get('message') === '') {
                Swal.fire({
                    title: 'خطأ',
                    text: 'يرجى إدخال رسالتك ، لنستطيع مساعدتك في ما تريد',
                    icon: 'warning',
                    confirmButtonText: 'موافق'
                });
                return;
            }
            const { data } = await axios.post('http://127.0.0.1:8000/api/compalints-suggests',complaintForm, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(data)
            Swal.fire({
                title: 'تم ارسال استفساركم بنجاح',
                text: 'تم ارسال طلبكم بنجاح. وسنقوم بالتواصل معكم قريباً.',
                icon: 'success',
                confirmButtonText: '<a href="/">موافق<a/>'
            });
            
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'حدث خطأ',
                text: 'عذراً، حدث خطأ أثناء ارسال طلبكم. يرجى المحاولة مرة أخرى.',
                icon: 'error',
                confirmButtonText: 'موافق'
            });
        }
    };
    return (
        <>
            <ContactSectionHead
                img={complaints}
                heading="فريق خدمة عملاء لإستقبال شكاوتكم ومقترحاتكم"
                body="نسعى دائماً في SHIFT لتقديم خدمات تلبى احتياجات عملائها ، لذلك قمنا بتعيين فريق خدمة عملاء مميز لخدمتكم على مدار اليوم"
            />
            <SectionHeading heading="نسعى لخدمة أفضل" />
            <div className="container">
                <form className="row g-2" >
                    <div className="col-6">
                        <Input
                            label="الأسم بالكامل"
                            placeholder="أدخل اسمك بالكامل"
                            type="text"
                            id="client_full_name"
                            inputFor="client_full_name"
                            onChange={setClientFullName}
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            label="رقم الجوال"
                            placeholder="أدخل رقم الجوال"
                            type="text"
                            id="client_mobile_phone"
                            inputFor="client_mobile_phone"
                            onChange={setClientMobilePhone}
                        />
                    </div>
                    <div className="col-12">
                        <select className="form-select p-3 mb-3 complaints" name="order_type" aria-label="Default select example" onChange={(e) => setOrderType(e.target.value)}>
                            <option value="" disabled selected className="selectLabel">أختر نوع الطلب</option>
                            <option value="شكوى">شكوى</option>
                            <option value="مقترح">مقترح</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <select className="form-select p-3 mb-3 complaints" name="order_for_service" aria-label="Default select example" onChange={(e) => setOrderService(e.target.value)}>
                            <option value="" disabled selected className="selectLabel">مقترح فـ / شكوى عن</option>
                            <option value="التلميع">التلميع</option>
                            <option value="العازل الحراري">العازل الحراري</option>
                            <option value="أفلام الحماية">أفلام الحماية</option>
                            <option value="النانو سيراميك">النانو سيراميك</option>
                        </select>
                    </div>
                    <div className="col-12 form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            onChange={(e) => setMessage(e.target.value)}
                            name="message"
                        ></textarea>
                        <label htmlFor="floatingTextarea2" className="px-4">محتوى الشكوى / المقترح</label>
                    </div>
                    <div>
                        <label htmlFor="invoice_file" className="form-label">صورة الفاتورة (إختياري)</label>
                        <input className="form-control form-control-lg" name="invoice_file" id="invoice_file" type="file" onChange={(e) => setInvoiceFile(e.target.files[0])} />
                    </div>
                    <div>
                        <label htmlFor="warranty_file" className="form-label">صورة الضمان (إختياري)</label>
                        <input className="form-control form-control-lg" name="warranty_file" id="warranty_file" type="file" onChange={(e) => setWarrantyFile(e.target.files[0])} />
                    </div>
                    <div>
                        <label htmlFor="damages_file" className="form-label">صورة التلفيات (إختياري)</label>
                        <input className="form-control form-control-lg" name="damages_file" id="damages_file" type="file" onChange={(e) => setDamagesFile(e.target.files[0])} />
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="clientForShift" name="old_customer" onChange={(event) => {
                            if (old_customer == 1) {
                                setOldCustomer(0)
                            }
                            else {
                                setOldCustomer(1)
                            }


                        }} />
                        <label className="form-check-label text-dark" htmlFor="clientForShift">عميل سابق لدى SHIFT ؟</label>
                    </div>
                    <div className="col-12">
                        <button className="button form-button col-12 p-3" onClick={handleSubmit}>ارسال</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Complaints;
