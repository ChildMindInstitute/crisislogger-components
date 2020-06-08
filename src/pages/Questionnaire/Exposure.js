import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, RadioGroup, FormControl, FormControlLabel, Radio, FormGroup, TextField, Checkbox, Grid   } from '@material-ui/core'
import { Button } from 'react-bootstrap'
import { changeInput, changeInputMultiselect } from '../../redux/action/questionnary.action'
import './style.scss'

const Exposure = ({ changeInput, nextStep, changeInputMultiselect, previousStep }) => {
    const [otherSymptom, setSimptom] = useState('')
    const handleValueCheked = (questionName) => (event) => {
        changeInputMultiselect('partTwo', questionName, event.target.name)
    }

    const handelRadioGroup = (questionName) => (event) => {
        changeInput('partTwo', questionName, event.target.value)
    }

    const handleTextField = (questionName) => (event) => {
        changeInput('partTwo', questionName, event.target.value)
    }

    const handleTextMulticheck = (questionName) => (event) => {
        if(otherSymptom !== ""){
            changeInputMultiselect('partTwo', questionName, otherSymptom)
        }
        changeInputMultiselect('partTwo', questionName, event.target.value)
        setSimptom(event.target.value)
    }

    return (
        <Container maxWidth="sm">
            <div className="section-title">
                Please answer the following questions about your health or exposure to Coronavirus/COVID-19:
            </div>
            <div className="section-title">
                During the past 2 weeks, have you been exposed to someone likely to have Coronavirus (COVID-19)? (check all that apply)
            </div>
            <div className="input-block">
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox 
                                name="Yes, with positive test"
                                color="default"
                                onChange={handleValueCheked('question1')}
                            />}
                            label="Yes, with positive test"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Yes, with medical diagnosis"
                                color="default"
                                onChange={handleValueCheked('question1')}
                            />}
                            label="Yes, with medical diagnosis"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Yes, but not diagnosed"
                                color="default"
                                onChange={handleValueCheked('question1')}
                            />}
                            label="Yes, but not diagnosed"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="No"
                                color="default"
                                onChange={handleValueCheked('question1')}
                            />}
                            label="No"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, have you been suspected of having COVID-19?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question2')}>
                        <FormControlLabel value="Yes, with positive test" control={<Radio color="default" size="small" />} label="Yes, with positive test" />
                        <FormControlLabel value="Yes, with medical diagnosis" control={<Radio color="default" size="small" />} label="Yes, with medical diagnosis" />
                        <FormControlLabel value="Yes, but not diagnosed" control={<Radio color="default" size="small" />} label="Yes, but not diagnosed" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, have you had any of the following symptoms? (check all that apply)
            </div>
            <div className="input-block">
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox 
                                name="Fever"
                                color="default"
                                onChange={handleValueCheked('question3')}
                            />}
                            label="Fever"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Cough"
                                color="default"
                                onChange={handleValueCheked('question3')}
                            />}
                            label="Cough"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Shortness Breath"
                                color="default"
                                onChange={handleValueCheked('question3')}
                            />}
                            label="Shortness Breath"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Sore Throat"
                                color="default"
                                onChange={handleValueCheked('question3')}
                            />}
                            label="Sore Throat"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Fatigue"
                                color="default"
                                onChange={handleValueCheked('question3')}
                            />}
                            label="Fatigue"
                        />
                    </FormGroup>
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        onBlur={handleTextMulticheck('question3')}
                        variant="outlined"
                        placeholder="Other symptoms"
                        size="small"
                    />
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, has anyone in your family been diagnosed with COVID-19? (check all that apply)
            </div>
            <div className="input-block">
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox 
                                name="Yes, member of household"
                                color="default"
                                onChange={handleValueCheked('question4')}
                            />}
                            label="Yes, member of household"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Yes, non-household member"
                                color="default"
                                onChange={handleValueCheked('question4')}
                            />}
                            label="Yes, non-household member"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="No"
                                color="default"
                                onChange={handleValueCheked('question4')}
                            />}
                            label="No"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, have any of the following happened to your family members because of COVID-19?
            </div>
            <div className="input-block">
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox 
                                name="Fallen ill physically"
                                color="default"
                                onChange={handleValueCheked('question5')}
                            />}
                            label="Fallen ill physically"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Hospitalized"
                                color="default"
                                onChange={handleValueCheked('question5')}
                            />}
                            label="Hospitalized"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Isolated or put into quarantine"
                                color="default"
                                onChange={handleValueCheked('question5')}
                            />}
                            label="Isolated or put into quarantine"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                name="Lost job"
                                color="default"
                                onChange={handleValueCheked('question5')}
                            />}
                            label="Lost job"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how worried have <i>you</i> been about being infected?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question6')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how worried have <i>your friends or family</i> been about being infected? 
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question7')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how worried have your <i>physical health</i> been about being infected?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question8')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how worried have your <i>mental/emotional health</i> been about being infected?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question9')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how much are you reading, or talking about COVID-19?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question10')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, has the COVID-19 crisis in your area led to any positive changes in your life?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question11')}>
                        <FormControlLabel value="Never" control={<Radio color="default" size="small" />} label="Never" />
                        <FormControlLabel value="Rarely" control={<Radio color="default" size="small" />} label="Rarely" />
                        <FormControlLabel value="Occasionally" control={<Radio color="default" size="small" />} label="Occasionally" />
                        <FormControlLabel value="Often" control={<Radio color="default" size="small" />} label="Often" />
                        <FormControlLabel value="Most of the time" control={<Radio color="default" size="small" />} label="Most of the time" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                If answered <strong>Only a few</strong> or <strong>Some</strong> to the last question, please specify
            </div>
            <div className="input-block">
                <FormControl fullWidth>
                    <TextField
                        onChange={handleTextField('question12')}
                        variant="outlined"
                        size="small"
                    />
                </FormControl>
            </div>
            <Grid container justify="space-between" className="input-block" >
                <Button onClick={previousStep} variant="light">PREVIOUS</Button>
                <Button onClick={nextStep}>NEXT STEP</Button>
            </Grid>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    changeInput: bindActionCreators(changeInput, dispatch),
    changeInputMultiselect: bindActionCreators(changeInputMultiselect, dispatch)
})

export default connect(null, mapDispatchToProps)(Exposure)