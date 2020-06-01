import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import RegisterForm from'./RegisterForm'

const Register = () => {
    const { t } = useTranslation()
    return (
        <div className="sign-form-page">
            <h1 className="sign-form-title">{t('register.title')}</h1>
            <p>{t('register.notes')}</p>
            <Row className="sign-form-container" style={{marginTop: '20px !important'}}>
                <Col xl={{span: 4}}>
                    <RegisterForm />
                </Col>
            </Row>
        </div>
    )
}

export default Register