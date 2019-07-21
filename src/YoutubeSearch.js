import React from "react";
import { UserList } from "./data/dummy"
import './SearchForm.scss'
import './SearchItem.scss'

const credentials = "AIzaSyD_EnKNxkEHKtqp6JxP3n2rC652fb-vDwY";

export default class YoutubeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSubmitted: false,
      items: [],
      nextPageToken: "",
      prevPageToken: ""
    };

    //this should be auto-populated
    this.userList = UserList
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({"searchSubmitted": true})
    const query = this.state.query
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&safeSearch=strict&key=${credentials}&type=video&maxResults=50&pageToken=${this.state.nextPageToken}`)
    .then(res => res.json())
    .then(
      (result) => {

        //check if videos are in user list and add a property to indicate
        let items = result.items.map(resultItem => {
          let found = this.userList.some(userItem => {
            return userItem.id.videoId === resultItem.id.videoId
          });

          if (found) {
            resultItem.inUserList = true;
          }

          return resultItem;
        });

        this.setState({
          items: items
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )

  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="search__form">
          <input type="text" placeholder="Search Youtube for video" name="query" className="search__input" required />
          <input type="submit" value="Submit" className="search__button" />
        </form>

        {this.state.searchSubmitted &&
          <div className="search__results">
          <ul className="search__results-list">
          {this.state.items.map(item => (
            <li className="search-item" key={item.id.videoId}>
              <img src={item.snippet.thumbnails.default.url} className="search-item__image" alt={item.snippet.title} />
              <div className="search-item__content">
                <a href={"http://www.youtube.com/watch?v=" + item.id.videoId} className="search-item__link">{item.snippet.title}</a>
                <div className="search-item__list-buttons">
                {!item.inUserList &&
                  <button onClick={this.addToList}>Add to list</button> }

                {item.inUserList &&
                  <button onClick={this.removeFromList}>Remove from list</button>}
                </div>
              </div>
            </li>
          ))}
          </ul>
          </div>
        }
      </div>


    );
  }
}
