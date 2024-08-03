import Input from "./Input";
import SectionHeading from "./SectionHeading";
import "../css/contactus.css";

import complaints from "../images/complaints.gif";
import ContactSectionHead from "./ContactSectionHead";

function Complaints() {
    return (
        <>
            <ContactSectionHead
                img={complaints}
                heading="فريق خدمة عملاء لإستقبال شكاوتكم ومقترحاتكم"
                body="نسعى دائماً في SHIFT لتقديم خدمات تلبى احتياجات عملائها ، لذلك قمنا بتعيين فريق خدمة عملاء مميز لخدمتكم على مدار اليوم"
            />
             <SectionHeading heading="نسعى لخدمة أفضل"></SectionHeading>
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
                    <select class="form-select p-3 mb-3 complaints" aria-label="Default select example ">
                        <option selected className="selectLabel" disabled>أختر نوع الطلب</option>
                        <option value="شكوى">شكوى</option>
                        <option value="مقترح">مقترح</option>
                    </select>
                </div>
                <div className="col-12">
                    <select class="form-select p-3 mb-3 complaints" aria-label="Default select example ">
                        <option selected className="selectLabel" disabled>مقترح فـ / شكوى عن</option>
                        <option value="شكوى">خدمة</option>
                        <option value="مقترح">خدمة</option>
                        <option value="مقترح">خدمة</option>
                        <option value="مقترح">خدمة</option>
                    </select>
                </div>
                <div className="col-12 form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                    ></textarea>
                    <label for="floatingTextarea2" className="px-4">محتوى الشكوى / المقترح</label>
                </div>
                <div>
                    <label for="formFileLg" class="form-label">صورة الفاتورة (إختياري)</label>
                    <input class="form-control form-control-lg" id="formFileLg" type="file"/>
                </div>
                <div>
                    <label for="formFileLg" class="form-label">صورة الضمان (إختياري)</label>
                    <input class="form-control form-control-lg" id="formFileLg" type="file"/>
                </div>
                <div>
                    <label for="formFileLg" class="form-label">صورة التلفيات (إختياري)</label>
                    <input class="form-control form-control-lg" id="formFileLg" type="file"/>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="clientForShift" />
                    <label class="form-check-label text-dark" for="clientForShift">
                        عميل سابق لدى SHIFT ؟
                    </label>
                </div>
                <div className="col-12">
                    <button type="button" className="button form-button col-12 p-3">
                        ارسال
                    </button>
                </div>
            </from>
        </>
    );
}

export default Complaints;
