import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, RadioGroup, FormControl, FormControlLabel, Radio, FormGroup, TextField, Checkbox, Grid   } from '@material-ui/core'
import { Button } from 'react-bootstrap'
import csc from 'country-state-city'
import { changeInput, changeInputMultiselect } from '../../redux/action/questionnary.action'
import './style.scss'

const BackgroundQuestionnaire = ({ changeInput, nextStep, changeInputMultiselect }) => {
    const [country, setCountry] = useState(csc.getAllCountries())
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [familyHistory, setFamilyHistory] = useState([])
    const [gender, setGender] = useState(null)

    const handleCountry = (event) => {
        setStates(csc.getStatesOfCountry(event.target.value))
        const country = csc.getCountryById(event.target.value)
        changeInput('partOne', 'question1', country.name)
    }

    const handleState = (event) => {
        setCities(csc.getCitiesOfState(event.target.value))
        const state = csc.getStateById(event.target.value)
        changeInput('partOne', 'question2', state.name)
    }

    const handleCities = (event) => {
        const city = csc.getCityById(event.target.value)
        changeInput('partOne', 'question3', city.name)
    }

    const changeBirthday = (event) => {
        changeInput('partOne', 'question4', event.target.value)
    }

    const handleChangeGender = (event) => {
        setGender(event.target.value)
        changeInput('partOne', 'question5', event.target.value)
    }

    const changeSpecifycGender = (event) => {
        changeInput('partOne', 'question5', event.target.value)
    }

    const handleValueCheked = (questionName) => (event) => {
        changeInputMultiselect('partOne', questionName, event.target.name)
    }

    const handelRadioGroup = (questionName) => (event) => {
        changeInput('partOne', questionName, event.target.value)
    }

    const handleTextField = (questionName) => (event) => {
        changeInput('partOne', questionName, event.target.value)
    }

    return (
        <Container maxWidth="sm">
            <div className="section-title">
                For your recording to be really useful for scientific research, please provide some background information about yourself:
            </div>
            <div className="input-block">
                <div className="label">What country do you live in?</div>
                <FormControl fullWidth >
                    <TextField
                        select
                        label="Select Country"
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            native: true
                        }}
                        onChange={handleCountry}
                    >
                    {
                        country.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                        ))
                    }
                    </TextField>
                </FormControl>
            </div>
            <div className="input-block">
                <div className="label">What state do you live in?</div>
                <FormControl fullWidth >
                    <TextField
                        select
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            native: true
                        }}
                        onChange={handleState}
                    >
                        {
                            states.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                            ))
                        }
                    </TextField>
                </FormControl>
            </div>
            <div className="input-block">
                <div className="label">What city do you live in?</div>
                <FormControl fullWidth >
                    <TextField
                        select
                        variant="outlined"
                        size="small"
                        SelectProps={{
                            native: true
                        }}
                        onChange={handleCities}
                    >
                        {
                            cities.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                            ))
                        }
                    </TextField>
                </FormControl>
            </div>
            <div className="input-block">
                <div className="label">Your date of birth?</div>
                <FormControl fullWidth>
                    <TextField
                        id="date"
                        label="Select date"
                        type="date"
                        onChange={changeBirthday}
                        placeholder="Select Data"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
            </div>
            <div className="input-block">
                <div className="label">Sex</div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChangeGender}>
                        <FormControlLabel value="female" control={<Radio color="default" size="small" />} label="Female" />
                        <FormControlLabel value="male" control={<Radio color="default" size="small" />} label="Male" />
                        <FormControlLabel value="other" control={<Radio color="default" size="small" />} label="Other" />
                    </RadioGroup>
                </FormControl>
                { gender === 'other' && (
                    <div>
                        <div className="label">Other</div>
                        <FormControl fullWidth>
                            <TextField
                                variant="outlined"
                                onChange={changeSpecifycGender}
                                placeholder="Specify gender"
                            ></TextField>
                        </FormControl>
                    </div>
                    )
                }
            </div>
            <div className="section-title">
                Thinking about what you know of your family history, which of the following best describes the geographic regions where your ancestors (i.e. your great-great-grandparents) come from? You may select as many choices as you need.
            </div>
            <div className="input-block">
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="England, Ireland, Scotland or Wales"
                                color="default"
                            />}
                            label="England, Ireland, Scotland or Wales"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Australia – not of Aboriginal or Torres Strait Islander descent"
                                color="default"
                            />}
                            label="Australia – not of Aboriginal or Torres Strait Islander descent"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Australia – of Aboriginal or Torres Strait Islander descent"
                                color="default"
                            />}
                            label="Australia – of Aboriginal or Torres Strait Islander descent"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="New Zealand – not of Maori descent"
                                color="default"
                            />}
                            label="New Zealand – not of Maori descent"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="New Zealand – of Maori descent"
                                color="default"
                            />}
                            label="New Zealand – of Maori descent"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Northern Europe including Sweden, Norway, Finland and surrounding countries"
                                color="default"
                            />}
                            label="Northern Europe including Sweden, Norway, Finland and surrounding countries"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Western Europe including France, Germany, the Netherlands and surrounding countries"
                                color="default"
                            />}
                            label="Western Europe including France, Germany, the Netherlands and surrounding countries"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Southern Europe including Italy, Greece, Spain, Portugal and surrounding countries"
                                color="default"
                            />}
                            label="Southern Europe including Italy, Greece, Spain, Portugal and surrounding countries"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Middle East including Lebanon, Turkey and surrounding countries"
                                color="default"
                            />}
                            label="Middle East including Lebanon, Turkey and surrounding countries"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Eastern Asia including China, Japan, South Korea, North Korea, Taiwan and Hong Kong"
                                color="default"
                            />}
                            label="Eastern Asia including China, Japan, South Korea, North Korea, Taiwan and Hong Kong"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="South-East Asia including Thailand, Malaysia, Indonesia, Singapore and surrounding countries"
                                color="default"
                            />}
                            label="South-East Asia including Thailand, Malaysia, Indonesia, Singapore and surrounding countries"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="South Asia including India, Pakistan, Sri Lanka and surrounding countries"
                                color="default"
                            />}
                            label="South Asia including India, Pakistan, Sri Lanka and surrounding countries"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Polynesia, Micronesia or Melanesia including Tonga, Fiji, Papua New Guinea and surrounding countries"
                                color="default"
                            />}
                            label="Polynesia, Micronesia or Melanesia including Tonga, Fiji, Papua New Guinea and surrounding countries"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Africa"
                                color="default"
                            />}
                            label="Africa"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="North America - not of First Nations, Native American, Inuit or Métis descent"
                                color="default"
                            />}
                            label="North America - not of First Nations, Native American, Inuit or Métis descent"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="North America - of First Nations, Native American, Inuit or Métis descent"
                                color="default"
                            />}
                            label="North America - of First Nations, Native American, Inuit or Métis descent"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Don’t know"
                                color="default"
                            />}
                            label="Don’t know"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question6')}
                                name="Other"
                                color="default"
                            />}
                            label="Other"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div className="section-title">
                Are you of Hispanic or Latino descent -- that is, Mexican, Mexican American, Chicano, Puerto Rican, Cuban, South or Central American or other Spanish culture or origin?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question7')} row>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                Are you currently working or in school?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question8')}>
                        <FormControlLabel value="Working for pay" control={<Radio color="default" size="small" />} label="Working for pay" />
                        <FormControlLabel value="On leave" control={<Radio color="default" size="small" />} label="On leave" />
                        <FormControlLabel value="Unemployed and looking for a job" control={<Radio color="default" size="small" />} label="Unemployed and looking for a job" />
                        <FormControlLabel value="Retired" control={<Radio color="default" size="small" />} label="Retired" />
                        <FormControlLabel value="Staying at home/homemaker" control={<Radio color="default" size="small" />} label="Staying at home/homemaker" />
                        <FormControlLabel value="Disabled" control={<Radio color="default" size="small" />} label="Disabled" />
                        <FormControlLabel value="Enrolled in school/college/university" control={<Radio color="default" size="small" />} label="Enrolled in school/college/university" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                What is your occupation?
            </div>
            <div className="input-block">
                <FormControl fullWidth>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Enter occupation"
                        onChange={handleTextField('question9')}
                    />
                </FormControl>
            </div>
            <div className="section-title">
                Have you served in the military?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question10')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                What best describes the area you live in?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question11')}>
                        <FormControlLabel value="Large city" control={<Radio color="default" size="small" />} label="Large city" />
                        <FormControlLabel value="Suburbs of a large city" control={<Radio color="default" size="small" />} label="Suburbs of a large city" />
                        <FormControlLabel value="Small city" control={<Radio color="default" size="small" />} label="Small city" />
                        <FormControlLabel value="Town or village" control={<Radio color="default" size="small" />} label="Town or village" />
                        <FormControlLabel value="Rural area" control={<Radio color="default" size="small" />} label="Rural area" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                What is the highest level of education you completed?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question12')}>
                        <FormControlLabel value="Some grade school" control={<Radio color="default" size="small" />} label="Some grade school" />
                        <FormControlLabel value="Some high school" control={<Radio color="default" size="small" />} label="Some high school" />
                        <FormControlLabel value="High school diploma or GED" control={<Radio color="default" size="small" />} label="High school diploma or GED" />
                        <FormControlLabel value="Some college of 2 year degree" control={<Radio color="default" size="small" />} label="Some college of 2 year degree" />
                        <FormControlLabel value="4 year college degree" control={<Radio color="default" size="small" />} label="4 year college degree" />
                        <FormControlLabel value="Some school beyond college" control={<Radio color="default" size="small" />} label="Some school beyond college" />
                        <FormControlLabel value="Graduate or professional degree" control={<Radio color="default" size="small" />} label="Graduate or professional degree" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                What is the highest level of education your mother completed?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question13')}>
                        <FormControlLabel value="Some grade school" control={<Radio color="default" size="small" />} label="Some grade school" />
                        <FormControlLabel value="Some high school" control={<Radio color="default" size="small" />} label="Some high school" />
                        <FormControlLabel value="High school diploma or GED" control={<Radio color="default" size="small" />} label="High school diploma or GED" />
                        <FormControlLabel value="Some college of 2 year degree" control={<Radio color="default" size="small" />} label="Some college of 2 year degree" />
                        <FormControlLabel value="4 year college degree" control={<Radio color="default" size="small" />} label="4 year college degree" />
                        <FormControlLabel value="Some school beyond college" control={<Radio color="default" size="small" />} label="Some school beyond college" />
                        <FormControlLabel value="Graduate or professional degree" control={<Radio color="default" size="small" />} label="Graduate or professional degree" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                What is the highest level of education your father completed?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="culture" name="culture" onChange={handelRadioGroup('question14')}>
                        <FormControlLabel value="Some grade school" control={<Radio color="default" size="small" />} label="Some grade school" />
                        <FormControlLabel value="Some high school" control={<Radio color="default" size="small" />} label="Some high school" />
                        <FormControlLabel value="High school diploma or GED" control={<Radio color="default" size="small" />} label="High school diploma or GED" />
                        <FormControlLabel value="Some college of 2 year degree" control={<Radio color="default" size="small" />} label="Some college of 2 year degree" />
                        <FormControlLabel value="4 year college degree" control={<Radio color="default" size="small" />} label="4 year college degree" />
                        <FormControlLabel value="Some school beyond college" control={<Radio color="default" size="small" />} label="Some school beyond college" />
                        <FormControlLabel value="Graduate or professional degree" control={<Radio color="default" size="small" />} label="Graduate or professional degree" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                How many people currently live in your house (excluding yourself)?
            </div>
            <div className="input-block">
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        variant="outlined"
                        onChange={handleTextField('question15')}
                    />
                </FormControl>
            </div>
            <div className="section-title">
                How many rooms (total) are in your house?
            </div>
            <div className="input-block">
                <FormControl fullWidth>
                    <TextField
                        variant="outlined"
                        size="small"
                        onChange={handleTextField('question16')}
                    />
                </FormControl>
            </div>
            <div className="section-title">
                Are you covered by health insurance?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question17')}>
                        <FormControlLabel value="Yes, military" control={<Radio color="default" size="small" />} label="Yes, military" />
                        <FormControlLabel value="Yes, employer sponsored" control={<Radio color="default" size="small" />} label="Yes, employer sponsored" />
                        <FormControlLabel value="Yes, individual" control={<Radio color="default" size="small" />} label="Yes, individual" />
                        <FormControlLabel value="Yes, Medicare" control={<Radio color="default" size="small" />} label="Yes, Medicare" />
                        <FormControlLabel value="Yes, Medicaid or CHIP" control={<Radio color="default" size="small" />} label="Yes, Medicaid or CHIP" />
                        <FormControlLabel value="Yes, other" control={<Radio color="default" size="small" />} label="Yes, other" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                In the 3 months prior to the Coronavirus/COVID-19 crisis in your area, did you or your family receive money from government assistance programs like welfare, Aid to Families with Dependent Children, General Assistance, or Temporary Assistance for Needy Families
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" row onChange={handelRadioGroup('question18')}>
                        <FormControlLabel value="Yes" control={<Radio color="default" size="small" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="default" size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                How would you rate your overall physical health?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question19')}>
                        <FormControlLabel value="Excellent" control={<Radio color="default" size="small" />} label="Excellent" />
                        <FormControlLabel value="Very Good" control={<Radio color="default" size="small" />} label="Very Good" />
                        <FormControlLabel value="Good" control={<Radio color="default" size="small" />} label="Good" />
                        <FormControlLabel value="Fair" control={<Radio color="default" size="small" />} label="Fair" />
                        <FormControlLabel value="Poor" control={<Radio color="default" size="small" />} label="Poor" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="section-title">
                Has a health professional ever told you that you have had any of the following health conditions (check all that apply)?
            </div>
            <div className="input-block">
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Seasonal allergies"
                                color="default"
                            />}
                            label="Seasonal allergies"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Asthma or other lung problems"
                                color="default"
                            />}
                            label="Asthma or other lung problems"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Heart Problems"
                                color="default"
                            />}
                            label="Heart Problems"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Kidney Problems"
                                color="default"
                            />}
                            label="Kidney Problems"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Immune disorder"
                                color="default"
                            />}
                            label="Immune disorder"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Diabetes or high blood sugar"
                                color="default"
                            />}
                            label="Diabetes or high blood sugar"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Cancer"
                                color="default"
                            />}
                            label="Cancer"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Arthritis"
                                color="default"
                            />}
                            label="Arthritis"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Frequent or very bad headaches"
                                color="default"
                            />}
                            label="Frequent or very bad headaches"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Epilepsy or seizures"
                                color="default"
                            />}
                            label="Epilepsy or seizures"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Serious stomach or bowel problems"
                                color="default"
                            />}
                            label="Serious stomach or bowel problems"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Serious acne or skin problems"
                                color="default"
                            />}
                            label="Serious acne or skin problems"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Emotional or mental health problems such as Depression or Anxiety"
                                color="default"
                            />}
                            label="Emotional or mental health problems such as Depression or Anxiety"
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                onChange={handleValueCheked('question20')}
                                name="Problems with alcohol or drugs"
                                color="default"
                            />}
                            label="Problems with alcohol or drugs"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div className="section-title">
                How would you rate your overall mental health before the COVID-19 crisis in your area?
            </div>
            <div className="input-block">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="military" name="military" onChange={handelRadioGroup('question21')}>
                        <FormControlLabel value="Excellent" control={<Radio color="default" size="small" />} label="Excellent" />
                        <FormControlLabel value="Very Good" control={<Radio color="default" size="small" />} label="Very Good" />
                        <FormControlLabel value="Good" control={<Radio color="default" size="small" />} label="Good" />
                        <FormControlLabel value="Fair" control={<Radio color="default" size="small" />} label="Fair" />
                        <FormControlLabel value="Poor" control={<Radio color="default" size="small" />} label="Poor" />
                    </RadioGroup>
                </FormControl>
            </div>
            <Grid container justify="flex-end" >
                <Button onClick={nextStep}>Next step</Button>
            </Grid>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    changeInput: bindActionCreators(changeInput, dispatch),
    changeInputMultiselect: bindActionCreators(changeInputMultiselect, dispatch)
})

export default connect(null, mapDispatchToProps)(BackgroundQuestionnaire)