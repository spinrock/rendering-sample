import { combineReducers } from 'redux';
import todoReducer from '@/entities/task/model/reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
