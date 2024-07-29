import ReducerConstants from "./ReducerConstants";

const ReducerAction = (dispatch) => {
    return {
        taskReducer: (tasks) => dispatch({ type: ReducerConstants.WATER_TASK, tasks: tasks }),
    }
}

export default ReducerAction