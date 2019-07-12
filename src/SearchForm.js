import React from "react";
import SearchItem from "./SearchItem";
import { UserList } from "./data/dummy"
import './SearchForm.scss'

const credentials = "AIzaSyD_EnKNxkEHKtqp6JxP3n2rC652fb-vDwY";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSubmitted: false,
      items: []
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
    this.setState({searchSubmitted: true});
    const query = this.state.query
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&safeSearch=strict&key=${credentials}&type=video&maxResults=50`)
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

    event.preventDefault();
  }

  onSubmit(event) {
    event.preventDefault();
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
          <SearchItem key={item.id.videoId} item={item}/>
        ))}
        </ul>
        </div>
      }
      </div>
    );
  }
}
