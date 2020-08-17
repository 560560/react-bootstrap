export const getTasksSelector = (state) => {
    if (state.tasksPage.hideDoneTask) {
        return state.tasksPage.tasks.filter(task => task.isDone === false)

    }
    else return state.tasksPage.tasks
}