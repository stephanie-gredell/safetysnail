import React from "react";
import SearchItem from "./SearchItem";
import { UserList } from "./dummy"

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
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&safeSearch=strict&key=${credentials}`)
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

  render() {
    return (
      <div id="Search">
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <input type="text" placeholder="Search Youtube for video" name="query"/>
      <input type="submit" value="Submit" />
      </form>
      {this.state.searchSubmitted &&
        <div id="results">
        <ul>
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
