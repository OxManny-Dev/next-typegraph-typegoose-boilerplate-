import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "@/lib/redux/slices/userSlice";
import {createWrapper} from "next-redux-wrapper";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';


const reducers = combineReducers({
  viewer: userReducer,
});
const makeStore = () => {
  return configureStore({
    reducer: reducers,
    devTools: true,
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>



export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
export const wrapper = createWrapper<AppStore>(makeStore);