import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCart = ({ booking,date }) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 mt-5">
            <div class="card text-center card" style={{width: "25rem", height: "12rem"}}>
                <h4 className="text-brand">{booking.subject}</h4>
                <p><strong>{booking.visitingHour}</strong></p>
                <small className="text-secondary">{booking.totalSpace} Spaces Available</small>
                <div class="card-body">
                    <button onClick={openModal} className="btn-brand">book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} date={date} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>

        </div>
    );
};

export default BookingCart;