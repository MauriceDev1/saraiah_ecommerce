import { Component } from 'solid-js';
import Woman1 from '../../assets/images/woman-6496881_1280.jpg'
import Woman2 from '../../assets/images/woman-6771288_1280.jpg'

const Hero: Component = () => {
  return (
    <div class="w-full h-screen bg-gray-200 flex">
      <div class="w-1/2" style={{ "background-image": `url(${Woman2})`,"background-size":"cover"}}>
      </div>
      <div class="w-1/2 bg-red-100 h-full" style={{ "background-image": `url(${Woman1})`,"background-size":"cover"}}>
      </div>
    </div>
  );
};

export default Hero;
