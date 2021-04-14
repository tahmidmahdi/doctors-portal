import React from 'react';

const TestimonialCart = ({ people }) => {
    console.log(people);
    return (
        <div className="col-md-4">
            <div class="card " style={{width: "26rem"}}>
                <div class="card-body">
                  
                    <p className="card-text text-secondary">{people.description}</p>
                    <br/>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={people.img} alt=""/>
                        <div className="ms-3 ">
                            <h4 className='text-brand'>{people.name}</h4>
                           <p className='text-secondary'>{people.location}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TestimonialCart;