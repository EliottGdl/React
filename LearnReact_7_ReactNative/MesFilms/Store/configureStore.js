import { createStore,combineReducers } from 'redux';
import toggleFavorite from "./Reducer/favoriteReducer"
import changeAvatar from "./Reducer/avatarReducer";

export default createStore(combineReducers({toggleFavorite,changeAvatar}));