import '../css/aboutus.css';
import logo from '../images/logo.svg';


function Aboutus() {

  return (
    <div className='container'>
      <div className='row'>
        <div className="card mb-6 aboutus ">
          <div className="row col-md-auto">

            <div className="col-md-4 col-sm-1 card-image animate__animated animate__fadeInRight" >
              <img src={logo} className="img-fluid rounded-start" alt="..." />
            </div>

            <div className="col-md-8 col-sm-1 animate__animated animate__pulse">
              <div className="card-body about-body">
                <h2 className="card-title">SHIFT</h2>
                <p className="card-text">
                  علامة تجارية سعوديه 100٪  في مجال العناية بمختلف احجام وانواع السيارات. تتعدد خدماتنا على التنظيف العميق ببخار الماء والتجديد والإصلاح الداخلي وإصلاح الطلاء الخارجي والتلميع (البوليش) والحماية وحماية الطلاء والعزل الحراري والنانوسيراميك وتستخدم shift احدث المعدات والتقنيات الموجوده ومنتجات غير كيميائيه صديقة للبيئة، كما يتم تقديم الخدمات وفقا لإجراءات فنية تم اختبارها وإتقانها عبر فريق يمتلك الخبرة ومدرب علي أعلى مستوي لضمان تقديم خدمة مميزة عالية الجودة ومطابقة للمعايير داخل المملكة لخدمة عملائنا.
                </p>

              </div>
            </div>



          </div>
        </div>

      </div>
    </div>


  );

}

export default Aboutus;