import _ from 'underscore';
import {combineReducers} from 'redux';
import {createStore} from 'redux';

function getInitialState(){
  const text = localStorage.getItem('game-editor-store') || "{}";
  const storeJSON = JSON.parse(text);
  return storeJSON;
}

const saveState = _.debounce(() => {
  const state = store.getState();
  localStorage.setItem('game-editor-store', JSON.stringify(state));
}, 200);


export const editorApp = combineReducers({
  ui: function(){
    return {};
  }
});

export const store = createStore(editorApp, getInitialState());

store.subscribe(saveState);
