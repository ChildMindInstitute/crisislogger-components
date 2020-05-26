import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { bindActionCreators } from 'redux';
import {  Form, Row, Button, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Login } from '../../redux/thunks/auth.thunk'
import './style.scss'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      signInSuccessful: false
    };
  }
  changeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state
  }
  render() {
    const { t } = this.props
    return (
      <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" name="email" placeholder={t("login.emailLabel")} onChange={this.changeValue} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="password" name="password" placeholder={t("login.passwordLabel")} onChange={this.changeValue} />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label={t("login.rememberMe")} />
            </Form.Group>
            <Row>
              <Col xl={{ span:4, offset:4 }}>
                <Button type="submit" >{t("login.button")}</Button>
              </Col>
            </Row>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(Login, dispatch)
});

export default connect(null, mapDispatchToProps)(withTranslation()(LoginForm));