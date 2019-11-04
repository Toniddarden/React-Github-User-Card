import React from "react";

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount = () => {
    fetch(`https://api.github.com/users/toniddarden`)
      .then(res => res.json())
      .then(res => {
        console.log("td: CDM: fetch: then: res: ", res);
        this.setState({
          user: res.login,
          id: res.id,
          blog: res.blog,
          location: res.location,
          avatar: res.avatar_url
        });
      })
      .catch(err => {
        console.log("td: catch: err", err);
      });
  };

  render() {
    return (
      <div>
        <p>
          <img src={this.state.avatar} />
        </p>
        {this.state.user}
        {this.state.id}
        {this.state.blog}
        {this.state.location}
      </div>
    );
  }
}

export default UserCard;
