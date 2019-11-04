import React from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});


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
        <Card className={useStyles}>
        <CardActionArea>
          <img src={friend.avatar_url} alt='photo' />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {friend.login}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ID: {friend.id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

        ))}
      </div>
    );
  }
}

export default FollowersCard;
