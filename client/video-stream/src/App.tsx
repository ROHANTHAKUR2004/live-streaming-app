
import './App.css';
import VideoPlayer from './components/VideoPLayer';

function App() {
  return (
    <div className="app">
      <div className="app-header">
       LIVE STREAMING APP
      </div>
      <div className="video-container">
        <VideoPlayer  
          src={"http://localhost:8080/live/test.flv"}
        />
      </div>
    </div>
  );
}

export default App;
