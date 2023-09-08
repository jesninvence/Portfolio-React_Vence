import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "./images/wallpaper1.jpg";
import NavigationBar from "./compontents/NavigationBar";
import cardImg1 from "./images/animation1.gif";
import cardImg2 from "./images/aboutme.gif";
import Services from "./compontents/Services";
import Contact from "./compontents/Contact";
import Footer from "./compontents/Footer";

function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <div className="header" id="home">
      <img src={profilePic} alt="" width="100%" className="wallPaper"></img>
      <div className="hello">
        <h1>Hello I'm Jesnin Vence</h1>
        <h1 className="web">Front End Developer</h1>
        <p>Lorem ipsum dolor sit amet. Et autem reiciendis aut repellat <br></br> excepturi 33 similique neque eum facilis eveniet. </p>
        <br></br>
        <button className="resume">RESUME</button>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <div className="mySkill">
      <div className="skill bg-black">
        <h2 className="text-center text-white" id="skills">My Skills</h2>
        <p className="quotes text-center">I design and develop experiences that make people's lives simple.</p>
        <br/><br/>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="card">
                <div className="card-img">
                  <img src={cardImg1} alt="" width="100%"></img>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="text-white">
                <li>Markup and web languages such as HTML, CSS and Javascript</li>
                <li>Asynchronous requests and Ajax</li>
                <li>Specialized web editing software</li>
                <li>Image editing</li>
                <li>Accessibility</li>
                <li>Cross-browser issues</li>
                <li>Search engine optimisation</li>
              </div>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </div>
    <div className="aboutMe">
      <div className="about bg-black">
        <h2 className="text-center text-white" id="about">About Me</h2>
        <p className="quotes text-center">Lorem ipsum dolor sit amet. Et autem reiciendis aut repellat excepturi</p>
        <br/><br/>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="text-white">
                <br/>
                <p className="text-center">I have been involved in Web Design and Web Development Work for 3 months now. I have Completed
                  my Web Development Journey with all types of clients from SMEs to huge Multinationals. I converted to the site,
                  Many people were happy with my work and gave me nice feedback.
                </p>
                <br/>
                <p className="text-center">I have been involved in Web Design and Web Development Work for 3 months now. I have Completed
                  my Web Development Journey with all types of clients from SMEs to huge Multinationals. I converted to the site,
                  Many people were happy with my work and gave me nice feedback.
                </p>
              </div>
            </div>
            <div className="col-5">
              <div className="card">
                <div className="card-img">
                  <img src={cardImg2} alt="" width="100%"></img>
                </div>
              </div>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </div>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
