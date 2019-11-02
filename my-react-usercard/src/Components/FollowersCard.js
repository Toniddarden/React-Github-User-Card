import React from "react";
import Data from "./Data";
import Axios from "axios";

class FollowersCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    };
  }

  getFollowersData() {
      Axios
        .get(`https://api.github.com/users/toniddarden/followers`, {})
        .then(res => {
            const data = res.data
            console.log('data', data)
            this.state.followers = data.map(friend => 
                <div>
                    <p>{friend.login}</p>
                    <p>{friend.id}</p>
                    {friend.repos_url}
                </div>
                )
                this.setState({
                     data
                })
        })
        .catch((err) => {
            console.log(err)
        })
  }

  componentDidMount(){
      this.getFollowersData()
  }
  render(){
      return (
          <div>{this.state.followers}</div>
      )
  }
}

export default FollowersCard;
