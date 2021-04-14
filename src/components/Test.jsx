import React from 'react'

export default function Test() {

              return (

<div id="code-by-arpit">
  <nav>
    <div className="candidate-det-sec">
      <div className="candidate-info">
        <table>
          <tbody>
            <tr>
              <td><strong>Candidate Name</strong></td>
              <td>:</td>
              <td className="green">[user.Name]</td>
            </tr>
            <tr>
              <td><strong>Subject</strong></td>
              <td>:</td>
              <td className="green">[sub.name]</td>
            </tr>
            <tr>
              <td><strong>Exam</strong></td>
              <td>:</td>
              <td className="green">[Exam.name]</td>
            </tr>
            <tr>
              <td><strong>Remaining Time</strong></td>
              <td>:</td>
              <td className="green rem-time-bor">[rem.time]</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="exam-lang-choose">
        <select name="lang-sel" id="lang-sel-dropdown">
          <option value="eng">English</option>
          <option value="hin">Hindi</option>
        </select>
      </div>
    </div>
  </nav>
  <section>
    <div className id="body-cont-que" />
    {/* section contained all the questions pallet  */}
  </section>
  <footer>
    <p>© All Rights Reserved · <a href="#"> LNCT SPEED CODERS</a></p>
  </footer>
</div>
);
        
}
