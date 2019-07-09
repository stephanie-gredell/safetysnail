import React from "react";
import SearchItem from "./SearchItem";

const credentials = "AIzaSyD_EnKNxkEHKtqp6JxP3n2rC652fb-vDwY";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSubmitted: false,
      items: []
    };

    this.userList = [
      {
         "kind": "youtube#searchResult",
         "etag": "\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/04h986ulLdDeQJxdLJA2VCXC798\"",
         "id": {
          "kind": "youtube#video",
          "videoId": "56SixOy1yNw"
         },
         "snippet": {
          "publishedAt": "2019-07-06T13:00:00.000Z",
          "channelId": "UCAOtE1V7Ots4DjM8JLlrYgg",
          "title": "Peppa Pig Official Channel 🔴 Peppa Pig&#39;s Best Friend Suzy Sheep Goes Away",
          "description": "Peppa Pig Official Channel Peppa Pig's Best Friend Suzy Sheep Goes Away | Peppa Pig English Episodes ☆ Subscribe for more videos: ...",
          "thumbnails": {
           "default": {
            "url": "https://i.ytimg.com/vi/56SixOy1yNw/default.jpg",
            "width": 120,
            "height": 90
           },
           "medium": {
            "url": "https://i.ytimg.com/vi/56SixOy1yNw/mqdefault.jpg",
            "width": 320,
            "height": 180
           },
           "high": {
            "url": "https://i.ytimg.com/vi/56SixOy1yNw/hqdefault.jpg",
            "width": 480,
            "height": 360
           }
          },
          "channelTitle": "Peppa Pig - Official Channel",
          "liveBroadcastContent": "none"
         }
        },
    ]

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  filterResult(userList, videoId) {

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
          var items = result.items.map(resultItem => {
            var found = this.userList.some(userItem => {
              return userItem.id.videoId == resultItem.id.videoId
            });

            if (found) {
              resultItem.inUserList = true;
            }

            return resultItem;
          })

console.log(items);
          //todo: given a list of user selected videos, handle state on search results
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
