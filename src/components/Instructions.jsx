import React from 'react'

export default function Instructions() {
    return (

        <div>
          <div className="head" id="head">
            <div className="home" id="home">
              <img src="img\profile.jpg" />
              <a href="home" action="home.html"> Home</a>
            </div>
          </div>
          <p id="nta-logo" className="nta-logo">
            <img src="img\NTA_logo.png" align="left" />
          </p>
          <p className="mhrd" id="mhrd">
            <img src="img\mhrd.png" />
          </p>
          <div className="general-all">
            <img src="img\general.jpg" />
            <h2><p className="general">GENERAL INFORMATION</p></h2>
            <div className="language" id="language">
              <p className="choose">Choose your default language
              </p><form className="language" name="language">
                <select id="lang" name="lang">
                  <option value="english">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Gujrati">Gujrati</option>
                </select>	
              </form></div>
            <p />
          </div>
          {/*  INSTRUCTIONS */}
          <b><h2><p className="read_ins">Please read the instructions carefully</p></h2></b>
          <h3><p className="gen_ins">General Instructions:</p></h3>
          {/*  POINTS */}
          <div className="points1">
            <ol type={1} className="points">
              <li>Total time duration of JEE-main paper is 180 mins.</li>
              <li>The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
              <li>The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols:
                <div className="sub_points">
                  <ol>
                    <li>
                      <img src="img\check.png" />   You have not visited the question yet.
                    </li>
                    <br />
                    <li>
                      <img src="img\unanswered.png" />   You have not answered the question.
                    </li>
                    <br />
                    <li>
                      <img src="img\answered.png" />   You have asnwered the question.
                    </li>
                    <br />
                    <li>
                      <img src="img\marked_review.png" />   You have NOT answered the question but have marked the question for review.
                    </li>
                    <br />
                    <li>
                      <img src="img\unmarked_review.png" />   The question(s) "Answered and Marked for Review" will be considered for evaluation.
                    </li>
                  </ol>
                </div>
              </li>
              <br /><br />
              <li>You can click on the "&gt;" arrow which apperes to the left of question palette to collapse the question palette thereby maximizing the question window. To view the question palette again, you can click on "&lt;" which appears on the right side of question window.</li>
              <li>You can click on your "Profile" image on top right corner of your screen to change the language during the exam for entire question paper. On clicking of Profile image you will get a drop-down to change the question content to the desired language.</li>
              <li>You can click on <img src="img\down.png" /> to navigate to the bottom and <img src="img\up.png" /> to navigate to top of questionsare, without scrolling.</li>
              <b><p className="navigate">Navigating to a Question:</p></b>
              <li>To answer a question, do the following:
                <ol type="a">
                  <li>Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.</li>
                  <li>Click on Save &amp; Next to save your answer for the current question and then go to the next question.</li>
                  <li>Click on Mark for Review &amp; Next to save your answer for the current question, mark it for review, and then go to the next question.</li>
                </ol>	
              </li>
              <b><p className="to_answer">Answering a Question:</p></b>
              <li>Procedure for answering a multiple choice type question:
                <ol type="a">
                  <li>To select you answer, click on the button of one of the options.</li>
                  <li>To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button</li>
                  <li>To change your chosen answer, click on the button of another option</li>
                  <li>To save your answer, you MUST click on the Save &amp; Next button.</li>
                  <li>To mark the question for review, click on the Mark for Review &amp; Next button.</li>
                </ol>
              </li>
              <li>To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</li>
              <b><p className="navi_sec"> Navigating through sections:</p></b>
              <li>Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by click on the section name. The section you are currently viewing is highlighted.</li>
              <li>After click the Save &amp; Next button on the last question for a section, you will automatically be taken to the first question of the next section.</li>
              <li>You can shuffle between sections and questions anything during the examination as per your convenience only during the time stipulated.</li>
              <li>Candidate can view the corresponding section summery as part of the legend that appears in every section above the question palette.</li>
            </ol>
            <br /><hr className="line" />
            <p className="red_text">Please note all questions will appear in your default language. This language can be changed for a particular question later on.</p>
            <hr className="line" /><br />
            <input type="checkbox" name="check_box" required />  I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations
            <br /><br /><hr className="line" /><br />
          </div>
          <div className="proceed">
            <input type="button" name="proceed" defaultValue="PROCEED" />
          </div>
          <div className="foot">
            <p className="foot" /><p className="text_foot">This is a clone website of nta.ac.in</p><p />
          </div>
        </div>
      );
}
