import { useEffect, useRef } from "react";
import VideoPlayerProps from "../Types/VideoPlayerProps";
import FlvJs from "flv.js";

const VideoPlayer : React.FC<VideoPlayerProps> = ({src}) => {

    const videoref = useRef<HTMLVideoElement>(null);

    useEffect(() =>{
        let flvPLayer;

        if(FlvJs.isSupported()){
            flvPLayer = FlvJs.createPlayer({
                type : 'flv',
                url : src
            });
            flvPLayer.attachMediaElement(videoref.current!);
            flvPLayer.load();
            flvPLayer.play();
        }




    }, [src]);


    return (
        <>
        <video ref={videoref}
         controls
         style={{width : '500px', height: '500px'}}
          />
        </>
    )
}

export default VideoPlayer;