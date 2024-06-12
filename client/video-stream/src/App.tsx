
import './App.css';
import VideoPlayer from './components/VideoPLayer';

function App() {
  return (
    <>
     LIVE STREAM
     <br />
     <VideoPlayer  
     src={
      "http://localhost:8080/live/test.flv"
     }
     
     />
     </>
  );
}

export default App;
