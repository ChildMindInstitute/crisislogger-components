import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import RegisterForm from'./RegisterForm'

const Register = () => {
    const { t } = useTranslation()
    return (
        <div className="sign-form-page">
            <h3 className="sign-form-title">{t('register.title')}</h3>
            <Row className="sign-form-container">
                <Col xl={{span: 4, offset: 0}}>
                    <RegisterForm />
                </Col>
            </Row>
        </div>
    )
}

export default Register