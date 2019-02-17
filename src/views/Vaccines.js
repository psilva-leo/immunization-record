/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Vaccines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      // Third list of posts.
      PostsListThree: [
        {
          takenVaccine: true,
          author: "São Carlos",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "BCG ID",
          description: "Indicada para prevenção da tuberculose",
          price: "Grátis pelo Ministério da Saúde. Em hospitais ou clínicas particulares a vacina pode custar R$ 90,00.",
          collateralEffect: "Normalmente não há. Pode acontecer inchaço, vermelhidão e sensibilidade",
          body:
            "Vacina contra a tuberculose.\nEm até 10% dos vacinados, ocorre formação de uma lesão ulcerada de cicatrização lenta (meses)",
          date: "29 February 2019"
        },
        {
          takenVaccine: false,
          author: "São Carlos",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Pentavalente",
          description: "Indicada para prevenção da tuberculose",
          price: "Grátis pelo Ministério da Saúde. Em hospitais ou clínicas particulares a vacina pode custar R$ 90,00.",
          collateralEffect: "Normalmente não há. Pode acontecer inchaço, vermelhidão e sensibilidade",
          body:
            "Vacina contra a tuberculose.\nEm até 10% dos vacinados, ocorre formação de uma lesão ulcerada de cicatrização lenta (meses)",
          date: "29 February 2019"
        },
        {
          takenVaccine: true,
          author: "São Paulo",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "VIP e VOP",
          description: "Indicada para prevenção da tuberculose",
          price: "Grátis pelo Ministério da Saúde. Em hospitais ou clínicas particulares a vacina pode custar R$ 90,00.",
          collateralEffect: "Normalmente não há. Pode acontecer inchaço, vermelhidão e sensibilidade",
          body:
            "Vacina contra a tuberculose.\nEm até 10% dos vacinados, ocorre formação de uma lesão ulcerada de cicatrização lenta (meses)",
          date: "29 February 2019"
        },
        {
          takenVaccine: false,
          author: "São Paulo",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "VIP e VOP",
          description: "Indicada para prevenção da tuberculose",
          price: "Grátis pelo Ministério da Saúde. Em hospitais ou clínicas particulares a vacina pode custar R$ 90,00.",
          collateralEffect: "Normalmente não há. Pode acontecer inchaço, vermelhidão e sensibilidade",
          body:
            "Vacina contra a tuberculose.\nEm até 10% dos vacinados, ocorre formação de uma lesão ulcerada de cicatrização lenta (meses)",
          date: "29 February 2019"
        }
      ],

      
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

  render() {
    const {
      PostsListThree,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Vacinas" subtitle="Components" className="text-sm-left" />
        </Row>

        {/* Third Row of Posts */}
        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardHeader className="border-bottom d-flex">
                  <h5 className="card-title">{post.title}</h5>
                  <div className="my-auto ml-auto">
                    <div size="sm" className={this.getVaccineColor(post.takenVaccine)}>
                      <i className={this.getVaccineIcon(post.takenVaccine)} /> {this.getVaccineText(post.takenVaccine)}
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="card-text text-muted">{post.description}</p>
                  <p><b>Efeito Colateral</b> <span className="card-text text-muted">{post.collateralEffect}</span></p>
                  <p><b>Price</b> <span className="card-text text-muted">{post.price}</span></p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <span>{post.author} <span className="text-muted">{post.date}</span></span>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    );
  }
}

export default Vaccines;
