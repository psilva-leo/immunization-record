/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Row,
  Col,
} from "shards-react";
import VaccineCard from "./VaccineCard";


class Vaccines extends React.Component {
  
  render() {
    return (
      
      <div>
        <div className="row no-gutters py-4 mb-3 border-bottom">
          <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span className="text-uppercase page-subtitle">{this.props.targetGroup}</span>
          </div>
        </div>

        <Row>
          {this.props.vaccines.map((vaccine, idx) => (
            <Col lg="4" key={idx}>
              <VaccineCard vaccine={vaccine}></VaccineCard>
            </Col>
          ))}
        </Row>
      </div>
      
    );
  }
}

export default Vaccines;
