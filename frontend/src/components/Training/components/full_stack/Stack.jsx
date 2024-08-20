import React, { useEffect } from 'react';
import person from "../../assets/images/person.jpeg";
import "./overview.css";
import Aos from "aos";
import 'aos/dist/aos.css';

function Stack() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="">
      <div className="h-[450px] md:h-[550px] top font-times">
        <div className="">
          <img
            className="image p-8 md:ml-[325px] rounded-full"
            src={person}
            data-aos="fade-right"
            alt="Person"
          />
        </div>
        <div className="font-bold ml-6 text-4xl text-white font-mono md:ml-[36%]">
          <div className="md:text-7xl">
            <h1>Full Stack</h1>
            <h1 className="ml-20 md:ml-40 mt-5">Development</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
