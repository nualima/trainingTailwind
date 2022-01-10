import './App.css';
import Header from './component/header';
import Accordion from './component/accordion';
import Random from './component/random';

function App() {
  return (
    <div id='app' className="">
      <div className="ml-auto mr-auto w-5/6 h-full border-4 border-black ">
        <Header />
        <div id="mainImage ">
          <img src={`${process.env.PUBLIC_URL}/test2.png`} alt="" className="ml-0 w-full max-h-96 mt-5 " width="" />
        </div>

        <div className=" flex mt-10 xl:pl-48 xl:pr-48 basis-auto justify-between w-full flex-col lg:flex-row">

          <Random image={`${process.env.PUBLIC_URL}/image2.jpg`} title='Maintenance' comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur harum, culpa eum accusantium, vero hic error ut commodi labore sequi ' />
          <Random image={`${process.env.PUBLIC_URL}/image3.jpg`} title="Software" comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur harum, culpa eum accusantium, vero hic error ut commodi labore sequi ' />
          <Random image={`${process.env.PUBLIC_URL}/image4.jpg`} title='Hardware' comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur harum, culpa eum accusantium, vero hic error ut commodi labore sequi ' />

        </div>


        <div id="footer" className="mx-auto text-center b-0 w-full pt-4	">
          <button type="button" className="inline-block text-center text-3xl p-auto h-16 w-60 ease-out duration-300 cursor-pointer m-1.5 bg-sky-500 text-white bottom-2.5  " value="">Call Us Now</button>
        </div>


      </div>
    </div>
  );
}

export default App;
