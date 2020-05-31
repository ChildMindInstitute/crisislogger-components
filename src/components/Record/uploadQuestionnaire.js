import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Row, Col } from 'react-bootstrap'
import contryList from 'react-select-country-list'

const UploadQuestionnaire = ({ setFormState, formState }) => {
    const { t } = useTranslation()
    let option = contryList().getData()
    const handleChange = (value) => {
        setFormState({
            ...formState,
            checkAge: !formState.checkAge
        })
    }

    const handleContribute = (value) => {
        setFormState({
            ...formState,
            contribute_to_science: value,
        })
    } 
    const handlePublicly = (value) => {
        setFormState({
            ...formState,
            publicly: value
        })
    }

    const handleCountry = event => {
        setFormState({
            ...formState,
            country: event.target.value
        })
    }

    return (
        <Form>
            <fieldset>
                <Form.Label as="legend" sm={2}>
                    <h4>{t('sharedMessage.modal.firstQuestionTitle')}</h4>
                </Form.Label>
                <Form.Group as={Row} style={{ width: '100%', display: 'flex' }} id={'contribute'}>
                    <Form.Check
                        onChange={() => handleContribute(1)}
                        type="radio"
                        style={{ flex: 1 }}
                        label={t('sharedMessage.modal.answer1_1')}
                        name="contribute_to_science"
                        id="1"
                        checked={formState.contribute_to_science}
                        value={formState.contribute_to_science}
                        style={{ marginRight: 20 }}
                    />
                    <Form.Check
                        onChange={() => handleContribute(0)}
                        type="radio"
                        style={{ flex: 1 }}
                        value={formState.contribute_to_science}
                        checked={!formState.contribute_to_science}
                        label={t('sharedMessage.modal.answer1_2')}
                        name="contribute_to_science"
                        id="0"
                    />
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                  {formState.errors['contribute_to_science']}
                </Form.Control.Feedback>
                <p>{t('sharedMessage.modal.firstQuestionNote')}</p>
            </fieldset>
            <fieldset>
                <Form.Label as="legend" sm={2}>
                    <h4>{t('sharedMessage.modal.secondQuestionTitle')}</h4>
                </Form.Label>
                <Form.Group as={Row}  style={{ width: '100%', marginLeft: 0, display:'flex' }} id={'public'} >
                    <Form.Check
                        onChange={() => handlePublicly(2)}
                        type="radio"
                        label={t('sharedMessage.modal.answer2_1')}
                        name="publicly"
                        id="public-1"
                        checked={formState.publicly === 2}
                        style={{ flex: 2}}
                    />
                    <Form.Check
                        onChange={() => handlePublicly(1)}
                        type="radio"
                        label={t('sharedMessage.modal.answer2_2')}
                        name="publicly"
                        checked={formState.publicly ===  1}
                        style={{ flex: 1 }}
                        id="public-2"
                    />
                    <Form.Check
                        onChange={() => handlePublicly(0)}
                        type="radio"
                        label={t('sharedMessage.modal.answer2_3')}
                        name="publicly"
                        style={{ flex: 1 }}
                        checked={formState.publicly === 0}
                        id="public-3"
                    />
                </Form.Group>
                <Form.Control.Feedback 
                    type={'invalid'}
                    style={{display: (formState.errors['publicly'] ? 'block': 'none')}}
                >{formState.errors['publicly']}
                </Form.Control.Feedback>
                <p>{t('sharedMessage.modal.secondQuestionNote')}</p>
            </fieldset>
            <Form.Group>
                <Form.Label><h4>{t('sharedMessage.modal.thirdQuestionTitle')}</h4></Form.Label>
                <Form.Control as="select" onChange={handleCountry} name="country">
                    {option.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Check
                    required
                    name="checkAge"
                    checked={formState.checkAge}
                    label={t('sharedMessage.modal.fourthQuestionTitle')}
                    onChange={handleChange}
                    id="validationFormik0"
                />
            </Form.Group>
            <Form.Control.Feedback type="invalid" style={{display: (formState.errors['checkAge'] ? 'block': 'none')}}>
                {formState.errors['checkAge']}
            </Form.Control.Feedback>
        </Form>
    )
}

export default UploadQuestionnaire