import React from "react";
import Axios from "axios";

class FollowersCard extends React.Component {
  state = {
    followers: []
  };

  componentDidMount = () => {
    Axios.get(`https://api.github.com/users/toniddarden/followers`).then(
      res => {
        console.log("found fllrs: ", res.data);
        this.setState({
          followers: res.data
        });
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.followers.map(friend => (
          <div>
            <p>
              <img src={friend.avatar_url} />
            </p>
            {friend.login}
            {friend.id}
          </div>
        ))}
      </div>
    );
  }
}

export default FollowersCard;
