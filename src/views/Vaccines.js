/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import VaccineTargetGroupCards from "../components/common/VaccineTargetGroupCards";
import getVaccines from "../data/vaccines";


class Vaccines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupedVaccinesList: this.vaccinesGroupedByTargetGroup(),
    };
  }

  vaccinesGroupedByTargetGroup(){
    let allVaccines = getVaccines();
    let groupedVaccines = {};
    allVaccines.forEach((vaccine, i) => {
      if (!groupedVaccines.hasOwnProperty(vaccine.targetGroup)){
        groupedVaccines[vaccine.targetGroup] = [vaccine];
      }else{
        groupedVaccines[vaccine.targetGroup].push(vaccine);
      }
    });

    return groupedVaccines;
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Vacinas" subtitle="Components" className="text-sm-left" />
        </Row>

        {/* Vaccine Groups */}
        {Object.keys(this.state.groupedVaccinesList).map((group, idx) => (
          <div key={idx}>
            <VaccineTargetGroupCards targetGroup={group} vaccines={this.state.groupedVaccinesList[group]}/>
          </div>
        ))}

      </Container>
    );
  }
}

export default Vaccines;
