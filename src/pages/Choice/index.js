import React from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Button } from 'react-bootstrap'
import './style.scss'

const Choice = (props) => {
    const { t } = useTranslation()
    const blockNames = [
        {i18nName: 'parent', role: 1},
        {i18nName: 'teacher', role: 2},
        {i18nName: 'student', role: 3},
        {i18nName: 'healthWorker', role: 4},
        {i18nName: 'patient', role: 5},
        {i18nName: 'other', role: 6}
    ]
    const space = {
        marginRight: 5,
        marginLeft: 5
    }

    const choiceRole = (role) => () => {
        localStorage.setItem('role', role)
        props.history.push('/record-type')
    }

    return (
        <div className="select-choice-container">
            <Row>
                <div className="text-align-center" style={{ marginTop: '100px' }}>
                    <h1 className="grey-title">{t('choice.title')}</h1>
                </div>
                <div className="text-align-center" style={{ width: '100%' }}>
                    <h4 className="grey-text" >{t('choice.text')}</h4>
                </div>
                <Row className="choice-container" style={{ width: '100%' }}>
                    {blockNames.map((block, index) => (
                        <Col xl={{ span: 3,  offset: 1 }} className="choice-block">
                            <Row style={{ justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                                <Button 
                                    onClick={choiceRole(block.role)} 
                                    title={t(`choice.${block.i18nName}.button`)} 
                                    size={'lg'}
                                    className="choice-button"
                                    style={space}
                                >{t(`choice.${block.i18nName}.button`)}</Button>
                            </Row>
                            <p className="grey-text">{t(`choice.${block.i18nName}.text`)}</p>
                        </Col>
                    ))}
                </Row>
            </Row>
        </div>
    )
}

export default Choice