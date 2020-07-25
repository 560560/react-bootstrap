const SET_TASK_STATUS = "taskList-reducer/SET-TASK-STATUS"
const SET_EDIT_MODE_ON = "taskList-reducer/SET-EDIT-MODE-ON"
const SET_EDIT_MODE_OFF = "taskList-reducer/SET-EDIT-MODE-OFF"
const DELETE_TASK = "taskList-reducer/DELETE-TASK"
const CHANGE_TASK_TEXT = "taskList-reducer/CHANGE-TASK-TEXT"
const SET_ORIGINAL_TEXT = "taskList-reducer/SET-ORIGINAL-TEXT"
const SET_NEW_TASK_TEXT = "taskList-reducer/SET-NEW-TASK-TEXT"

let initialState = {
    tasks: [
        {text: "Выучить JavaScript", isDone: false, editMode: false},
        {text: "Выучить React JS", isDone: true, editMode: false},
        {text: "Выучить Next JS", isDone: false, editMode: false}
    ],
    originalTextBeforeEditMode: null,
    tempTaskTextOfEditMode: null,
    errorMessage: null,
    globalEditMode: false
}


const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK_STATUS:
            return {
                ...state,
                tasks: [...state.tasks.map((task, i) => {
                    if (i === action.id) {
                        return {text: task.text, isDone: !task.isDone, editMode: false}
                    } else return task
                })]
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter((item, i) => i !== action.id)]
            }

        case SET_EDIT_MODE_ON:
            return {
                ...state, tasks: [...state.tasks.map((task, i) => {
                    if (i === action.id) {
                        return {text: task.text, isDone: task.isDone, editMode: true}
                    } else return task
                })],
                globalEditMode: true
            }
        case SET_EDIT_MODE_OFF:
            return {
                ...state,
                tasks: [...state.tasks.map((task, i) => {
                    if (i === action.id) {
                        return {text: task.text, isDone: task.isDone, editMode: false}
                    } else return task
                })],
                tempTaskTextOfEditMode: null,
                originalTextBeforeEditMode: null,
                globalEditMode: false
            }

        case CHANGE_TASK_TEXT:
            return {
                ...state, tempTaskTextOfEditMode: action.newText
            }
        case SET_ORIGINAL_TEXT:
            return {
                ...state, originalTextBeforeEditMode: action.originalText,
                tempTaskTextOfEditMode: action.originalText
            }
        case SET_NEW_TASK_TEXT:
            return {
                ...state, tasks: [...state.tasks.map((task, i) => {
                    if (i === action.id) {
                        return {text: state.tempTaskTextOfEditMode, isDone: task.isDone, editMode: task.editMode}
                    } else return task
                })]
            }
        default:
            return state;
    }
}

/* ACTION CREATORS  */


/* AC изменения статуса задачи */
export const setTaskStatus = (id) => {
    return {type: SET_TASK_STATUS, id}
}

/* AC удаления задачи */
export const deleteTask = (id) => {
    return {type: DELETE_TASK, id}
}

/* AC изменения editMode на true */
export const setEditModeON = (id) => {
    return {type: SET_EDIT_MODE_ON, id}
}

/* AC изменения editMode на true */
export const setEditModeOFF = (id ) => {
    return {type: SET_EDIT_MODE_OFF, id}
}

/* AC onChange обработчика */
export const taskTextChanger = (newText) => {
    return {type: CHANGE_TASK_TEXT, newText}
}

/* AC копирования текста задачи перед изменением */
const setOriginalText = (originalText) => {
    return {type: SET_ORIGINAL_TEXT, originalText}
}

/* AC установки временного значения текста задачи в постоянное */
const setNewTaskText = (id) => {
    return {type: SET_NEW_TASK_TEXT, id}
}



/* THUNK CREATORS  */

/* Активация режима изменения текста задачи*/
export const activateEditMode = (id, originalText) => (dispatch) => {
    if (!initialState.originalTextBeforeEditMode) {
        dispatch(setOriginalText(originalText))
    }
    dispatch(setEditModeON(id))

}

/* Записывает введенное временное знаяение текста задачи в текст Таски, выключает режим редактирования, обнуляя временные значения*/
export const setApplyChanges = (id) => (dispatch) => {
    dispatch (setNewTaskText(id))
    dispatch(setEditModeOFF(id))
}




export default taskListReducer;