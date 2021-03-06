/*
This file defines the main Redux Store. It will be required by all "smart" components in the app,
in our case Home and Hero.
*/

var Redux = require('redux'),
    doStuffReducer = require('./reducers/doStuff'),
	quizReducer = require('./reducers/quiz'),
    initialState = require('./initialstate');

var reducers = Redux.combineReducers({
    doStuff: doStuffReducer,
	quiz: quizReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;

