import { useState, useEffect } from "react";
import "./YouTubeVideos.css";

function YouTubeVideos() {
  const [YouTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAk00FFbEF89ln7ZbdZjVrPU4LswIjuKkc"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setYouTubeVideos(data.items);
      });
  }, []);

  // console.log(YouTubeVideos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              <br />
              <h1>Latest Videos</h1>
              <br />
            </div>
          </div>
          {YouTubeVideos?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt={singleVideo.snippet.title}
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideos;
