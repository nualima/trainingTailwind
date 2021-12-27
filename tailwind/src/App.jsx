import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app font-serif">
      <div className="absolute h-screen w-screen flex flex-col justify-center bg-cover	bg-quadrille opacity-40 z-0 ">

      </div>
      <div

        className=" space between ml-auto mr-auto my-60 inset-x-0 h-3/6 absolute pl-8 bg-slate-200 shadow-xl ring-2 ring-gray-900/5  w-6/12  z-1 sm:max-w-lg  flex flex-col justify-evenly	text-gray-600" >
        <div className="row logo">
          <img src={`${process.env.PUBLIC_URL}/tailogo.png`} alt="" className="mt-4" width="150" />
        </div>
        <div className=' '>
          <p>An advanced online playground for Tailwind CSS, including support for things like:
            <ul className="row">

              <br />

              <li class="flex items-center ">
              <svg class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg><p className="pl-4">
              Customizing your <strong>tailwind.config.js</strong> file</p></li>

              <li class=" flex items-center ">
              <svg class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="pl-4">Extracting classes with <strong>@apply</strong></p></li>

              <li class=" flex items-center ">
              <svg class="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg><p className="pl-4">Code completion with instant preview </p></li>
            </ul>
            Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
        </div>


        <div className="footer pt-6 border-t-2 border-t-gray-300 w-9/12
        ">

          <span><strong>Want to dig deeper into Tailwind?</strong></span>
          <br/>

          <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
        </div>

        {/* <div className=" ml-28 mt-8 text-align: left; font-mono text-3xl ">Todo-List</div> */}
      </div>

    </div >
  );
}

export default App;