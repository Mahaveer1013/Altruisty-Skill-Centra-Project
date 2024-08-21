import React from 'react';
import Carousel from './Carousel';
import TrainingPrograms from './TrainingPrograms';
import AfterCarousel from './AfterCarousel';

const Joined = () => {
  return (
    <div>
      <Carousel />
      <AfterCarousel />
      <TrainingPrograms />
    </div>
  );
};

export default Joined;
