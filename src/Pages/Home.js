import React, {Suspense} from "react";
import "../Styles/home.css";
import logoImage from "../Components/logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faBell,
  faHistory,
  faInfoCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader"
import {Model} from "../Components/Model"
function Home() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("acmotor-user");
    navigate("/");
  };
  return (
    <div className="App">
      <div className="navbar">
        <h3>
          <img src={logoImage} alt="Logo" className="logo-img1" />
        </h3>
        <nav>
          <ul>
            <div className="mid">
              <li>
                <FontAwesomeIcon icon={faChartBar} />
                <a href="#">Overview</a>
              </li>

              <li></li>
              <li>
                <FontAwesomeIcon icon={faBell} />
                <a href="#">Alerts</a>
              </li>
              <li></li>
              <li>
                <FontAwesomeIcon icon={faHistory} />
                <a href="#">History</a>
              </li>
            </div>
            <li>
              <div className="bottom">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <a href="#">About</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <a href="#">Get Help</a>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      style={{
                        backgroundColor: "#29335c",
                        color: "white",
                        marginTop: "10px",
                        marginLeft: "10px",
                        width: "70px",
                      }}
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="content"> */}
      <Canvas
      frameloop="demand"
      shadows
      className="cursor-grab active:cursor-grabbing"
      camera={{ position: [20, 3, -400], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={true}
        maxPolarAngle={Math.PI / 2 }
        minPolarAngle={Math.PI / 2 }
        />
        <Model />
      </Suspense>
      <ambientLight intensity={0.100} />
      <directionalLight position={[10, 5, 0]} />
      <directionalLight position={[-10, 5, 0]} />
      <directionalLight position={[10, -5, 0]} />
    </Canvas>
    {/* </div> */}
       
    </div>
  );
}


export default Home;
