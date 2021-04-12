import react, {useState} from "react";
import Post from "./Post";
import './App.css';

function App(){

  const [query, setQuery] = useState("");
  const [posts, setReceivedPosts] = useState("")


    let handleSubmit = async e => {
      e.preventDefault();
      const response = await fetch('/api/hashtag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ posts: query }),
      });
      const body = await response.json();
      setReceivedPosts(body)
    };

  let handleView = () => {
    if(!posts.data){
      return (
        <section className="iphone-container">
          <section className="form-container">
              <form onSubmit={handleSubmit}>
                <p>Select Hashtag</p>
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <button
                  type="submit">
                    Submit
                  </button>
              </form>
          </section>
        </section>
      )
    }else{
      const {followers, following, bio, name, pic} = posts.data;
      let renderPosts = posts.data.lastPosts
      .map((ele, index) => {
        return (
          <Post
            postData={ele}
            followers={followers}
            following={following}
            bio={bio}
            name={name}
            pic={pic}
          />
        )
      })
      return(
        <section className="iphone-container">
          {renderPosts}
        </section>
      )
    }
  }

  return(
    <div className="App">
      <main>
          <div className="iphone-x window">
          <div className="header">
            <img src="https://image.flaticon.com/icons/svg/25/25315.svg" width="8%"/>
            <span className="logo">Oroborogram</span>
            <img src="https://image.flaticon.com/icons/svg/20/20402.svg" width="8%"/>
          </div>
              {handleView()}
            <div className="footer">
              <img src="https://image.flaticon.com/icons/svg/20/20176.svg" width="8%"/>
              <img src="https://image.flaticon.com/icons/svg/149/149852.svg" width="8%"/>
              <img src="https://image.flaticon.com/icons/svg/25/25668.svg" width="8%"/>
              <img src="https://image.flaticon.com/icons/svg/60/60993.svg" width="8%"/>
              <img src="https://image.flaticon.com/icons/svg/64/64096.svg" width="8%"/>
            </div>
          </div>
      </main>
    </div>
  )
}

export default App;
