'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.middleware = exports.action = exports.TYPE = undefined;

var _reduxActions = require('redux-actions');

var _reduxMiddlewareOneshot = require('redux-middleware-oneshot');

var _reduxMiddlewareOneshot2 = _interopRequireDefault(_reduxMiddlewareOneshot);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = exports.TYPE = 'REDUX_MIDDLEWARE_REACT_NATIVE_APPSTATE';
var action = exports.action = (0, _reduxActions.createAction)(TYPE);
var middleware = exports.middleware = (0, _reduxMiddlewareOneshot2.default)(function (dispatch) {
    var handle = function handle(state) {
        return dispatch(action(state.toLowerCase()));
    };
    handle(_reactNative.AppState.currentState);
    _reactNative.AppState.addEventListener('change', handle);
});