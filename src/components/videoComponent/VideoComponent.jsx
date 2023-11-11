import React, { useState} from 'react';

const PublishingComponent = () => {
    const [currentTime, setCurrentTime] = useState(0)
    const [videoSrc, setVideoSrc] = useState();
    function updateFrameTime() {
        // setCurrentTime(new Date().toLocaleTimeString());
    }


    // Обработка ошибок при загрузке видео
    function handleVideoError() {
        console.error("Error loading video");
        alert("Error loading video. Please try again later.");
    }
    // Обработка события завершения загрузки кадра
    function handleFrameLoaded() {
        updateFrameTime();
        // Загрузка следующего кадра
        setTimeout(function() {
            document.getElementById("videoPlayer").src = 'http://localhost:5000/video_feed?' + new Date().getTime();
        }, 1000); // Set a delay of 1 second before loading the next frame
    }

    // Запуск загрузки первого кадра
    handleFrameLoaded();
    return (
        <div>
            <img id="videoPlayer" width="640" height="480" onError={handleVideoError} onLoad={handleFrameLoaded} alt={""}/>
                <span id="frameTime">{currentTime}</span>
        </div>

    );
};

export default PublishingComponent;
