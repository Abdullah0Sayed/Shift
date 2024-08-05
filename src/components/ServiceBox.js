import '../css/servicebox.css';


function ServiceBox(props) {
  return (
    <div className="service-box col-md-3 col-sm-1 mx-2 ">
      <div className='service-badge'>
        {props.serviceTitle}
      </div>
      <img src={props.image} alt="Avatar" class="image" />
      {/* <h2 className='text-center service-heading p-4'>{props.heading}</h2> */}
      <div className="overlay">
        <h1 className='service-title text-center'>{props.serviceTitle}</h1>
        <p className='service-warranty'>{props.serviceWarranty}</p>

        {/* <p className='service-warranty'>{props.serviceWarranty}</p> */}
        
          <button className='btn btn-info py-2'>تفاصيل الخدمة</button>
       
      </div>
    </div>
  );
}

export default ServiceBox;
