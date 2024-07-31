import '../css/servicebox.css';


function ServiceBox(props) {
  return (
    <div className="service-box col mx-2">
      <img src={props.image} alt="Avatar" class="image" />
      <h2 className='text-center service-heading p-4'>{props.heading}</h2>
      <div className="overlay">
        
          <button className='btn btn-info'>عرض التفاصيل</button>
       
      </div>
    </div>
  );
}

export default ServiceBox;
