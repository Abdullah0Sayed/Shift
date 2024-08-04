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
                <p className="card-text">هي علامة تجارية إيطالية معتمدة في مجال العناية بالسيارات حاصلة على شهادة الجودة ايزو 9001 حيث تركز على التنظيف العميق ببخار الماء والتجديد والإصلاح الداخلي وإصلاح الطلاء الخارجي والتلميع (البوليش) والحماية وحماية الطلاء والعزل الحراري والنانوسيراميك وتستخدم الشركة معداتها المصنعة من نظام (ايكولوجي) ومنتجات غير كيميايئية قابلة للتحلل وصديقة للبيئة، ويتم تقديم الخدمات وفقا لإجراءات فنية تم اختبارها وإتقانها لأكثر من 11 سنة من الخبرة لهذا تم اختيارها كشريك حصري لشركة (نمط pattern) والحصول على الامتياز التجاري وحقوق منحه في السعودية ودول الخليج لضمان تقديم خدمة مميزة عالية الجودة والمعايير لتليق بطموحاتنا وعملائنا في المنطقة.</p>

              </div>
            </div>



          </div>
        </div>

      </div>
    </div>


  );

}

export default Aboutus;