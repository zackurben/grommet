"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Example = function Example() {
  var _React$useState = _react["default"].useState(),
      active = _React$useState[0],
      setActive = _React$useState[1];

  return _react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_grommet.WorldMap, {
    places: [{
      name: 'Sydney',
      location: [-33.8830555556, 151.216666667],
      color: 'graph-1',
      onClick: function onClick() {
        return setActive(!active);
      }
    }]
  }), active && _react["default"].createElement(_grommet.Box, {
    margin: "large"
  }, "Sydney")));
};

(0, _react2.storiesOf)('WorldMap', module).add('Places', function () {
  return _react["default"].createElement(Example, null);
});