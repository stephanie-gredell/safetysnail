import React from "react";

export default class SearchItem extends React.Component {
  addToList(e) {
    e.preventDefault();
  }

  removeFromList(e) {
    e.preventDefault();
  }

  render() {
    const item = this.props.item;
    return(
      <li>
        <a href={"http://www.youtube.com/watch?v=" + item.id.videoId}>{item.snippet.title}></a>
        <button onClick={this.addToList}>Add to list</button>
        <button onClick={this.removeFromList}>Remove from list</button>
      </li>
    );
  }
}
