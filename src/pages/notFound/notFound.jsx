import React from "react";
import "./notFound.css";


class notFound extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className="not-found-info">
            <img src="https://media.giphy.com/media/j9XoexYMmd7LdntEK4/giphy.gif" alt="not found very sad"/>
        </div>
        <div className="not-found-info">
            <p className="not-found">The page you were looking for doesn't seem to exist :(</p>
        </div>

      </React.Fragment>
    );
  }
}

export default notFound;