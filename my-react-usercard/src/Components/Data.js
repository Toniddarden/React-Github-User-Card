import React from "react";
import ReactDOM from "react-dom";
import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://api.github.com/users/toniddarden/followers'
});


export default instance;

// class Data extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       user: [],
//       followers: []
//     };
//   }

  

//   componentDidMount = () => {
//     fetch(`https://api.github.com/users/toniddarden`)
//       .then(res => res.json())
//       .then(res => {
//         console.log("td: CDM: fetch: then: res: ", res);
//         this.setState({
//           user: res.login
//         });
//       })
//       .catch(err => {
//         console.log("td: catch: err", err);
//       });
//   }
// //cpdidupdate
//   followersData = () => {
//       fetch(`https://api.github.com/users/toniddarden/followers`)
//       .then(data => {
//           console.log('td: followers data: ', data);
//           this.setState({
//               followers: data.data
//           })
//       })
//       .catch(err => {
//         console.log("td: catch-followers: err", err);
//       });
//   }


//   render() {
//     return <div>
//         <h2>{this.state.user}</h2>
//     </div>;
//   }
// }

// export default Data;
