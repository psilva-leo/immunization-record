import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment'


class UserAccountDetails extends React.Component {
    static defaultProps = {
        title: "Account Details"
    }

    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
          selectedDay: undefined,
          age: 25,
        };
      }

    
      handleDayChange(selectedDay, modifiers, dayPickerInput) {
        console.log('hey');
        const input = dayPickerInput.getInput();
        let momentSelectedDate = moment(selectedDay);
        let duration = moment.duration(moment().diff(momentSelectedDate));
        let hours = duration.asYears();
        
        console.log(Math.floor(hours));
        this.setState({
          selectedDay,
          isEmpty: !input.value.trim(),
          isValidDay: typeof selectedDay !== 'undefined',
          isDisabled: modifiers.disabled === true,
          age: Math.floor(hours)
        });
      }


    render() {
        return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
            <h6 className="m-0">{this.props.title}</h6>
            </CardHeader>
            <ListGroup flush>
            <ListGroupItem className="p-3">
                <Row>
                <Col>
                    <Form>
                    <Row form>
                        {/* First Name */}
                        <Col md="6" className="form-group">
                        <label htmlFor="feFirstName">First Name</label>
                        <FormInput
                            id="feFirstName"
                            placeholder="First Name"
                            value="Sierra"
                            onChange={() => {}}
                        />
                        </Col>
                        {/* Last Name */}
                        <Col md="6" className="form-group">
                        <label htmlFor="feLastName">Last Name</label>
                        <FormInput
                            id="feLastName"
                            placeholder="Last Name"
                            value="Brooks"
                            onChange={() => {}}
                        />
                        </Col>
                    </Row>
                    <Row form>
                        {/* Birth Date */}
                        <Col md="6" className="form-group">
                        <label htmlFor="feBirthDate">Birthdate</label>
                        <div className="mb-3 form-control" style={{textAlign: 'center'}}>
                            <DayPickerInput
                            onDayChange={this.handleDayChange}
                            selectedDays={this.state.selectedDay}
                            />
                        </div>
                        </Col>
                        {/* Age */}
                        <Col md="6" className="form-group">
                        <label htmlFor="feAge">Age</label>
                        <FormInput
                            id="feAge"
                            placeholder="Age"
                            value={this.state.age}
                        />
                        </Col>
                    </Row>
                    <Row form>
                        {/* Email */}
                        <Col md="6" className="form-group">
                        <label htmlFor="feEmail">Email</label>
                        <FormInput
                            type="email"
                            id="feEmail"
                            placeholder="Email Address"
                            value="sierra@example.com"
                            onChange={() => {}}
                            autoComplete="email"
                        />
                        </Col>
                        {/* Password */}
                        <Col md="6" className="form-group">
                        <label htmlFor="fePassword">Password</label>
                        <FormInput
                            type="password"
                            id="fePassword"
                            placeholder="Password"
                            value="EX@MPL#P@$$w0RD"
                            onChange={() => {}}
                            autoComplete="current-password"
                        />
                        </Col>
                    </Row>
                    <FormGroup>
                        <label htmlFor="feAddress">Address</label>
                        <FormInput
                        id="feAddress"
                        placeholder="Address"
                        value="1234 Main St."
                        onChange={() => {}}
                        />
                    </FormGroup>
                    <Row form>
                        {/* City */}
                        <Col md="6" className="form-group">
                        <label htmlFor="feCity">City</label>
                        <FormInput
                            id="feCity"
                            placeholder="City"
                            onChange={() => {}}
                        />
                        </Col>
                        {/* State */}
                        <Col md="4" className="form-group">
                        <label htmlFor="feInputState">State</label>
                        <FormSelect id="feInputState">
                            <option>Choose...</option>
                            <option>...</option>
                        </FormSelect>
                        </Col>
                        {/* Zip Code */}
                        <Col md="2" className="form-group">
                        <label htmlFor="feZipCode">Zip</label>
                        <FormInput
                            id="feZipCode"
                            placeholder="Zip"
                            onChange={() => {}}
                        />
                        </Col>
                    </Row>
                    
                    <Button theme="accent">Update Account</Button>
                    </Form>
                </Col>
                </Row>
            </ListGroupItem>
            </ListGroup>
        </Card>
    );
    }
}
// UserAccountDetails.propTypes = {
//   /**
//    * The component's title.
//    */
//   title: PropTypes.string
// };

// UserAccountDetails.defaultProps = {
//   title: "Account Details"
// };

export default UserAccountDetails;