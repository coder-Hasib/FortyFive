
import './App.css';

function App() {
  const clients =["Hasibul","abir","thethee","moinul"];

  const cinemas =[
    {name:"3 ideots", hero:"amir Khan", heroien:"katrina kaif"},
    {name:"Davdass", hero:"SRK Khan", heroien:"oisoria"},
    {name:"Majili", hero:"Bijoy ", hreoien:"Naga Chaitanya"}
  ]
 
  
  return (
    <div>
    <div className="App">
      
      <Myname name="Hasibul Hasan" job="Web Develover"></Myname>
      <Myname name="Abir" job="student"></Myname>
      <Myname name="thehee" job="BCS cadder"></Myname>
  
    </div>
    <ul>
      {
        clients.map(client =><li>{client}</li>)
      }
    </ul>
    <Cinema hero="khan khan" heroien="sokina"></Cinema>

    {/* cinama maping system 2 */}
    {
      cinemas.map(cinama =><Cinema hero={cinama.hero} heroien={cinama.heroien}></Cinema>)
    }


    {/* <div>
      <Goals clients={clients[0]} target="coder" done="10%"></Goals>
      <Goals clients= {clients[1]}target="CA" done="20%"></Goals>
      <Goals clients= {clients[2]}target="BCS" done="30%%"></Goals>
    </div> */}
    
    
    <div>
    <Company></Company>
    </div>
    <div>
    <Header Boos="Hasibul Hasan"></Header>
    </div>
    </div>
  );
 
}

function Myname (props){
  
  return (
  <div className="container">
    <h3> Name : {props.name}</h3>
    <h4> profession: {props.job}</h4>
  </div>
  );
}

function Company(){
  return <div className="identity">
  <small >Titan Tech Developers</small>
  </div>
};

function Goals (props){
  return(
    <div className="aspirant">
      <h5>Goal Name:{props.target} </h5>
      <h6>achive : {props.done}</h6>
    </div>
  )
}
function Cinema(props){
  return(
    <div className="movie">
      <h2>Nayok:{props.hero}</h2>
      <h3>Nykas:{props.heroien}</h3>
    </div>
  )
};
function Header (props){
  return (
    <div>
      <b>{props.Boos}</b>
    </div>
  )
}
export default App;
