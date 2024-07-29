import { combineReducers, createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import ReducerConstants from "./ReducerConstants"
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = { key: 'root', storage: AsyncStorage, }

const initialTaskState = {
    tasks: ""
}
const taskReducer = (state = initialTaskState, action) => {
    switch (action.type) {
        case ReducerConstants.WATER_TASK:
            return { tasks: action.tasks }
    }
    return state
}


const rootReducer = combineReducers({ taskReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
