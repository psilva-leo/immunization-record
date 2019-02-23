/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "shards-react";
import {Collapse} from 'react-collapse';

const avatarStyle = { position: 'absolute', bottom: '40px', left: 0, textIndent: 0, backgroundColor: 'white' }
const iconStyle = { position: 'relative', fontSize: '24px', top: 'calc(50% - 10px)', left: 'calc(50% - 8px)' }


class Vaccines extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          showInfo: false,
        };
      }


  getVaccineIcon(takenVaccine){
    return takenVaccine ? "fas fa-check-circle mr-1" : "fas fa-times-circle mr-1";
  }

  getVaccineColor(takenVaccine){
    
    let color = takenVaccine ? "bg-primary" : "bg-secondary";
    return color + " rounded text-white text-center p-2";
  }

  getVaccineText(takenVaccine){
    return takenVaccine ? "Vacinado" : "Pendente";
  }

  getShowInfoIcon(){
      return this.state.showInfo ? "fas fa-angle-up" : "fas fa-angle-down"
  }

  toggleInfo(e){
      this.setState(prevState => ({
        showInfo: !prevState.showInfo
      }));
  }

  render() {

    return (
        <Card small className="card-post mb-4">
        <CardHeader className="border-bottom d-flex">
          <h5 className="card-title">{this.props.vaccine.title}</h5>
          <div className="my-auto ml-auto">
            <div size="sm" className={this.getVaccineColor(this.props.vaccine.takenVaccine)}>
              <i className={this.getVaccineIcon(this.props.vaccine.takenVaccine)} /> {this.getVaccineText(this.props.vaccine.takenVaccine)}
            </div>
          </div>
          <a
            href="#"
            onClick={this.toggleInfo.bind(this)}
            className="card-post__author-avatar card-post__author-avatar--small"
            style={avatarStyle}
        >
            <i className={this.getShowInfoIcon()} style={iconStyle}></i>
        </a>
        </CardHeader>
        
        <Collapse isOpened={this.state.showInfo}>
            <CardBody>
            <p className="card-text text-muted">{this.props.vaccine.description}</p>
            <p><b>Efeito Colateral</b> <span className="card-text text-muted">{this.props.vaccine.collateralEffect}</span></p>
            <p><b>Price</b> <span className="card-text text-muted">{this.props.vaccine.price}</span></p>
            </CardBody>
        </Collapse>
        <CardFooter className="border-top d-flex">
          <div className="card-post__author d-flex">
            <span>{this.props.vaccine.place} <span className="text-muted">{this.props.vaccine.date}</span></span>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default Vaccines;
