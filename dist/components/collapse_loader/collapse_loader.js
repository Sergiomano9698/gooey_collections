"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./collapse_loader.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function collapse_loader(props) {
  /*#__PURE__*/
  _react.default.createElement("style", null, ".Loader-blob::before {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: ".concat(props.bg_color, ";\n    border-radius: 50%;\n    position: absolute;\n    animation: yAxis 2.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64) 2.5s;\n}"));

  const loader_clr = {
    bg_clr: {
      background: props.bg_color,
      ':before': {
        background: props.bg_color
      },
      ':after': {
        background: props.bg_color
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "Loader"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "Loader-circle",
    style: loader_clr.bg_clr
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "Loader-blob"
  })), /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    styles: "display: none;"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("filter", {
    id: "tooltip-filter"
  }, /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    in: "SourceGraphic",
    stdDeviation: "9",
    result: "blur"
  }), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
    in: "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
    result: "goo"
  }), /*#__PURE__*/_react.default.createElement("feComposite", {
    in: "SourceGraphic",
    in2: "goo",
    operator: "atop"
  })))));
}

var _default = collapse_loader;
exports.default = _default;