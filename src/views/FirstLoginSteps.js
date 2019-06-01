import Geocode from "react-geocode";
import React from 'react';
import Modal from 'react-responsive-modal';
import {geolocated} from 'react-geolocated';

class FirstLoginSteps extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            open: false,
            count: 1,
        };

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("apikey");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();
 
// // Get address from latidude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   response => {
//     const address = response.results[0].formatted_address;
//     console.log(address);
//   },
//   error => {
//     console.error(error);
//   }
// );
 

      }
      

//   state = {
//     open: false,
//     count: 1,
//   };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  someChange() {
    this.setState(prevState => {
        return {count: prevState.count + 1}
     })
    console.log('some change', this.state.count);
    console.log(this.props.coords);
  };

  render() {
    const { open } = this.state;
    return (
      <div className="example">
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Open
        </button>{' '}
        <a
          href="https://github.com/pradel/react-responsive-modal/blob/master/docs/examples/centered.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          See source code 
        </a>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
          <button onClick={this.someChange.bind(this)}>Close</button>
        </Modal>
      </div>
    );
  }
}
export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(FirstLoginSteps);
// export default FirstLoginSteps;