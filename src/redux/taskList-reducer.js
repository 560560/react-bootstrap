const SET_TASK_STATUS = "taskList-reducer/SET-TASK-STATUS";
const SET_EDIT_MODE_ON = "taskList-reducer/SET-EDIT-MODE-ON";
const SET_EDIT_MODE_OFF = "taskList-reducer/SET-EDIT-MODE-OFF";
const DELETE_TASK = "taskList-reducer/DELETE-TASK";
const CHANGE_TASK_TEXT = "taskList-reducer/CHANGE-TASK-TEXT";
const SET_ORIGINAL_TEXT = "taskList-reducer/SET-ORIGINAL-TEXT";
const SET_NEW_TASK_TEXT = "taskList-reducer/SET-NEW-TASK-TEXT";
const SET_NEW_TASK = "taskList-reducer/SET-NEW-TASK";
const SET_ERROR_MESSAGE = "taskList-reducer/SET-ERROR-MESSAGE";
const SET_CHOSEN_TASK = "taskList-reducer/SET-CHOSEN-TASK";
const SET_HIDE_DONE_TASK = "taskList-reducer/SET-HIDE-DONE-TASK";

let initialState = {
  tasks: [
    { id: 0, text: "To learn JavaScript", isDone: true, editMode: false },
    { id: 1, text: "To learn React JS", isDone: true, editMode: false },
    { id: 2, text: "To learn Next JS", isDone: false, editMode: false },
    {
      id: 3,
      text: "Get a job as a Front-end developer",
      isDone: false,
      editMode: false,
    },
    { id: 4, text: "To do something", isDone: false, editMode: false },
  ],
  originalTextBeforeEditMode: null,
  tempTaskTextOfEditMode: null,
  errorMessage: null,
  globalEditMode: false,
  addNewTaskMode: false,
  chosenTask: null,
  hideDoneTask: false,
  idCounter: 4,
};

const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_STATUS:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === action.id) {
              return {
                id: action.id,
                text: task.text,
                isDone: !task.isDone,
                editMode: false,
              };
            } else return task;
          }),
        ],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.id)],
        chosenTask: null,
      };

    case SET_EDIT_MODE_ON:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === action.id) {
              return {
                id: action.id,
                text: task.text,
                isDone: task.isDone,
                editMode: true,
              };
            } else return task;
          }),
        ],
        globalEditMode: true,
      };
    case SET_EDIT_MODE_OFF:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === action.id) {
              return {
                id: action.id,
                text: task.text,
                isDone: task.isDone,
                editMode: false,
              };
            } else return task;
          }),
        ],
        tempTaskTextOfEditMode: null,
        originalTextBeforeEditMode: null,
        globalEditMode: false,
        errorMessage: null,
      };

    case CHANGE_TASK_TEXT:
      return {
        ...state,
        tempTaskTextOfEditMode: action.newText,
      };
    case SET_ORIGINAL_TEXT:
      return {
        ...state,
        originalTextBeforeEditMode: action.originalText,
        tempTaskTextOfEditMode: action.originalText,
      };
    case SET_NEW_TASK_TEXT:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === action.id) {
              return {
                id: action.id,
                text: state.tempTaskTextOfEditMode,
                isDone: task.isDone,
                editMode: task.editMode,
              };
            } else return task;
          }),
        ],
      };
    case SET_NEW_TASK:
      const newTask = {
        id: ++state.idCounter,
        text: undefined,
        isDone: false,
        editMode: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        addNewTaskMode: true,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.error,
      };

    case SET_CHOSEN_TASK:
      return {
        ...state,
        chosenTask: action.id,
      };
    case SET_HIDE_DONE_TASK:
      return {
        ...state,
        hideDoneTask: action.needToHide,
      };
    default:
      return state;
  }
};

/* ACTION CREATORS  */

/* AC изменения статуса задачи */
export const setTaskStatus = (id) => {
  return { type: SET_TASK_STATUS, id };
};

/* AC удаления задачи */
export const deleteTask = (id) => {
  return { type: DELETE_TASK, id };
};

/* AC изменения editMode на true */
export const setEditModeON = (id) => {
  return { type: SET_EDIT_MODE_ON, id };
};

/* AC изменения editMode на true */
export const setEditModeOFF = (id) => {
  return { type: SET_EDIT_MODE_OFF, id };
};

/* AC onChange обработчика */
export const taskTextChanger = (newText) => {
  return { type: CHANGE_TASK_TEXT, newText };
};

/* AC копирования текста задачи перед изменением */
const setOriginalText = (originalText) => {
  return { type: SET_ORIGINAL_TEXT, originalText };
};

/* AC установки временного значения текста задачи в постоянное */
const setNewTaskText = (id) => {
  return { type: SET_NEW_TASK_TEXT, id };
};

/* AC добавления нового пустого сообщения и включения режима добавления нового сообщения */
export const setNewTask = () => {
  return { type: SET_NEW_TASK };
};

/* AC добавления сообщения об ошибке */
const setErrorMessage = (error) => {
  return { type: SET_ERROR_MESSAGE, error };
};

/* AC фиксирует id выбранной задачи в режиме ширины экрана до 620 пикселей */
export const setChosenTask = (id = null) => {
  return { type: SET_CHOSEN_TASK, id };
};

/* AC  */
export const setHideDoneTask = (needToHide) => {
  return { type: SET_HIDE_DONE_TASK, needToHide };
};

/* THUNK CREATORS  */

/* Активация режима изменения текста задачи*/
export const activateEditMode = (id, originalText = "") => (
  dispatch,
  getState
) => {
  if (getState().tasksPage.addNewTaskMode) {
    dispatch(setOriginalText(originalText));
    dispatch(setEditModeON(id + 1));
  } else dispatch(setOriginalText(originalText));
  dispatch(setEditModeON(id));
};

/* Записывает введенное временное значение текста задачи в текст Таски, выключает режим редактирования, обнуляя временные значения*/
export const setApplyChanges = (id) => (dispatch, getState) => {
  const tempText = getState().tasksPage.tempTaskTextOfEditMode;

  if (
    getState().tasksPage.tempTaskTextOfEditMode === null ||
    getState().tasksPage.tempTaskTextOfEditMode === ""
  ) {
    dispatch(setErrorMessage("Task text can't be an empty"));
  } else if (
    tempText.match(/\s/g) &&
    tempText.match(/\s/g).length === tempText.length
  ) {
    dispatch(setErrorMessage("Task text must contain some words"));
  } else {
    dispatch(setNewTaskText(id));
    dispatch(setEditModeOFF(id));
    dispatch(setErrorMessage(null));
    dispatch(setChosenTask());
  }
};

//Добавляет новую пустую задачу и включает режим редактирования
export const addNewTask = () => (dispatch, getState) => {
  const newTaskId = getState().tasksPage.idCounter + 1;
  dispatch(setNewTask());
  dispatch(activateEditMode(newTaskId));
  dispatch(setChosenTask(newTaskId));
};

//Отменяет режим редактирования задания
export const setCancelEdition = (id) => (dispatch, getState) => {
  if (getState().tasksPage.addNewTaskMode) {
    dispatch(deleteTask(id));
    dispatch(setEditModeOFF(id));
  } else dispatch(setEditModeOFF(id));
};

export default taskListReducer;
