import React from 'react';
import './App.css';
import Webcam from "react-webcam";

const videoConstraints = {
    width: 300,
    height: 240,
    facingMode: "user"
};


const application = document.querySelector('#root');
const LiveSectionsCollection = application.getElementsByTagName('section');
console.log(LiveSectionsCollection);


function App() {
    const liveSectionsArray = Array.from(LiveSectionsCollection);
    console.log(liveSectionsArray);

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            document.getElementById('screen').src = imageSrc;
        },
        [webcamRef]
    );

    return (
        <div className="App">
            <section id="main__page">
                <img src="https://place-hold.it/300" alt=""></img>
                <nav>
                    <button id="open__camera">Open camera</button>
                    <button id="clear__history" disabled>Clear history</button>
                </nav>
            </section>
            <section id="camera__page" hidden>
                <div className="wrapper">
                    <div className="video">
                        <Webcam
                            audio={false}
                            height={240}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={320}
                            videoConstraints={videoConstraints}
                        />
                    </div>
                    <div className="overlay">
                        <img src="https://i.imgur.com/A9J4iWz.png" alt=""/>
                    </div>
                </div>
                <br/>
                <button onClick={capture}>Capture photo</button>
            </section>

            <section id="history__block" hidden>
               <h3>History</h3>
                <img id="screen" alt=""></img>
            </section>
    </div>
);
}

export default App;