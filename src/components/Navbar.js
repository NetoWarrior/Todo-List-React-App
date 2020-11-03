import React, { Component } from 'react';
import axios from 'axios';

export default class Navbar extends Component {
    state = {
        profileImage:""
    }

    componentDidMount() {
        const rNumber = Math.floor(Math.random() * Math.floor(1000))
        axios.get(`https://picsum.photos/id/`+ rNumber + `/info`)
          .then(res => {
            const image = res.data;
            console.log(image);
            this.setState({profileImage:image.download_url});
            console.log(this.state)
          })
      }

    render() {
        return (
            <div className="navbar" >
                <h1>TaskBoard</h1>
                <div class="profile">
                <img src={this.state.profileImage} alt="profile" />
                </div>
                
            </div>
        )
    }
}


