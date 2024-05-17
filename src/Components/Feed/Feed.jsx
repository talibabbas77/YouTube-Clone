import React, { useEffect, useState } from "react";
import "./Feed.css";
import thumbnail from "../../Assets/thumbnail.jpg";
import thumbnail1 from "../../Assets/thumbnail1.jpg";
import thumbnail2 from "../../Assets/thumbnail2.jpg";
import thumbnail3 from "../../Assets/thumbnail3.jpg";
import { Link } from "react-router-dom";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=50&regionCode=PK&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_URL)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {valueConverter(item.statistics.viewCount)} views &bull;&nbsp;
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
