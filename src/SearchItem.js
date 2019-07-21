import React from "react";
import './SearchItem.scss';

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
      <li className="search-item" key={item.id.videoId}>
        <img src={item.snippet.thumbnails.default.url} className="search-item__image" />
        <div className="search-item__title">
          <a href={"http://www.youtube.com/watch?v=" + item.id.videoId} className="search-item__link">{item.snippet.title}</a>
          <button onClick={this.addToList} disabled={item.inUserList}>Add to list</button>
          <button onClick={this.removeFromList} disabled={!item.inUserList}>Remove from list</button>
        </div>
      </li>
    );
  }
}
