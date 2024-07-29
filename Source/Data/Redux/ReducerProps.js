const ReducerProps = (state) => {
    return {
        tasks: state.taskReducer.tasks,
    }
}

export default ReducerProps