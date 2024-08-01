import Input from "./Input";
import SectionHeading from "./SectionHeading";
import '../css/contactus.css';

import callcenter from '../images/callcenter.png';
import ContactSectionHead from "./ContactSectionHead";

function Contactus() {
    return (
        <>
            <ContactSectionHead img={callcenter} heading="فريق خدمة عملاء مميز لخدمتكم" body="نسعى دائماً في SHIFT لتقديم خدمات تلبى احتياجات عملائها ، لذلك قمنا بتعيين فريق خدمة عملاء مميز لخدمتكم على مدار اليوم"/>
            <SectionHeading heading="تواصل مع SHIFT"></SectionHeading>
            <from className="row g-2">
                
                <div className="col-6">
                    <Input
                        label="الأسم الأول"
                        placeholder="أدخل اسمك الأول"
                        type="text"
                        id="firstname"
                        inputFor="lastname"
                    ></Input>
                </div>
                <div className="col-6">
                    <Input
                        label="الأسم الأخير"
                        placeholder="أدخل اسمك الأخير"
                        type="text"
                        id="lastname"
                        inputFor="lastname"
                    ></Input>
                </div>
                <div className="col-6">
                    <Input
                        label="البريد الإلكتروني"
                        placeholder="أدخل البريد الإلكتروني"
                        type="email"
                        id="email"
                        inputFor="email"
                    ></Input>
                </div>
                <div className="col-6">
                    <Input
                        label="رقم الجوال"
                        placeholder="أدخل رقم الجوال"
                        type="text"
                        id="mobile"
                        inputFor="mobile"
                    ></Input>
                </div>
                <div className="col-12">
                    <Input
                        label="استفسارك عن"
                        placeholder="أدخل رسالة استفسارك "
                        type="text"
                        id="subject"
                        inputFor="subject"
                    ></Input>
                </div>
                <div className="col-12 form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                    ></textarea>
                    <label for="floatingTextarea2" className="px-4">رسالة الاستفسار</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="clientForShift"/>
                    <label class="form-check-label text-dark" for="clientForShift">عميل سابق لدى SHIFT ؟</label>
                </div>
                <div className="col-12">
                    <button type="button" className="button form-button col-12 p-3">ارسال</button>
                </div>

            </from>
        </>
    );
}

export default Contactus;
