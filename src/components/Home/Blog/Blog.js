import React from 'react';
import './Blog.css'
import people1 from '../../../images/people1.png'
// import people2 from '../../../images/people2.png'
import people3 from '../../../images/people3.png'

const Blog = () => {
    return (
        <div className="container  mt-5 pt-5">
            <div className="text-center">
                <h5 className="text-brand">OUR BLOG</h5>
                <h2>From Our Blog News</h2>
            </div>
            <div className="row mt-5 pt-5 ">
                <div className="col-md-4">
                    <div className="card blog-bg " style={{width:'25rem', height:'19rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Rashed Kabir</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{`15 March ${new Date().getFullYear()}`}</h6>
                            <h2>Check At Least a Doctor In a Year for Your Teeth</h2>
                           
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{width:'25rem', height:'19rem'}}>
                        <div className="card-body">
                            <div className='d-flex justify-content-center'>
                                <img src={people1} alt=""/>
                                <div className="ms-3">
                                    <h3>Dr. Caudi</h3>
                                    <h6 className="text-secondary">23 April {new Date().getFullYear()}</h6>
                                </div>
                            </div>
                            <br/>
                            <h2>2 Times of Brush in a day can keep You Healthy</h2>
                            <p className="card-text mt-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" style={{width:'25rem', height:'19rem'}}>
                        <div className="card-body">
                            <div className='d-flex justify-content-center'>
                                <img src={people3} alt=""/>
                                <div className="ms-3">
                                    <h3>Dr. Caudi</h3>
                                    <h6 className="text-secondary">23 April {new Date().getFullYear()}</h6>
                                </div>
                            </div>
                            <br/>
                            <h2>White Tooth Can Give You Confidence</h2>
                            <p className="card-text mt-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;