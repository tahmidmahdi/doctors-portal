import React from 'react';
import exceptional from '../../../images/exceptional.png';

const ExceptionalService = () => {
    return (
        <div className="d-flex justify-content-center mt-5 pt-5 ">
            <div className="row w-75">
                <div className="col-md-5 ">
                    <img style={{height:'480px', marginLeft:'80px'}} className="img-fluid" src={exceptional} alt=""/>
                </div>
                <div className="col-md-6 mt-3">
                    <h2 className="fw-bold" >Exceptional Dental <br/> Care, on Your Terms</h2>
                    <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat corrupti facilis sapiente tempore nostrum ipsam hic delectus? Maxime quaerat necessitatibus modi. Est delectus iure nesciunt vel possimus, rem quibusdam numquam incidunt cupiditate fuga qui magnam nam. Iste facilis minima quaerat earum ab, dicta modi pariatur alias velit ex minus distinctio aperiam nam unde deserunt vero sequi. Ipsam explicabo recusandae accusantium, culpa velit illum enim quas mollitia, fuga expedita amet reprehenderit animi ea facere voluptatibus perspiciatis alias rerum omnis quae nesciunt cum atque magni optio officia. Illo soluta corporis ipsa officiis, odit fugit tempore veritatis porro sequi atque quia ad aliquid? Pariatur aliquid, esse, officia iusto vero ea minus est ut eveniet veniam fugit, corporis inventore porro ipsam sequi! Officiis quia doloremque iusto? Consequatur, nemo laboriosam. Animi pariatur ut doloremque laudantium consequatur quam ex nobis repellendus voluptate illo minus harum, in praesentium magnam placeat ea explicabo impedit aliquid </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalService;