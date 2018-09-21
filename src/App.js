import React, { Component } from 'react';
import logo from './itsme.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
                 <div class="ct" id="t1">
        <div class="ct" id="t2">
          <div class="ct" id="t3">
            <div class="ct" id="t4">
            <div class="ct" id="t5">
            <ul id="menu">
            <span class="thatElement-me">

              <u class="my-name">L.S.Khan</u>
              </span>
                <a href="#t1"><li class="icon fa fa-home" id="uno"></li></a>
                <a href="#t2"><li class="icon fa fa-paint-brush" id="dos"></li></a>
                <a href="#t3"><li class="icon fa fa-code" id="tres"></li></a>
                <a href="#t4"><li class="icon fa fa-briefcase" id="cuatro"></li></a>
                <a href="#t5"><li class="icon fa fa-code-fork" id="cinco"></li></a>
              </ul>
              <div class="page" id="p1">
                 <section class="icon">
                   <span class="title">
                   <span class="block font-family">I am a Software Engineer</span>
                   <span class="extra"></span>
                     <div class="mp-me">
                     <img src={logo} alt="" srcset=""/>
                     </div>
                     </span>
                   <span class="hint">This Section Will Explain me<br/>
                   My BioGraphy My Achivement My Goals My Plans</span>
                  </section>  
              </div>
              <div class="page" id="p2">
                <section class="icon"><span class="title">This Page will Contain all my Stuff realted to designing</span></section>
              </div> 
              <div class="page" id="p3">
                <section class="icon"><span class="title">This Page will contain all my Stuff Related to Coding</span></section>
              </div>
              <div class="page" id="p4">
                <section class="icon">
                  <span class="title">My Stack of Work</span>      
                </section>
              </div> 
              <div class="page" id="p5">
                <section class="icon">
                  <span class="title">My Repositories and There Descriptions</span>
               
                </section>
                </div> 
              </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
