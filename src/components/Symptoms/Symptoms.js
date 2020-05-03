import React, { Component } from "react";
import { Media } from "reactstrap";
import "./Symptoms.module.css";

//images
import feverImg from "../../assets/fever1.png";
import coughImg from "../../assets/cough1.jpg";
import shortBreathe from "../../assets/Shortnessofbreath.png";

class Symptoms extends Component {
  render() {
    return (
      <>
        <div>
          <center>
            <h1>COVID-19 Coronavirus - Symptoms</h1>
            <p
              style={{
                color: "red",
                fontSize: "15px"
              }}
            >
              <strong>
                Note: COVID-19 affects different people in different ways. 
                Infected people have had a wide range of symptoms reported – 
                from mild symptoms to severe illness.
              </strong>
            </p>
          </center>

          

          <div className="sympt-area">
            <h3>Symptoms of Coronavirus</h3>
            <p>
            Symptoms may appear 2-14 days after exposure to the virus. 
            People with these symptoms or combinations of symptoms may have COVID-19:
              {/* The most common symptoms of COVID-19 are fever, tiredness, and dry
              cough. Some patients may have aches and pains, nasal congestion,
              runny nose, sore throat or diarrhea. */}
            </p>
            <ul>
              <li>Cough</li>
              <li>Shortness of breath or difficulty breathing</li>
            </ul>
            <p>Or at least two of these symptoms:</p>
            <ul>
              <li>Fever</li>
              <li>Chills</li>
              <li>Headache</li>
              <li>Sore throat</li>
              <li>Repeated shaking with chills</li>
              <li>New loss of taste or smell</li>
              <li>Muscle pain</li>
            </ul>
            <p>This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning to you.</p>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <img src={coughImg} alt="Cough Image" />
          </div>

          <div className="column">
            <img src={feverImg} alt="Fever Image" />
          </div>

          <div className="column">
            <img src={shortBreathe} alt="Short Image" />
          </div>
        </div>
      </>
    );
  }
}

export default Symptoms;
