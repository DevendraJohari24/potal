import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Uni from "./img/uni.jpg";
import Sch from "./img/school.jpg";
import {Link} from 'react-router-dom';
import cbse1 from "./img/cbse1.jpg";
import cbse2 from "./img/cbse2.jpg";


class Res extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <div class="font_changer">
     <h1>Resources</h1>
    </div>

     <div class="row">
      <div class="col s12 m5">
       <Link to="/uni">
            <div class="card">
       <div class="card-image">
         <img src={Uni}/>
       </div>
       <div class="card-content">
         <p>This section contains all the free resouces from the youtube as well as other resouces contributed by University Students and Teachers.</p>
       </div>
       <div class="card-action">
         <Link to="/uni">Get Started</Link>
       </div>
     </div>
     </Link>
   </div>

  <div class="col s12 m5">
        <div class="card">
        <Link to="/school">
   <div class="card-image">
     <img src={Sch}/>
   </div>
   <div class="card-content">
   <p>This section contains all the free resouces from the youtube as well as other resouces contributed by other School Students and Teachers.</p>
   </div>
   <div class="card-action">
     <Link to="/school">Get Started</Link>
   </div>
   </Link>
 </div>



</div>
</div>

     <div class="row">
      <div class="col s12 m5">
       <Link to="/cbse12">
            <div class="card">
       <div class="card-image">
         <img src={cbse1}/>
       </div>
       <div class="card-content">
         <p>This section contains all the free resouces from the youtube as well as other resouces contributed by University Students and Teachers.</p>
       </div>
       <div class="card-action">
         <Link to="/cbse12">Get Started</Link>
       </div>
     </div>
     </Link>
   </div>

  <div class="col s12 m5">
        <div class="card">
        <Link to="/cbse10">
   <div class="card-image">
     <img src={cbse2}/>
   </div>
   <div class="card-content">
   <p>This section contains all the free resouces from the youtube as well as other resouces contributed by other School Students and Teachers.</p>
   </div>
   <div class="card-action">
     <Link to="/cbse10">Get Started</Link>
   </div>
   </Link>
 </div>



</div>
</div>












    </div>
  );
}
}

export default Res;
