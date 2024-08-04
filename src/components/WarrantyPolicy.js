import '../css/warranty.css';
import SectionHeading from './SectionHeading';

function WarrantyPolicy() {
    return (
        <div className="container">
            <SectionHeading heading="سياسة الضمان"/>
            <div className="row ">
                <div className='table-responsive'>
                    <table className="table table-active table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">الباقة</th>
                                <th scope="col">مدة الضمان</th>
                                <th scope="col">الصيانة</th>
                                <th scope="col">الشروط</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">حماية نانوسيراميك (داخلي)</th>
                                <td>سنة</td>
                                <td>سنوياً</td>
                                <td>@لايشمل الضمان الأتي: تلف الغسيل التي تسبب الخدوش بسبب عدم استخدام فوط المايكروفايبر او عدم نظافتها. اضرار الغبار اثناء السفر (السافي) او اثار الأحجار المتطايرة في الطريق. الأجزاء المتضررة من حوادث.</td>
                            </tr>
                            <tr>
                                <th scope="row">حماية نانوسيراميك (داخلي)</th>
                                <td>سنة</td>
                                <td>سنوياً</td>
                                <td>@لايشمل الضمان الأتي: تلف الغسيل التي تسبب الخدوش بسبب عدم استخدام فوط المايكروفايبر او عدم نظافتها. اضرار الغبار اثناء السفر (السافي) او اثار الأحجار المتطايرة في الطريق. الأجزاء المتضررة من حوادث.</td>
                            </tr>
                            <tr>
                                <th scope="row">حماية نانوسيراميك (داخلي)</th>
                                <td>سنة</td>
                                <td>سنوياً</td>
                                <td>@لايشمل الضمان الأتي: تلف الغسيل التي تسبب الخدوش بسبب عدم استخدام فوط المايكروفايبر او عدم نظافتها. اضرار الغبار اثناء السفر (السافي) او اثار الأحجار المتطايرة في الطريق. الأجزاء المتضررة من حوادث.</td>
                            </tr>
                           


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default WarrantyPolicy;