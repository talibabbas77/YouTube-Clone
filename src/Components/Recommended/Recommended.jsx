import React, { useEffect, useState } from "react";
import "./Recommended.css";
import thumbnail from "../../Assets/thumbnail.jpg";
import thumbnail1 from "../../Assets/thumbnail1.jpg";
import thumbnail2 from "../../Assets/thumbnail2.jpg";
import thumbnail3 from "../../Assets/thumbnail3.jpg";
import thumbnail4 from "../../Assets/thumbnail4.jpg";
import thumbnail5 from "../../Assets/thumbnail5.jpg";
import { API_KEY, valueConverter } from "../../data";
import { Link } from "react-router-dom";
import moment from "moment";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=45&regionCode=PK&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>
                {valueConverter(item.statistics.viewCount)} views &bull; &nbsp;
                {moment(item.snippet.publishedAt).fromNow()}{" "}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
