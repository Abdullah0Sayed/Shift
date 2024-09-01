import '../css/bookservice.css';
import React from 'react';

function BookService(props) {
  const { serviceName, isActive, onClick } = props;

  return (
    <div
      className={`col-3 book-service-componnet ${isActive ? 'active' : ''}`}
      onClick={() => onClick(serviceName)}
    >
      {serviceName}
    </div>
  );
}

export default BookService;
