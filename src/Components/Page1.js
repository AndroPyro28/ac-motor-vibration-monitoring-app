import React from 'react';
import "../Styles/main.css"


function Page1() {
  return (
    <div className="background">
    <div className="page1">
      <div className="description">
        
        <div className="feature">
        <h2>Features</h2>
        <img src="https://mbondpumps.co.za/wp-content/uploads/2023/06/motor-m-bond-pumps-how-it-works-3.gif" alt="3D Model GIF" className="feature-gif" />
            <div className="feature-description">
          <h3>3D Model</h3>
          <p>Is the process of creating three-dimensional representations of an object or a surface. 
            3D models are made within computer-based 3D modelling software, which we’ll explore a 
            little later. During the 3D modelling process, you can determine an object’s size, shape,
             and texture. The process works with points, lines, and polygons to create the 3D shapes 
             within the software..</p>
        </div>
        </div>
        <div className="feature">
        <img src="https://www.cloudzero.com/wp-content/uploads/2023/10/aws-cost-anomaly.webp" alt="Anomaly img" className="feature-gif" />
          <h3>Anomaly Detection</h3>
          <p>Is the process of identifying deviations from expected behavior or patterns. In the 
            context of electric motor-driven applications, anomalies can manifest as a sudden change 
            in operating conditions, such as abnormal vibrations, temperature spikes, or power 
            consumption. These changes can indicate the presence of underlying problems, such as 
            worn-out bearings or faulty wiring, which, if not addressed, can lead to more severe 
            damage or even motor failure</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Page1