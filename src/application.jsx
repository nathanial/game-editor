import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Component from 'react-es6-component';
import {connect} from 'react-redux';
import editorApp, {store} from './state/app';

class Application extends Component {
  render(){
    return (
      <h1>Game Editor</h1>
    );
  }
}

function select(state){
  return {};
}

$(() => {
  const ConnectedApp = connect(select)(Application);
  ReactDOM.render(<ConnectedApp store={store}></ConnectedApp>, $(".app-container")[0]);
});
