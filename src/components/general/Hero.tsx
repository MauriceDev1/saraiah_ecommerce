import { Component } from 'solid-js';
import Woman1 from '../../assets/images/woman-6496881_1280.jpg'
import Boy from '../../assets/images/heron_017.jpg'
// import Boy from '../../assets/images/arias_050.jpg'

const Hero: Component = () => {
  return (
    <div class="w-full h-screen bg-gray-200 flex">
      <div class="hidden md:flex md:w-1/3" style={{ "background-image": `url(${Woman1})`,"background-size":"cover"}}>
      </div>
      <div class="w-full md:w-1/3 bg-newColor h-full" style={{ "background-image": `url(${Boy})`,"background-size":"cover","background-position-y":"100px","background-repeat":"no-repeat"}}>
      </div>
      <div class="w-full md:w-1/3 bg-red-100 h-full" style={{ "background-image": `url(${Boy})`,"background-size":"cover"}}>
      </div>
    </div>
  );
};

export default Hero;
