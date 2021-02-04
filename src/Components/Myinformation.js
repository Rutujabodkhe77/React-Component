import './myinfo.css'
function Myinformation(props)
{
return(
<div id="myinfo">
    <ol>
       <li>Name:{props.name}</li> 
       <li>Age:{props.age}</li> 
    </ol>
    </div>
);
}

export default Myinformation;