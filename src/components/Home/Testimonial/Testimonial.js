// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import people1 from '../../../images/people1.png'
import people2 from '../../../images/people2.png'
import people3 from '../../../images/people3.png'
import TestimonialCart from '../TestimonialCart/TestimonialCart';
import './Testimonial.css'

const people = [
    {
        name: 'Wilson Herry',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate perferendis ad officiis doloribus sunt voluptatum eligendi aut, recusandae autem nisi inventore dolorum delectus. Facilis, iusto! Maxime dolore dignissimos ut molestias!',
        img: people1,
        location: 'California'
    },
    {
        name: 'Wilson Herry',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate perferendis ad officiis doloribus sunt voluptatum eligendi aut, recusandae autem nisi inventore dolorum delectus. Facilis, iusto! Maxime dolore dignissimos ut molestias!',
        img: people2,
        location: 'California'
    },
    {
        name: 'Wilson Herry',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate perferendis ad officiis doloribus sunt voluptatum eligendi aut, recusandae autem nisi inventore dolorum delectus. Facilis, iusto! Maxime dolore dignissimos ut molestias!',
        img: people3,
        location: 'California'
    },
]

const Testimonial = () => {
    return (
        <div  className='container mt-5 pt-5 testimonial'>
            <div>
                <h5 className="text-brand">TESTIMONIAL</h5>
                <h2 style={{color: 'rgb(58, 66, 86)'}}>What's Our Patients <br/> Says</h2>
            </div>
            <div className='row mt-5'>
               {
                   people.map(pd =>  <TestimonialCart people={pd}></TestimonialCart>)
               }
            </div>
        </div>
    );
};

export default Testimonial;