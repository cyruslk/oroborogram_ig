import React, {useState} from "react";

import './App.css';

function Post(props){

  console.log(props);

  const {
    caption,
    thumbnail,
    comments,
    likes,
    timestamp
  } = props.postData

  return(
    <div className="iphone-posts">
      <header>
          <img src={props.pic} />
          <p>{props.name}</p>
          <i className="header-more fas fa-ellipsis-v" />
      </header>
      <main>
        <img src={thumbnail} />
      </main>
      <div className="likes">
        <div className="left-icons">
        <img src="https://image.flaticon.com/icons/svg/25/25424.svg" width="6%"/>
        <img src="https://image.flaticon.com/icons/svg/54/54916.svg" width="6%"/>
        <img src="https://image.flaticon.com/icons/svg/126/126536.svg" width="6%"/>
        </div>
        <img src="https://image.flaticon.com/icons/svg/25/25667.svg" width="5%"/>
      </div>
      <section className="caption">
         {caption}
      </section>
    </div>
  )
}

export default Post;
