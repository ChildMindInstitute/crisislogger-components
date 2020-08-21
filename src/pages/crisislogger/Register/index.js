import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import RegisterForm from'./RegisterForm'
import Utils from "../../../util/Utils";
const Register = (props) => {
    const { t } = useTranslation()
    return (
        <div className="sign-form-page">
            <h1 className="sign-form-title">{t(new Utils().getCurrentDomain()+'.register.title')}</h1>
            <p>{t(new Utils().getCurrentDomain()+'.register.notes')}</p>
            <Row className="sign-form-container" style={{marginTop: '20px !important'}}>
                <Col xl={{span: 4}}>
                    <RegisterForm {...props}/>
                </Col>
            </Row>
        </div>
    )
}

export default Register