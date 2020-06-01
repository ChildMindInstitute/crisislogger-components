import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Form, Row, Button, Alert, Col } from 'react-bootstrap';
import { Register } from '../../redux/thunks/auth.thunk'


class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           email: '',
           password: '',
           confirmPassword: '',
           username: '' 
        }
    }
    changeValue = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let { username, password, confirmPassword, email } = this.state
        if(password == confirmPassword) {
            this.props.register({ name:username, password, email, role: 1 })
        }
    }
    gotoSkip= () => {
        this.props.history.push('/')
    }
    render() {
        const { t } = this.props
        return (
            <Form onSubmit={this.onSubmit}>
                 { this.props.error &&  <Alert variant={'danger'}> {this.props.error}</Alert>}
                <Form.Group controlId="formBasicEmail">
                <Form.Label>{t("register.emailLabel")}</Form.Label>
                    <Form.Control required type="email" name="email" placeholder={t("register.emailLabel")} onChange={this.changeValue} />
                </Form.Group>
                 <Form.Group controlId="formBasicEmail">
                    <Form.Label>{t("register.usernameLabel")}</Form.Label>
                    <Form.Control required type="text" name="username" placeholder={t("register.usernameLabel")} onChange={this.changeValue} />
                </Form.Group>
               
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>{t("register.passwordLabel")}</Form.Label>
                    <Form.Control required type="password" name="password" placeholder={t("register.passwordLabel")} onChange={this.changeValue} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label >{t("register.passwordConfirmLabel")}</Form.Label>
                    <Form.Control required type="password" name="confirmPassword" placeholder={t("register.passwordConfirmLabel")} onChange={this.changeValue} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label >{'Referral Code (if you were given one)'}</Form.Label>
                    <Form.Control  type="text" name="referral_code" placeholder={'Referral code'} onChange={this.changeValue} />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label={t("register.rememberMe")} />
                </Form.Group>
                <Row>
                    <Col >
                        <Button type="submit" variant={'success'} >{t("register.button")}</Button>
                     
                    </Col >
                    <Col >
                        <Button  variant={'outline-primary'} onClick={this.gotoSkip}>{'Skip'}</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    register: bindActionCreators(Register, dispatch)
})
const mapStateToProps = state => {
    console.log(state)
    return {
      user: state.user.user,
      loading: state.user.loading,
      loaded: state.user.loaded,
      error: state.user.error
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(RegisterForm))