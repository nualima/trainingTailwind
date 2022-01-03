import './App.css';
import Header from './component/header';
import MainImage from './component/mainImage';
import Random from './component/random';

function App() {
  return (
    <div id='app' class="">
      <div className="ml-auto mr-auto w-4/6 h-screen border-4 border-black">
        <Header />

        <MainImage />

        <div className=" flex mx-auto mt-10 w-3/6 space-x-8">

          <Random image={`${process.env.PUBLIC_URL}/image2.jpg`} title='Maintenance' comment='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
          <Random image={`${process.env.PUBLIC_URL}/image3.jpg`} title="Software" comment='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
          <Random image={`${process.env.PUBLIC_URL}/image4.jpg`} title='Hardware' comment='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />


        </div>
        <div id="footer" className="mx-auto text-center b-0 w-full pt-4 h-4		">

          <input type="button" className="text-center bg-sky-400 text-white text-5xl h-12 " value="Call Us Now"></input>

        </div>



      </div>
    </div>
  );
}

export default App;
