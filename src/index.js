// Determines time and month

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     lat: null, // Starting message while position data from API is returned
  //     err: ""
  //   };
  // }

  // Alternate state initialization
  state = { lat: null, err: "" }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ err: err.message })
    );
  }

  renderContent() {
    if(this.state.err && !this.state.lat) {
      return <div>Error: {this.state.err} </div>
    }
    if(!this.state.errorMessage && this.state.lat){
      return <div><SeasonDisplay lat={ this.state.lat}/></div>
    }

    return <LoadingSpinner message="Loading..." />;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
