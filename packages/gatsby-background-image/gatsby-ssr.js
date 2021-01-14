"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

var generateHtml = function generateHtml(str) {
  return {
    __html: (0, _commonTags.oneLine)(str)
  };
};

var HeadComponents = [_react.default.createElement("style", {
  key: "my-script",
  "data-testid": "gbi",
  dangerouslySetInnerHTML: generateHtml(".gatsby-image-wrapper { content: 'TEST'; }")
})];

exports.onRenderBody = function (_ref) {
  var setHeadComponents = _ref.setHeadComponents;
  setHeadComponents(HeadComponents);
  console.log('HERE!!!!!');
};