import './App.css';
import Header from './component/header';
import MainImage from './component/mainImage';
import Random from './component/random';

function App() {
  return (
    <div id='app' class="">
      <div className="ml-auto mr-auto pl-48 w-5/6 h-screen border-4 border-black ">
        <Header />
        <MainImage />

        <div className=" flex  mt-10 w-4/6 space-x-8">

          <Random image={`${process.env.PUBLIC_URL}/image2.jpg`} title='Maintenance' comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur harum, culpa eum accusantium, vero hic error ut commodi labore sequi ' />
          <Random image={`${process.env.PUBLIC_URL}/image3.jpg`} title="Software" comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur harum, culpa eum accusantium, vero hic error ut commodi labore sequi ' />
          <Random image={`${process.env.PUBLIC_URL}/image4.jpg`} title='Hardware' comment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur harum, culpa eum accusantium, vero hic error ut commodi labore sequi ' />


        </div>
        {/* <div id="footer" className="mx-auto text-center b-0 w-full pt-4 h-4		">

          <button type="button" className="inline-block text-center text-3xl p-auto h-16 w-60 ease-out duration-300 cursor-pointer m-1.5 bg-sky-500 text-white bottom-2.5 fixed " value="">Call Us Now</button>
        </div> */}



      </div>
    </div>
  );
}

export default App;
