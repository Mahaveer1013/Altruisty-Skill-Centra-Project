import React from 'react';
import Carousel from './Carousel';
import TrainingPrograms from './TrainingPrograms';
import Testimonials from './Testimonials';
import AfterCarousel from './AfterCarousel';

const Joined = () => {
  return (
    <div>
      <Carousel />
      <AfterCarousel />
      <TrainingPrograms />
      <Testimonials />
    </div>
  );
};

export default Joined;
