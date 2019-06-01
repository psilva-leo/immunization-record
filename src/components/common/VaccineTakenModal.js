import Geocode from "react-geocode";
import React from 'react';
import Modal from 'react-responsive-modal';
import { geolocated } from 'react-geolocated';
import { CardHeader } from "shards-react";
import Maps from '../../views/Maps';
import DateSelector from '../common/DateSelector';


class VaccineTakenModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        open: false,
    };
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  someChange() {
    this.setState(prevState => ({
      open: !prevState.open
    }));

    console.log('some change', this.state.open);
    // console.log(this.props.coords);
  };

  getTitle(){
    if (this.props.takenVaccine){
      return 'Vacina em Dia!'
    } else {
      return 'Vacina Pendente!'
    }
  }

  vaccineTakenCard(){
    return (
      <Modal open={this.state.open} onClose={this.onCloseModal} center blockScroll={false} classNames={ { modal: "card card-post" } }>
        <CardHeader className="border-bottom d-flex">
          <h4 className="card-title text-center">{this.getTitle()}</h4>
        </CardHeader>

        <h5 className="text-center">{this.props.vaccineTitle}</h5>
        <p className="text-center">
          Vacina tomada em 20 de Janeiro de 2019 em São Carlos
        </p>
        <div style={ { width: '100%' } }>
          <Maps></Maps>
        </div>
      </Modal>
    );
  }

  vaccineNotTakenCard () {
    return (
      <Modal open={this.state.open} onClose={this.onCloseModal} center blockScroll={false} classNames={ { modal: "card card-post" } }>
        <CardHeader className="border-bottom d-flex">
          <h4 className="card-title text-center">{this.getTitle()}</h4>
        </CardHeader>

        <strong class="text-muted d-block mb-2">Data da vacinação</strong>
        <DateSelector></DateSelector>

        <strong class="text-muted d-block mb-2">Local da vacinação</strong>

        <button onClick={this.someChange.bind(this)} type="button" class="mb-2 btn btn-sm btn-success mr-1">Save</button>
      </Modal>
    );
  }


  render() {
    const { open } = this.state;
    
    if (this.props.takenVaccine) {
      return this.vaccineTakenCard();
    } else {
      return this.vaccineNotTakenCard();
    }
    
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>

          
            <h2 className="text-center">{this.getTitle()}</h2>
            <h3 className="text-center">{this.props.vaccineTitle}</h3>
            <p className="text-center">
              Vacina tomada em 20 de Janeiro de 2019 em São Carlos
            </p>
            <div style={ { width: '100%' } }>
              <Maps></Maps>
            </div>


        
          
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
  })(VaccineTakenModal);
// export default VaccineTakenModal;