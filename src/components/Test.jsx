import { Box, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useState } from 'react';
import Footer from './Footer';
import questionData from "./question";
import Header from "./Header";




export default function Test(props) {
  let [question, setQuestion] = useState(0);
  let [result, setResult] = useState(false);
  let [score,setScore] = useState(0);
  let styles = {
    margin : "2%"
  }

  function handleChange(event){
    let option = (event.target.innerText);
    console.log(option);
    if(option === questionData[question].correctoption){
      setScore(prev => prev+1);
    }
    if(question < questionData.length-1){
      setQuestion(prev => prev+1);
    }else{
      setResult(true);
    }
    
  }

              return (

<div id="code-by-arpit">
<Header />
  <nav>
    <div className="candidate-det-sec">
      <div className="candidate-info">
        <table>
          <tbody>
            <tr>
              <td><strong>Candidate Name</strong></td>
              <td>:</td>
              <td className="green">{props.name}</td>
            </tr>
            {/* <tr>
              <td><strong>Subject</strong></td>
              <td>:</td>
              <td className="green">[sub.name]</td>
            </tr> */}
            <tr>
              <td><strong>Exam</strong></td>
              <td>:</td>
              <td className="green">HTML</td>
            </tr>
            {/* <tr>
              <td><strong>Remaining Time</strong></td>
              <td>:</td>
              <td className="green rem-time-bor">[rem.time]</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      
    </div>
  </nav>
  <section>
    <div className id="body-cont-que">
    <Box display="flex" flexGrow={1} alignSelf="center" flexDirection="column" style={{width: "100wv" , height:"500px" }}>
   {result ? <Box display="flex" alignItems="center" alignSelf="center" style={{width:"80vw" , height:"300px" ,backgroundColor:"yellow" }}>
      <h1 alignSelf="center">Your Score is : {score}/{questionData.length}</h1>
      </Box>: <div>
    <Box display="flex" alignSelf="center" style={{width:"80vw" , height:"300px" ,backgroundImage: `url(${questionData[question].imgUrl})` }}>
      
    </Box>
    <Box display="flex" flexDirection="row" alignSelf="center">
    <Button onClick={handleChange}  style={styles} variant="contained" color="primary">
 Option A
</Button>
<Button onClick={handleChange}  style={styles} variant="contained" color="primary">
  Option B
</Button>
<Button onClick={handleChange}  style={styles} variant="contained" color="primary">
  Option C
</Button>
<Button onClick={handleChange}  style={styles} variant="contained" color="primary">
  Option D
</Button>
    </Box>
    </div>}
   
</Box>

    </div>
   
    
  </section>
 <Footer />
</div>
);
        
}
