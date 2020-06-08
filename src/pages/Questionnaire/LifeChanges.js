import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, RadioGroup, FormControl, FormControlLabel, Radio, FormGroup, TextField, Checkbox, Grid, TextareaAutosize   } from '@material-ui/core'
import { Button } from 'react-bootstrap'
import { changeInput, changeInputMultiselect } from '../../redux/action/questionnary.action'
import './style.scss'

const LifeChanges = ({ changeInput, nextStep, changeInputMultiselect, previousStep }) => {

    const handleValueCheked = (questionName) => (event) => {
        changeInputMultiselect('partThree', questionName, event.target.name)
    }

    const handelRadioGroup = (questionName) => (event) => {
        changeInput('partThree', questionName, event.target.value)
    }

    const handleTextField = (questionName) => (event) => {
        changeInput('partThree', questionName, event.target.value)
    }

    return (
        <Container maxWidth="sm">
            <div className="section-title">
                Please answer the following questions about any changes in your life in the last 2 weeks due to Coronavirus/COVID-19:
            </div>
            <div className="section-title">
                During the past 2 weeks, if you attend school, has your school building been closed down?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question1')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                If yes,
            </div>
            <div className="input-block">
                <div className="label">Have classes resumed online?</div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question2')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
                <div className="label">Do you have easy access to the internet and a computer?</div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question3')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
                <div className="label">Are there assignments to complete?</div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question4')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
                <div className="label">Are you able to receive meals from the school?</div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question5')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                If no,
            </div>
            <div className="input-block">
                <div className="label">Are classes in session?</div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question5')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
                <div className="label">Are you attending classes in person?</div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question7')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, if you are working, has your workspace been closed?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question8')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, have you been able to telework or work from home?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question9')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how many people outside your household have you had an in-person conversation with?
            </div>
            <div className="input-block">
                <FormControl fullWidth>
                    <TextField 
                        onBlur={handleTextField('question10')}
                        variant="outlined"
                        size="small"
                    />
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how much time have you spent going outside of the home (e.g., going to stores, parks, etc.)?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question11')}>
                        <FormControlLabel value="No time" control={<Radio color="default" size="small" />} label="No time" />
                        <FormControlLabel value="Rarely" control={<Radio color="default" size="small" />} label="Rarely" />
                        <FormControlLabel value="Occasionally" control={<Radio color="default" size="small" />} label="Occasionally" />
                        <FormControlLabel value="Often" control={<Radio color="default" size="small" />} label="Often" />
                        <FormControlLabel value="A lot of the time" control={<Radio color="default" size="small" />} label="A lot of the time" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how stressful have the restrictions on leaving home been for you?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question12')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, have your contacts with people outside of your home changed relative to before the Coronavirus/COVID-19 crisis in your area?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question13')}>
                        <FormControlLabel value="A lot less" control={<Radio color="default" size="small" />} label="A lot less" />
                        <FormControlLabel value="A little less" control={<Radio color="default" size="small" />} label="A little less" />
                        <FormControlLabel value="About the same" control={<Radio color="default" size="small" />} label="About the same" />
                        <FormControlLabel value="A little more" control={<Radio color="default" size="small" />} label="A little more" />
                        <FormControlLabel value="A lot more" control={<Radio color="default" size="small" />} label="A lot more" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how much difficulty have you had following the recommendations for keeping away from close contact with people?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question14')}>
                        <FormControlLabel value="None" control={<Radio color="default" size="small" />} label="None" />
                        <FormControlLabel value="A little" control={<Radio color="default" size="small" />} label="A little" />
                        <FormControlLabel value="Moderate" control={<Radio color="default" size="small" />} label="Moderate" />
                        <FormControlLabel value="A lot" control={<Radio color="default" size="small" />} label="A lot" />
                        <FormControlLabel value="A great amount" control={<Radio color="default" size="small" />} label="A great amount" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, has the quality of the relationships between you and members of your family changed?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question15')}>
                        <FormControlLabel value="A lot worse" control={<Radio color="default" size="small" />} label="A lot worse" />
                        <FormControlLabel value="A little worse" control={<Radio color="default" size="small" />} label="A little worse" />
                        <FormControlLabel value="About the same" control={<Radio color="default" size="small" />} label="About the same" />
                        <FormControlLabel value="A little better" control={<Radio color="default" size="small" />} label="A little better" />
                        <FormControlLabel value="A lot better" control={<Radio color="default" size="small" />} label="A lot better" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how stressful have these changes in family contacts been for you?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question16')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, has the quality of your relationships with your friends changed?
            </div>
            <div className="input-block">
            <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question17')}>
                        <FormControlLabel value="A lot worse" control={<Radio color="default" size="small" />} label="A lot worse" />
                        <FormControlLabel value="A little worse" control={<Radio color="default" size="small" />} label="A little worse" />
                        <FormControlLabel value="About the same" control={<Radio color="default" size="small" />} label="About the same" />
                        <FormControlLabel value="A little better" control={<Radio color="default" size="small" />} label="A little better" />
                        <FormControlLabel value="A lot better" control={<Radio color="default" size="small" />} label="A lot better" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how stressful have these changes in social contacts been for you?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question18')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how much has cancellation of important events (such as graduation, prom, vacation, etc.) in your life been difficult for you?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question19')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, to what degree have changes related to the Coronavirus/COVID-19 crisis in your area created financial problems for you or your family?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question20')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, to what degree are you concerned about the stability of your living situation?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question21')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, did you worry whether your food would run out because of a lack of money?
            </div>
            <div classNAme="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question22')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how hopeful are you that the Coronavirus/COVID-19 crisis in your area will end soon?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question23')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Slightly" control={<Radio color="default" size="small" />} label="Slightly" />
                        <FormControlLabel value="Moderately" control={<Radio color="default" size="small" />} label="Moderately" />
                        <FormControlLabel value="Very" control={<Radio color="default" size="small" />} label="Very" />
                        <FormControlLabel value="Extremely" control={<Radio color="default" size="small" />} label="Extremely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                Please answer the following questions about your daily behaviors in the last 2 weeks:
            </div>
            <div className="section-title">
                During the past 2 weeks, how many hours per night did you sleep on average?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question24')}>
                        <FormControlLabel value="< 6 hours" control={<Radio color="default" size="small" />} label="< 6 hours" />
                        <FormControlLabel value="6-8 hours" control={<Radio color="default" size="small" />} label="6-8 hours" />
                        <FormControlLabel value="8-10 hours" control={<Radio color="default" size="small" />} label="8-10 hours" />
                        <FormControlLabel value="> 10 hours" control={<Radio color="default" size="small" />} label="> 10 hours" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how many days per week did you exercise (e.g., increased heart rate, breathing) for at least 30 minutes?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question25')}>
                        <FormControlLabel value="None" control={<Radio color="default" size="small" />} label="None" />
                        <FormControlLabel value="1-2 days" control={<Radio color="default" size="small" />} label="1-2 days" />
                        <FormControlLabel value="3-4 days" control={<Radio color="default" size="small" />} label="3-4 days" />
                        <FormControlLabel value="5-6 days" control={<Radio color="default" size="small" />} label="5-6 days" />
                        <FormControlLabel value="Daily" control={<Radio color="default" size="small" />} label="Daily" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how many days per week did you spend time outdoors?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question26')}>
                        <FormControlLabel value="None" control={<Radio color="default" size="small" />} label="None" />
                        <FormControlLabel value="1-2 days" control={<Radio color="default" size="small" />} label="1-2 days" />
                        <FormControlLabel value="3-4 days" control={<Radio color="default" size="small" />} label="3-4 days" />
                        <FormControlLabel value="5-6 days" control={<Radio color="default" size="small" />} label="5-6 days" />
                        <FormControlLabel value="Daily" control={<Radio color="default" size="small" />} label="Daily" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                Please answer the following questions about your daily behaviors in the last 2 weeks:
            </div>
            <div className="section-title">
                During the past 2 weeks, how worried were you generally?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question27')}>
                        <FormControlLabel value="Not worried at all" control={<Radio color="default" size="small" />} label="Not worried at all" />
                        <FormControlLabel value="Slightly worried" control={<Radio color="default" size="small" />} label="Slightly worried" />
                        <FormControlLabel value="Moderately worried" control={<Radio color="default" size="small" />} label="Moderately worried" />
                        <FormControlLabel value="Very worried" control={<Radio color="default" size="small" />} label="Very worried" />
                        <FormControlLabel value="Extremely worried" control={<Radio color="default" size="small" />} label="Extremely worried" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how happy versus sad were you?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question28')}>
                        <FormControlLabel value="Very sad/depressed/unhappy" control={<Radio color="default" size="small" />} label="Very sad/depressed/unhappy" />
                        <FormControlLabel value="Moderately sad/depressed/unhappy" control={<Radio color="default" size="small" />} label="Moderately sad/depressed/unhappy" />
                        <FormControlLabel value="Neutral" control={<Radio color="default" size="small" />} label="Neutral" />
                        <FormControlLabel value="Moderately happy/cheerful" control={<Radio color="default" size="small" />} label="Moderately happy/cheerful" />
                        <FormControlLabel value="Very happy/cheerful" control={<Radio color="default" size="small" />} label="Very happy/cheerful" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how relaxed versus anxious were you?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question29')}>
                        <FormControlLabel value="Very relaxed/calm" control={<Radio color="default" size="small" />} label="Very relaxed/calm" />
                        <FormControlLabel value="Moderately relaxed/calm" control={<Radio color="default" size="small" />} label="Moderately relaxed/calm" />
                        <FormControlLabel value="Neutral" control={<Radio color="default" size="small" />} label="Neutral" />
                        <FormControlLabel value="Moderately nervous/anxious" control={<Radio color="default" size="small" />} label="Moderately nervous/anxious" />
                        <FormControlLabel value="Very nervous/anxious" control={<Radio color="default" size="small" />} label="Very nervous/anxious" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how fidgety or restless were you?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question30')}>
                        <FormControlLabel value="Not fidgety/restless at all" control={<Radio color="default" size="small" />} label="Not fidgety/restless at all" />
                        <FormControlLabel value="Slightly fidgety/restless" control={<Radio color="default" size="small" />} label="Slightly fidgety/restless" />
                        <FormControlLabel value="Moderately fidgety/restless" control={<Radio color="default" size="small" />} label="Moderately fidgety/restless" />
                        <FormControlLabel value="Very fidgety/restless" control={<Radio color="default" size="small" />} label="Very fidgety/restless" />
                        <FormControlLabel value="Extremely fidgety/restless" control={<Radio color="default" size="small" />} label="Extremely fidgety/restless" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how fatigued or tired were you?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question31')}>
                        <FormControlLabel value="Not fatigued or tired at all" control={<Radio color="default" size="small" />} label="Not fatigued or tired at all" />
                        <FormControlLabel value="Slightly fatigued or tired" control={<Radio color="default" size="small" />} label="Slightly fatigued or tired" />
                        <FormControlLabel value="Moderately fatigued or tired" control={<Radio color="default" size="small" />} label="Moderately fatigued or tired" />
                        <FormControlLabel value="Very fatigued or tired" control={<Radio color="default" size="small" />} label="Very fatigued or tired" />
                        <FormControlLabel value="Extremely fatigued or tired" control={<Radio color="default" size="small" />} label="Extremely fatigued or tired" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how well were you able to concentrate or focus?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question32')}>
                        <FormControlLabel value="Very focused/attentive" control={<Radio color="default" size="small" />} label="Very focused/attentive" />
                        <FormControlLabel value="Moderately focused/attentive" control={<Radio color="default" size="small" />} label="Moderately focused/attentive" />
                        <FormControlLabel value="Neutral" control={<Radio color="default" size="small" />} label="Neutral" />
                        <FormControlLabel value="Moderately unfocused/distracted" control={<Radio color="default" size="small" />} label="Moderately unfocused/distracted" />
                        <FormControlLabel value="Very unfocused/distracted" control={<Radio color="default" size="small" />} label="Very unfocused/distracted" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how irritable or easily angered have you been?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question33')}>
                        <FormControlLabel value="Not irritable or easily angered at all" control={<Radio color="default" size="small" />} label="Not irritable or easily angered at all" />
                        <FormControlLabel value="Slightly irritable or easily angered" control={<Radio color="default" size="small" />} label="Slightly irritable or easily angered" />
                        <FormControlLabel value="Moderately irritable or easily angered" control={<Radio color="default" size="small" />} label="Moderately irritable or easily angered" />
                        <FormControlLabel value="Very irritable or easily angered" control={<Radio color="default" size="small" />} label="Very irritable or easily angered" />
                        <FormControlLabel value="Extremely irritable or easily angered" control={<Radio color="default" size="small" />} label="Extremely irritable or easily angered" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how lonely were you?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question34')}>
                        <FormControlLabel value="Not lonely at all" control={<Radio color="default" size="small" />} label="Not lonely at all" />
                        <FormControlLabel value="Slightly lonely" control={<Radio color="default" size="small" />} label="Slightly lonely" />
                        <FormControlLabel value="Moderately lonely" control={<Radio color="default" size="small" />} label="Moderately lonely" />
                        <FormControlLabel value="Very lonely" control={<Radio color="default" size="small" />} label="Very lonely" />
                        <FormControlLabel value="Extremely lonely" control={<Radio color="default" size="small" />} label="Extremely lonely" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                Please answer the following questions about your media use in the last 2 weeks:
            </div>
            <div className="section-title">
                During the past 2 weeks, how much time per day did you spend watching TV or digital media (e.g., Netflix, YouTube, web surfing)?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question35')}>
                        <FormControlLabel value="No TV or digital media" control={<Radio color="default" size="small" />} label="No TV or digital media" />
                        <FormControlLabel value="Under 1 hour" control={<Radio color="default" size="small" />} label="Under 1 hour" />
                        <FormControlLabel value="1-3 hours" control={<Radio color="default" size="small" />} label="1-3 hours" />
                        <FormControlLabel value="4-6 hours" control={<Radio color="default" size="small" />} label="4-6 hours" />
                        <FormControlLabel value="More than 6 hours" control={<Radio color="default" size="small" />} label="More than 6 hours" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how much time per day did you spend using social media (e.g., Facetime, Facebook, Instagram, Snapchat, Twitter, TikTok)?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question36')}>
                        <FormControlLabel value="No social media" control={<Radio color="default" size="small" />} label="No social media" />
                        <FormControlLabel value="Under 1 hour" control={<Radio color="default" size="small" />} label="Under 1 hour" />
                        <FormControlLabel value="1-3 hours" control={<Radio color="default" size="small" />} label="1-3 hours" />
                        <FormControlLabel value="4-6 hours" control={<Radio color="default" size="small" />} label="4-6 hours" />
                        <FormControlLabel value="More than 6 hours" control={<Radio color="default" size="small" />} label="More than 6 hours" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how much time per day did you spend playing video games?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question37')}>
                        <FormControlLabel value="No video games" control={<Radio color="default" size="small" />} label="No video games" />
                        <FormControlLabel value="Under 1 hour" control={<Radio color="default" size="small" />} label="Under 1 hour" />
                        <FormControlLabel value="1-3 hours" control={<Radio color="default" size="small" />} label="1-3 hours" />
                        <FormControlLabel value="4-6 hours" control={<Radio color="default" size="small" />} label="4-6 hours" />
                        <FormControlLabel value="More than 6 hours" control={<Radio color="default" size="small" />} label="More than 6 hours" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                Please answer the following questions about your substance use in the last 2 weeks:
            </div>
            <div className="section-title">
                During the past 2 weeks, how frequently did you use alcohol?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question38')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Rarely" control={<Radio color="default" size="small" />} label="Rarely" />
                        <FormControlLabel value="Occasionally" control={<Radio color="default" size="small" />} label="Occasionally" />
                        <FormControlLabel value="Often" control={<Radio color="default" size="small" />} label="Often" />
                        <FormControlLabel value="Regularly" control={<Radio color="default" size="small" />} label="Regularly" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how frequently did you vape?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question39')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Rarely" control={<Radio color="default" size="small" />} label="Rarely" />
                        <FormControlLabel value="Occasionally" control={<Radio color="default" size="small" />} label="Occasionally" />
                        <FormControlLabel value="Often" control={<Radio color="default" size="small" />} label="Often" />
                        <FormControlLabel value="Regularly" control={<Radio color="default" size="small" />} label="Regularly" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how frequently did you use cigarettes or other tobacco?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question40')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Rarely" control={<Radio color="default" size="small" />} label="Rarely" />
                        <FormControlLabel value="Occasionally" control={<Radio color="default" size="small" />} label="Occasionally" />
                        <FormControlLabel value="Often" control={<Radio color="default" size="small" />} label="Often" />
                        <FormControlLabel value="Regularly" control={<Radio color="default" size="small" />} label="Regularly" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how frequently did you use marijuana/cannabis?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question41')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Rarely" control={<Radio color="default" size="small" />} label="Rarely" />
                        <FormControlLabel value="Occasionally" control={<Radio color="default" size="small" />} label="Occasionally" />
                        <FormControlLabel value="Often" control={<Radio color="default" size="small" />} label="Often" />
                        <FormControlLabel value="Regularly" control={<Radio color="default" size="small" />} label="Regularly" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                During the past 2 weeks, how frequently did you use opiates, heroin, cocaine, crack, amphetamine, methamphetamine, hallucinogens, or ecstasy?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question42')}>
                        <FormControlLabel value="Not at all" control={<Radio color="default" size="small" />} label="Not at all" />
                        <FormControlLabel value="Rarely" control={<Radio color="default" size="small" />} label="Rarely" />
                        <FormControlLabel value="Occasionally" control={<Radio color="default" size="small" />} label="Occasionally" />
                        <FormControlLabel value="Often" control={<Radio color="default" size="small" />} label="Often" />
                        <FormControlLabel value="Regularly" control={<Radio color="default" size="small" />} label="Regularly" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                Please answer the following questions about your media use in the last 2 weeks:
            </div>
            <div className="section-title">
                Please describe anything else that concerns you about the impact of Coronavirus/COVID-19 on you, your friends, or your family.
            </div>
            <div className="input-block">
                <FormControl fullWidth>
                    <TextareaAutosize  
                        onBlur={handleTextField('question43')}
                        rowsMin={3}
                    />
                </FormControl>
            </div>
            <div className="section-title">
                Please provide any comments that you would like about this survey and/or related topics.
            </div>
            <div className="input-block">
                <FormControl fullWidth>
                    <TextareaAutosize  
                        onBlur={handleTextField('question44')}
                        rowsMin={3}
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

export default connect(null, mapDispatchToProps)(LifeChanges)