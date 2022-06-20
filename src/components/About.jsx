import React from 'react';

function About () {
  return (
    <>
    <h2 className="ourTeam">Our Team</h2>
    <div className="aboutDiv">
      <div className="singlePerson">
        <img style= {{height:"170px"}} src="https://avatars.githubusercontent.com/u/100427748?v=4"></img>
        <h3>Selin Su Varol</h3>
            <h6 style={{fontSize:"24px"}}><a href="mailto:selinsuvarol@gmail.com">e-mail me</a></h6>

            <h6 style={{fontSize:"24px"}}><a href="https://github.com/selinsuvarol?tab=repositories">GitHub</a></h6>
            
            <h6 style={{fontSize:"24px"}}><a href="https://www.linkedin.com/in/selin-su-varol-664936a3/">LinkedIn</a></h6>
        </div>

        <div className="singlePerson">
        <img style= {{height:"170px"}} src="https://avatars.githubusercontent.com/u/11180043?v=4"></img>
        <h3>Kinan Hatahet</h3>
            <h6 style={{fontSize:"24px"}}><a href="mailto:kinan.hatahet@gmail.com">e-mail me</a></h6>

            <h6 style={{fontSize:"24px"}}><a href="https://github.com/Keen91">GitHub</a></h6>
            
            <h6 style={{fontSize:"24px"}}><a href="https://www.linkedin.com/in/kinan-hatahet/">LinkedIn</a></h6>
        </div>

        <div className="singlePerson">
        <img style= {{height:"170px"}} src="https://avatars.githubusercontent.com/u/100930519?v=4"></img>
        <h3>Dilara Katuk</h3>
            <h6 style={{fontSize:"24px"}}><a href="mailto:dilarakatuk@gmail.com">e-mail me</a></h6>

            <h6 style={{fontSize:"24px"}}><a href="https://github.com/DKatuk">GitHub</a></h6>
            
            <h6 style={{fontSize:"24px"}}><a href="https://www.linkedin.com/in/dilara-katuk-0bab56211/">LinkedIn</a></h6>
        </div>
    </div>
    <h2 className="stacksTitle">What did we use ?</h2>
    <div className="stacks">
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>JavaScript</h3>
        <h3>React</h3>
        <h3>MUI</h3>
    </div>
    </>
  );
}

export default About;