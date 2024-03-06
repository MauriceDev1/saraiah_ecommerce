import { Component } from 'solid-js';
import Woman2 from '../../assets/images/2feeec_a6c484a2829348a0a846718c853f8435~mv2.webp'

const Hero: Component = () => {
  return (
    <div class="w-full h-screen bg-gray-200 flex">
      <div class="w-1/2 bg-red-100 h-full">
      </div>
      <div class="w-1/2" style={{ "background-image": `url(${Woman2})`,"background-size":"cover"}}>
      </div>
    </div>
  );
};

export default Hero;
