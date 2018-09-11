import React, { Component } from 'react';
import axios from 'axios';

class Lyrics extends Component {

    state = {
        track: {},
        lyrics: {}
    };

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=c0633d5aaa2b27ace7481b0dbf3da53b`)
        .then(res=> {
            console.log(res.data);
            //this.setState({track_list: res.data.message.body.track_list});
        })
        
        .catch(err=> console.log(err));
    }

  render() {
    return (
      <div>
        <h1>Lyrics</h1>
      </div>
    )
  }
}

export default Lyrics;