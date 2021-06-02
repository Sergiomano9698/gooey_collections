"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Loader.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "dot dot-1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "dot dot-2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "dot dot-3"
  })), /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("filter", {
    id: "goo"
  }, /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    in: "SourceGraphic",
    stdDeviation: "10",
    result: "blur"
  }), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
    in: "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
  })))));
}

var _default = Loader;
exports.default = _default;