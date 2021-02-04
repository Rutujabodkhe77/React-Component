import './rutuja.css';
// import About from './About.js';
// import About from './Components/About.js';
import About from './Components/Screens/About.js';
import Myinformation from './Components/Myinformation.js';

function App() {
  return (
//****first div for rutuja.css***
  <div > 
          <h2>Today we are going to learn CSS...</h2>

    {/* ***call by tag method***  */} 
     <h1>Welcome To React js By_Tag(h1...h6 ect.) Method</h1>

    {/* ***call by class method*** */}
     <h1 className="wisdom">Welcome To By_Class(.wisdom) Method </h1>

    {/* ***Call by ID method*** */}
     <h1 id="my_p_tag">Welcome To By_id(#my_p_tag)</h1>

 {/* *****This is for ins about.css***** */}
  <About> </About>
  
{/* ***  *** */}

<Myinformation name="rutuja" age="21" ></Myinformation>
<Myinformation name="Pooja" age="24"></Myinformation>
<Myinformation name="Pratiksha" age="24" ></Myinformation>
<Myinformation name="Sneha" age="24"></Myinformation>
</div> 
 

);
}

export default App;
