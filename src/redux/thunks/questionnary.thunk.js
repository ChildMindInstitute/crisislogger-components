import config from '../../config'
import { 
    sumbitQuestionnaryData,
    sumbitQuestionnaryDataSuccess,
    sumbitQuestionnaryDataError
} from '../action/questionnary.action'


export const sumbitQuestionnaryDataThunk = (data) => dispatch => {
    dispatch(sumbitQuestionnaryData())

    let token  = localStorage.getItem('token')

    fetch(config.defaultApiHost+ '/users/questionnary', {
        method: "POST",
        headers: {
            'Content-type': 'application/json', 
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            questionnaryData: data
        })
    })
        .then(res => res.json())
        .then(res => dispatch(sumbitQuestionnaryDataSuccess()))
        .catch(err => dispatch(sumbitQuestionnaryDataError()))
}