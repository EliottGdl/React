import { createStore,combineReducers } from 'redux';
import toggleFavorite from "./Reducer/favoriteReducer"
import {persistCombineReducers} from "redux-persist";
import changeAvatar from "./Reducer/avatarReducer";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
    key:"root",
    storage:storage,
}

export default createStore(persistCombineReducers(rootPersistConfig,
    {toggleFavorite,changeAvatar}));