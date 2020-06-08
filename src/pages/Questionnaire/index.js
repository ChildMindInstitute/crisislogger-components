import React from 'react'
import { Box, Tabs, Tab, Container, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BackgroundQuestionnaire from './BackgroundQuestionnaire'
import { Button } from 'react-bootstrap'
import Exposure from './Exposure'
import LifeChanges from './LifeChanges'
import TabPanel from './TabPanel'
import { sumbitQuestionnaryDataThunk } from '../../redux/thunks/questionnary.thunk'

class Questionnaire extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabValue: 0
        }
    }

    changeTab = (event, newValue) => {
        this.setState({ tabValue: newValue })
    }

    changeStep = (index) => () => {
        this.setState({ tabValue: index })
        window.scrollTo(0, 0)
    } 

    submitQuestionaryData = () => {
        this.props.sumbitQuestionnaryData(this.props.questionnaryData)
    }

    render() {
        const { tabValue } = this.state

        return (
            <Container>
                    <Tabs 
                        onChange={this.changeTab}
                        value={tabValue}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        transition="fasle"
                    >
                        <Tab label="1. Background" value={0} />
                        <Tab label="2. Exposure" value={1} />
                        <Tab label="3. Life Changes" value={2} />
                        <Tab label="4. Submit" value={3} />
                    </Tabs>
                    <TabPanel value={tabValue} index={0}> 
                        <BackgroundQuestionnaire nextStep={this.changeStep(1)} /> 
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        <Exposure nextStep={this.changeStep(2)} previousStep={this.changeStep(0)}/>
                    </TabPanel>
                    <TabPanel value={tabValue} index={2}> 
                        <LifeChanges nextStep={this.changeStep(3)} previousStep={this.changeStep(1)} />
                    </TabPanel>
                    <TabPanel value={tabValue} index={3}> 
                        <Container maxWidth="sm">
                            <div className="section-title">
                                Please ensure the information you have added is correct and to the best of your knowledge.
                            </div>
                            <div className="section-title">
                                Thank you for your cooperation!
                            </div>
                            <Grid container justify="space-between" className="input-block" >
                                <Button onClick={this.changeStep(2)} variant="light">PREVIOUS</Button>
                                <Button variant="success" onClick={this.submitQuestionaryData}>SUBMIT</Button>
                            </Grid>
                        </Container>
                    </TabPanel>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    questionnaryData: state.questionnary
}) 

const mapDispatchToProps = dispatch => ({
    sumbitQuestionnaryData: bindActionCreators(sumbitQuestionnaryDataThunk, dispatch) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire)