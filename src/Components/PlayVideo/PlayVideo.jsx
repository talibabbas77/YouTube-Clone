import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video from "../../Assets/video.mp4";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
import { GiLobArrow } from "react-icons/gi";
import user_profile from "../../Assets/user_profile.png";
import profile1 from "../../Assets/profile1.png";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  //
  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };
  //
  const fetchOtherData = async () => {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
    //
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&part=replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);
  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      {/* <video src={video} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? valueConverter(apiData.statistics.viewCount) : "16K"} views
          &bull; &nbsp;
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <SlLike /> &nbsp;{" "}
            {apiData ? valueConverter(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <SlDislike /> &nbsp;
          </span>
          <span>
            <PiShareFat /> &nbsp; Share
          </span>
          <span>
            <GiLobArrow /> &nbsp; Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel Title here"}</p>
          <span>
            {channelData
              ? valueConverter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description here"}
        </p>
        <p>Subscribe to framuzs</p>
        <hr />
        <h4>
          {apiData ? valueConverter(apiData.statistics.commentCount) : 102}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <span>
                    <SlLike />{" "}
                    {valueConverter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <span>
                    <SlDislike />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
