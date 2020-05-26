import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Form, Row, Button, Col } from 'react-bootstrap';
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

    render() {
        const { t } = this.props
        return (
            <Form onSubmit={this.onSubmit}>
                 <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" name="username" placeholder={t("register.usernameLabel")} onChange={this.changeValue} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder={t("register.emailLabel")} onChange={this.changeValue} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="password" name="password" placeholder={t("register.passwordLabel")} onChange={this.changeValue} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="password" name="confirmPassword" placeholder={t("register.passwordConfirmLabel")} onChange={this.changeValue} />
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
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    register: bindActionCreators(Register, dispatch)
})

export default connect(null, mapDispatchToProps)(withTranslation()(RegisterForm))