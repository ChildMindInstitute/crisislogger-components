import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next'
import { bindActionCreators } from 'redux';
import {  Form, Row, Button, Alert, Col,Spinner } from 'react-bootstrap';
import { getProfile, updateProfile, changePassword } from '../../redux/thunks/data.thunk'
import './style.scss'

const Profile = (props) => {
    const { t } = useTranslation()
    const [loaded, setLoaded] = React.useState(false)
    const [passwordConfirmError, setPasswordConfirmError] = React.useState(false)
    const [passwordLength, setPasswordLength] = React.useState(false)
    const [formState, setFormState] = React.useState({
        email:  (props.user !== undefined? props.user.email: null),
        name:  (props.user !== undefined? props.user.name: null),
        new_password:  null,
        old_password: null,
        new_confirm_password:  null,
    })
    React.useEffect(() => {
        props.getProfileData()
        setLoaded(true)
    }, [loaded]);
    React.useEffect(() => {
        setFormState({...formState, email:  (props.user !== undefined? props.user.email: null),
            name:  (props.user !== undefined? props.user.name: null)})
    }, [props.user])
    const onSubmitProfile = async () => {
        console.log(formState)

        await props.updateAccount({email: formState.email, name: formState.name})
        setLoaded(false)
    }
    const onUpdatePassword = async () => {
        await props.changePassword({new_password: formState.new_password, old_password: formState.old_password})
        setLoaded(false)
    }
    const changeValue = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value})
    }
    const onChangePassword  = (e) => {
        if(e.target.value.length <= 6) {
            setPasswordLength(true)
        } else {
            setPasswordLength(false) 
        }
        setFormState({ ...formState, [e.target.name]: e.target.value})
    }

    const validationConfirmPassword = (event) => {
        if( formState.new_password!== event.target.value) {
            setPasswordConfirmError(true)
        } else {
            setPasswordConfirmError(false)
        }
    }
    
    return (
        <div>
            <Row style={{marginTop: 30, textAlign: 'center'}} >
            { props.error &&  <Alert variant={'danger'} style={{width: '100%'}}> {props.error}</Alert>}
            </Row>
            <Row>
            <Col  xs={12} sm={6} md={6} lg={6}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>{t("register.emailLabel")}</Form.Label>
                        <Form.Control required type="email" name="email" placeholder={t("register.emailLabel")} value={formState.email} onChange={(e) => changeValue(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{t("register.usernameLabel")}</Form.Label>
                        <Form.Control required type="text" name="name" placeholder={t("register.usernameLabel")} value={formState.name} onChange={(e) => changeValue(e)} />
                    </Form.Group>
                    <Col >
                        <Button onClick={onSubmitProfile} variant={'primary'}  > 
                        {( props.loading? <Spinner animation="border" />: '') } { t("Update Profile")}
                        </Button>
                    </Col >
                </Form>
            </Col>
            <Col  xs={12} sm={6} md={6} lg={6}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{t("Old Password")}</Form.Label>
                        <Form.Control 
                            required 
                            type="password" 
                            name="old_password" 
                            value={formState.old_password} 
                            placeholder={t("Old Password")} 
                            onChange={onChangePassword}
                            isInvalid={passwordLength}
                        />
                        <Form.Control.Feedback type="invalid">
                            Must be at least 6 characters
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>{t("New Password")}</Form.Label>
                        <Form.Control 
                            required 
                            type="password" 
                            value={formState.new_password} 
                            name="new_password" 
                            placeholder={t("New Password")} 
                            onChange={onChangePassword}
                            isInvalid={passwordLength}
                        />
                        <Form.Control.Feedback type="invalid">
                            Must be at least 6 characters
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >{t("Confirm New Password")}</Form.Label>
                        <Form.Control 
                            required 
                            type="password" 
                            name="confirmPassword"
                            value={formState.new_confirm_password} 
                            onBlur={validationConfirmPassword}
                            placeholder={t("Confirm New Password")} 
                            onChange={onChangePassword}
                            isInvalid={!!passwordConfirmError}
                        />
                        <Form.Control.Feedback type="invalid">
                            The password confirmation does not match
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Col >
                        <Button  onSubmit={onUpdatePassword} variant={'primary'} disabled={passwordConfirmError || passwordLength} >
                            {( props.loading? <Spinner animation="border" />: '') }{ t("Update Password")}
                            </Button>
                    </Col >
                </Form>
            </Col>
            <Col style={{marginTop: 30, textAlign: 'center'}} >
                <Button variant={'primary'} >{t("Close My account")}</Button>
            </Col >
            </Row>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      user: state.recordData.data,
      loading: state.recordData.loading,
      loaded: state.recordData.loaded,
      error: state.recordData.error,
    }
  }
  const mapDispatchToProps = dispatch => ({
    getProfileData: bindActionCreators(getProfile, dispatch),
    updateAccount: bindActionCreators(updateProfile, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch)
  });
export default connect(mapStateToProps, mapDispatchToProps)(Profile)