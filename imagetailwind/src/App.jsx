import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="app" className=" w-3/6 border-4 border-black ">
      <div id="header" className="flex justify-between h-60 ">
        <div id="left-header" className=" flex border-4 m-auto">
          
          <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="" className="" width="60px" />
          <div id="logoText" className="">



            <p>

              IT Support Today

            </p>
            <p >24/7 IT Support ALl day Everyday</p>
          </div>



        </div>
        <div id="right-header" className="flex flex-col border-4 border-green-700 m-auto		">
          <p>08 200 4000</p>


          <nav className="flex sm:justify-center space-x-4">
            {[
              ['Home', '/home'],
              ['Services', '/team'],
              ['About Us', '/aboutUs'],
              ['Contact', '/contact'],
            ].map(([title, url]) => (
              <a href={url} className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900">{title}</a>
            ))}
          </nav>




        </div>

      </div>
      <img src={`${process.env.PUBLIC_URL}/image1.jpg`} alt="" className="w-full " width="" />

      <div className="footer flex m-auto w-3/6 space-x-8">

        <div className="maintenance">
          
          <img src={`${process.env.PUBLIC_URL}/image2.png`} alt="" className="mt-4" width="150" />
          <p className='text-2xl'>Maintenance</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>

        </div>
        <div className="software">
          <img src={`${process.env.PUBLIC_URL}/image3.png`} alt="" className="mt-4" width="150" />
          <p className='text-2xl'>Software</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>


        </div>
        <div className="hardware">
          <img src={`${process.env.PUBLIC_URL}/image4.png`} alt="" className="mt-4" width="150" />
          <p className='text-2xl'>Hardware</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>


        </div>





      </div>

      <div id="contact" className="">
        
              <p className="text-center">Call Us Now</p>
        
      </div>



    </div>
  );
}

export default App;
