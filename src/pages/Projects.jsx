import React from "react";
import p1 from "../assets/p-1.jpeg";
import p2 from "../assets/p-2.jpeg";
import p4 from "../assets/p-4.jpeg";
import p3 from "../assets/p-3.jpeg";
import p5 from "../assets/p-5.jpeg";
import project6 from "../assets/QR-Generator.png";
import project7 from "../assets/BMI.png";

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h3 className="mt-4">
        MY <span>PROJECTS</span>
      </h3>

      <div className="projects">
        <div className="box1">
          <a
            href="https://expese-manager.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={p1} alt="" />
          </a>

          <div className="layer">
            <h4>EXPENSE-MANAGER</h4>
            <p>
              Build on Redux toolkit, MaterialUI for UI, integrated trending
              crypto API using axios.
            </p>
            <a href="https://expese-manager.vercel.app/" target="_blank">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={p2} alt="" />
          <div className="layer">
            <h4>CryptoMania</h4>
            <p>
              Build on React.js, using Bootstrap for UI design, intergrated news
              api using axios.
            </p>
            <a href="https://crypto-mania-app.vercel.app/Login" target="_blank">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={p4} alt="" />
          <div className="layer">
            <h4>react redux CRUD</h4>
            <p>
              Build on React.js, using Bootstrap for UI design, applying CRUD
              functionality.{" "}
            </p>
            <a href="https://crud-operation-gold.vercel.app/" target="_blank">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={p3} alt="" />
          <div className="layer">
            <h4>Feedback APP</h4>
            <p>
              Build using JavaScript, integrated Weather API using fetch method
              to fetch anywhere weather data.
            </p>
            <a
              href="https://feedback-app-zeta-sandy.vercel.app/"
              target="_blank"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={p5} alt="" />
          <div className="layer">
            <h4>Authentication App</h4>
            <p>Build on React Redux, here we can in Authentication App. </p>
            <a
              href="https://authentication-app-react.vercel.app/login"
              target="_blank"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={project6} alt="" />
          <div className="layer">
            <h4>QR Generator</h4>
            <p>
              Build on JavaScript, intergrated QR api using fetch method to
              generate QR for entered URL or text.
            </p>
            <a
              href="https://qr-generator-one-gamma.vercel.app/"
              target="_blank"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="box1">
          <img src={project7} alt="" />
          <div className="layer">
            <h4>BMI Calculator</h4>
            <p>
              Build on JavaScript, here we can calculated our BMI that shows us
              that we are either healthy, overweight, undeweight or obese.
            </p>
            <a
              href="https://bmi-calculator-seven-psi.vercel.app/"
              target="_blank"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
