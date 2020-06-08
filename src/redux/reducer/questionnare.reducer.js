import { CHANGE_INPUT, CHANGE_INPUT_MULTISELECT } from '../actionType';
import { multiSelectChecked } from '../../utisl/multiselect'


const initialState = {
    partOne: {
        title: 'Background',
        question1: {
            name: "What country do you live in?"
        },
        question2: {
            name: "What state do you live in?"
        },
        question3: {
            name: "What city do you live in?"
        },
        question4: {
            name: "Your date of birth?"
        },
        question5: {
            name: "Sex"
        },
        question6: {
            name: "Thinking about what you know of your family history, which of the following best describes the geographic regions where your ancestors (i.e. your great-great-grandparents) come from? You may select as many choices as you need.",
            value: []
        },
        question7: {
            name: "Are you of Hispanic or Latino descent -- that is, Mexican, Mexican American, Chicano, Puerto Rican, Cuban, South or Central American or other Spanish culture or origin?"
        },
        question8: {
            name: "Are you currently working or in school?"
        },
        question9: {
            name: "What is your occupation?"
        },
        question10: {
            name: "Have you served in the military?"
        },
        question11: {
            name: "What best describes the area you live in?"
        },
        question12: {
            name: "What is the highest level of education you completed?"
        },
        question13: {
            name: "What is the highest level of education your mother completed?"
        },
        question14: {
            name: "What is the highest level of education your father completed?"
        },
        question15: {
            name: "How many people currently live in your house (excluding yourself)?"
        },
        question16: {
            name: "How many rooms (total) are in your house?"
        },
        question17: {
            name: "Are you covered by health insurance?"
        },
        question18: {
            name: "In the 3 months prior to the Coronavirus/COVID-19 crisis in your area, did you or your family receive money from government assistance programs like welfare, Aid to Families with Dependent Children, General Assistance, or Temporary Assistance for Needy Families"
        },
        question19: {
            name: "How would you rate your overall physical health?"
        },
        question20: {
            name: "Has a health professional ever told you that you have had any of the following health conditions (check all that apply)?",
            value: []
        },
        question21: {
            name: "How would you rate your overall mental health before the COVID-19 crisis in your area?"
        },
    },
    partTwo: {
        title: 'Exposure',
        question1: {
            name: "During the past 2 weeks, have you been exposed to someone likely to have Coronavirus (COVID-19)? (check all that apply)",
            value: []
        },
        question2: {
            name: "During the past 2 weeks, have you been suspected of having COVID-19?"
        },
        question3: {
            name: "During the past 2 weeks, have you had any of the following symptoms? (check all that apply)",
            value: []
        },
        question4: {
            name: "During the past 2 weeks, has anyone in your family been diagnosed with COVID-19? (check all that apply)",
            value: []
        },
        question5: {
            name: "During the past 2 weeks, have any of the following happened to your family members because of COVID-19?",
            value: []
        },
        question6: {
            name: "During the past 2 weeks, how worried have you been about being infected?"
        },
        question7: {
            name: "During the past 2 weeks, how worried have your friends or family been about being infected?"
        },
        question8: {
            name: "During the past 2 weeks, how worried have your physical health been about being infected?"
        },
        question9: {
            name: "During the past 2 weeks, how worried have your mental/emotional health been about being infected?"
        },
        question10: {
            name: "During the past 2 weeks, how much are you reading, or talking about COVID-19?"
        },
        question11: {
            name: "During the past 2 weeks, has the COVID-19 crisis in your area led to any positive changes in your life?"
        },
        question12: {
            name: "If answered Only a few or Some to the last question, please specify"
        }
    },
    partThree: {
        title: 'Life changes',
        question1: {
            name: "During the past 2 weeks, if you attend school, has your school building been closed down?"
        },
        question2: {
            name: "Have classes resumed online?"
        },
        question3: {
            name: "Do you have easy access to the internet and a computer?"
        },
        question4: {
            name: "Are there assignments to complete?"
        },
        question5: {
            name: "Are you able to receive meals from the school?"
        },
        question6: {
            name: "Are classes in session?"
        },
        question7: {
            name: "Are you attending classes in person?"
        },
        question8: {
            name: "During the past 2 weeks, if you are working, has your workspace been closed?"
        },
        question9: {
            name: "During the past 2 weeks, have you been able to telework or work from home?"
        },
        question10: {
            name: "During the past 2 weeks, how many people outside your household have you had an in-person conversation with?"
        },
        question11: {
            name: "During the past 2 weeks, how much time have you spent going outside of the home (e.g., going to stores, parks, etc.)?"
        },
        question12: {
            name: "During the past 2 weeks, how stressful have the restrictions on leaving home been for you?"
        },
        question13: {
            name: "During the past 2 weeks, have your contacts with people outside of your home changed relative to before the Coronavirus/COVID-19 crisis in your area?"
        },
        question14: {
            name: "During the past 2 weeks, how much difficulty have you had following the recommendations for keeping away from close contact with people?"
        },
        question15: {
            name: "During the past 2 weeks, has the quality of the relationships between you and members of your family changed?"
        },
        question16: {
            name: "During the past 2 weeks, how stressful have these changes in family contacts been for you?"
        },
        question17: {
            name: "During the past 2 weeks, has the quality of your relationships with your friends changed?"
        },
        question18: {
            name: "During the past 2 weeks, how stressful have these changes in social contacts been for you?"
        },
        question19: {
            name: "During the past 2 weeks, how much has cancellation of important events (such as graduation, prom, vacation, etc.) in your life been difficult for you?"
        },
        question20: {
            name: "During the past 2 weeks, to what degree have changes related to the Coronavirus/COVID-19 crisis in your area created financial problems for you or your family?"
        },
        question21: {
            name: "During the past 2 weeks, to what degree are you concerned about the stability of your living situation?"
        },
        question22: {
            name: "During the past 2 weeks, did you worry whether your food would run out because of a lack of money?"
        },
        question23: {
            name: "During the past 2 weeks, how hopeful are you that the Coronavirus/COVID-19 crisis in your area will end soon?"
        },
        question24: {
            name: "During the past 2 weeks, how many hours per night did you sleep on average?"
        },
        question25: {
            name: "During the past 2 weeks, how many days per week did you exercise (e.g., increased heart rate, breathing) for at least 30 minutes?"
        },
        question26: {
            name: "During the past 2 weeks, how many days per week did you spend time outdoors?"
        },
        question27: {
            name: "During the past 2 weeks, how worried were you generally?"
        },
        question28: {
            name: "During the past 2 weeks, how happy versus sad were you?"
        },
        question29: {
            name: "During the past 2 weeks, how relaxed versus anxious were you?"
        },
        question30: {
            name: "During the past 2 weeks, how fidgety or restless were you?"
        },
        question31: {
            name: "During the past 2 weeks, how fatigued or tired were you?"
        },
        question32: {
            name: "During the past 2 weeks, how well were you able to concentrate or focus?"
        },
        question33: {
            name: "During the past 2 weeks, how irritable or easily angered have you been?"
        },
        question34: {
            name: "During the past 2 weeks, how lonely were you?"
        },
        question35: {
            name: "During the past 2 weeks, how much time per day did you spend watching TV or digital media (e.g., Netflix, YouTube, web surfing)?"
        },
        question36: {
            name: "During the past 2 weeks, how much time per day did you spend using social media (e.g., Facetime, Facebook, Instagram, Snapchat, Twitter, TikTok)?"
        },
        question37: {
            name: "During the past 2 weeks, how much time per day did you spend playing video games?"
        },
        question38: {
            name: "During the past 2 weeks, how frequently did you use alcohol?"
        },
        question39: {
            name: "During the past 2 weeks, how frequently did you vape?"
        },
        question40: {
            name: "During the past 2 weeks, how frequently did you use cigarettes or other tobacco?"
        },
        question41: {
            name: "During the past 2 weeks, how frequently did you use marijuana/cannabis?"
        },
        question42: {
            name: "During the past 2 weeks, how frequently did you use opiates, heroin, cocaine, crack, amphetamine, methamphetamine, hallucinogens, or ecstasy?"
        },
        question43: {
            name: "Please describe anything else that concerns you about the impact of Coronavirus/COVID-19 on you, your friends, or your family."
        },
        question44: {
            name: "Please provide any comments that you would like about this survey and/or related topics."
        },
    }
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case CHANGE_INPUT: 
            return {
                ...state,
                [payload.sectionName]: {
                    ...state[payload.sectionName],
                    [payload.inputName]: {
                        ...state[payload.sectionName][payload.inputName],
                        value: payload.value
                    } 
                }
            }
        case CHANGE_INPUT_MULTISELECT:
            return {
                ...state,
                [payload.sectionName]: {
                    ...state[payload.sectionName],
                    [payload.inputName]: {
                        ...state[payload.sectionName][payload.inputName],
                        value: multiSelectChecked(state[payload.sectionName][payload.inputName].value, payload.name)
                    } 
                }
            }
        default:
            return {
                ...state
            }
    }
}