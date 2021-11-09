import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    // {title, description} = this.props
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://gumlet.assettype.com/bloombergquint%2F2018-08%2F3a8e2237-2edb-4494-bcf2-231993fb6108%2FBLOOMBERG_LOGO.png?rect=0%2C56%2C1920%2C1008&w=1200&auto=format%2Ccompress&ogImage=true"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
