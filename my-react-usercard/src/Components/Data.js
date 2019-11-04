import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
      <Card>
        <CardActionArea>
          <img src={this.state.avatar} alt='photo' />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.user}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.id}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.blog}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.location}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default UserCard;
