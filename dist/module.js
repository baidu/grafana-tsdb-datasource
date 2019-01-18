define(["lodash","app/plugins/sdk","app/core/core"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_4__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright (c) 2018 Baidu, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @author hq
 */
var constants = exports.constants = {
    suggestAggregatorNames: ['Avg', 'Dev', 'First', 'Last', 'LeastSquares', 'Count', 'Max', 'Min', 'Percentile', 'Sum', 'Diff', 'Div', 'Scale', 'Rate', 'AdjacentUnique'],
    suggestAggregatorUnits: [{ name: '小时', value: 'hours' }, { name: '分钟', value: 'minutes' }, { name: '天', value: 'days' }, { name: '周', value: 'weeks' }, { name: '月', value: 'months' }, { name: '年', value: 'years' }, { name: '秒', value: 'seconds' }, { name: '毫秒', value: 'milliseconds' }],
    regions: ['bj', 'gz'],
    suggestFillType: [{ name: 'None', value: false }, { name: 'Linear', value: 'Linear' }, { name: 'Previous', value: 'Previous' }, { name: 'Fixed', value: 'Fixed' }],
    suggestFillUnits: [{ name: '秒', value: 'seconds' }, { name: '分钟', value: 'minutes' }, { name: '小时', value: 'hours' }],
    suggestCompareFlag: ['=', '!=', '>', '<', '>=', '<=']
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotationsQueryCtrl = exports.QueryOptionsCtrl = exports.ConfigCtrl = exports.QueryCtrl = exports.Datasource = undefined;

var _datasource = __webpack_require__(3);

var _query_ctrl = __webpack_require__(5);

var _config_ctrl = __webpack_require__(7);

var _TsdbQueryOptionsCtrl = __webpack_require__(8);

var _TsdbAnnotationsQueryCtrl = __webpack_require__(9);

exports.Datasource = _datasource.TsdbDatasource;
exports.QueryCtrl = _query_ctrl.TsdbDatasourceQueryCtrl;
exports.ConfigCtrl = _config_ctrl.TsdbConfigCtrl;
exports.QueryOptionsCtrl = _TsdbQueryOptionsCtrl.TsdbQueryOptionsCtrl;
exports.AnnotationsQueryCtrl = _TsdbAnnotationsQueryCtrl.TsdbAnnotationsQueryCtrl; /**
                                                                                    * Copyright (c) 2018 Baidu, Inc. All Rights Reserved.
                                                                                    *
                                                                                    * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
                                                                                    * the License. You may obtain a copy of the License at
                                                                                    *
                                                                                    * http://www.apache.org/licenses/LICENSE-2.0
                                                                                    *
                                                                                    * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
                                                                                    * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
                                                                                    * specific language governing permissions and limitations under the License.
                                                                                    *
                                                                                    * @author hq
                                                                                    */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TsdbDatasource = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2018 Baidu, Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * the License. You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * specific language governing permissions and limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author hq
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _core = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TsdbDatasource = exports.TsdbDatasource = function () {
    function TsdbDatasource(instanceSettings, $q, backendSrv, templateSrv) {
        _classCallCheck(this, TsdbDatasource);

        this.type = instanceSettings.type;
        this.url = instanceSettings.url;
        this.name = instanceSettings.name;
        this.q = $q;
        this.backendSrv = backendSrv;
        this.templateSrv = templateSrv;
        this.withCredentials = instanceSettings.withCredentials;
        this.headers = { 'Content-Type': 'application/json' };
        this.headers.endpoint = instanceSettings.jsonData.endpoint;
        if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
            this.headers['Authorization'] = instanceSettings.basicAuth;
        }
    }

    _createClass(TsdbDatasource, [{
        key: 'query',
        value: function query(options) {
            var _this = this;

            var query = this.bulidQueryParameter(options);
            if (!query || !query.queries || _lodash2.default.isEmpty(query.queries)) {
                return [];
            }

            return this.doRequest({
                url: '/v1/datapoint?query=' + JSON.stringify(query),
                method: 'GET'
            }).then(function (response) {
                var results = _this.convertQueryResult(response.data, options);
                response.data = results;
                return response;
            }).catch(function (response) {
                _core.appEvents.emit('alert-error', [response.data.message]);
            });
        }
    }, {
        key: 'testDatasource',
        value: function testDatasource() {
            return this.doRequest({
                url: '/v1/metric',
                method: 'GET'
            }).then(function (response) {
                if (response.status === 200) {
                    return {
                        status: 'success',
                        message: 'Data source is working',
                        title: 'Success'
                    };
                }
            });
        }
    }, {
        key: 'annotationQuery',
        value: function annotationQuery(options) {}
    }, {
        key: 'metricFindQuery',
        value: function metricFindQuery(query) {
            return this.doRequest({
                url: '/v1/metric',
                method: 'GET'
            }).then(function (response) {
                return response.data.metrics;
            });
        }
    }, {
        key: 'findFields',
        value: function findFields(metric) {
            return this.doRequest({
                url: '/v1/metric/' + metric + '/field',
                method: 'GET'
            }).then(function (response) {
                return _lodash2.default.keys(response.data.fields);
            });
        }
    }, {
        key: 'findTags',
        value: function findTags(metric) {
            return this.doRequest({
                url: '/v1/metric/' + metric + '/tag',
                method: 'GET'
            }).then(function (response) {
                return response.data.tags;
            });
        }
    }, {
        key: 'doRequest',
        value: function doRequest(options) {
            options.url = this.url + options.url;
            options.headers = this.headers;
            return this.backendSrv.datasourceRequest(options);
        }
    }, {
        key: 'bulidQueryParameter',
        value: function bulidQueryParameter(options) {
            if (!options || !options.targets) {
                return null;
            }
            var query = [];
            _lodash2.default.forEach(options.targets, function (target) {
                if (target.hide || !target.metric) {
                    return;
                }
                var groupBy = void 0;
                if (!_lodash2.default.isEmpty(target.groupTags)) {
                    groupBy = [{
                        name: 'Tag',
                        tags: target.groupTags
                    }];
                }
                var aggregators = void 0;
                if (!_lodash2.default.isEmpty(target.aggregators)) {
                    aggregators = _lodash2.default.map(target.aggregators, function (aggregator) {
                        var samplingValue = aggregator.samplingValue;
                        var samplingUnit = aggregator.samplingUnit;
                        var sampling = void 0;
                        if (samplingValue && samplingUnit) {
                            sampling = samplingValue + ' ' + samplingUnit;
                        }
                        return {
                            name: aggregator.name,
                            sampling: sampling,
                            percentile: aggregator.percentile,
                            divisor: aggregator.divisor,
                            factor: aggregator.factor,
                            timeUnit: aggregator.timeUnit
                        };
                    });
                }
                var fill = void 0;
                if (!_lodash2.default.isEmpty(target.fill) && target.fill.type) {
                    fill = {
                        type: target.fill.type,
                        interval: target.fill.intervalValue + ' ' + target.fill.intervalUnit
                    };
                    if (target.fill.type === 'Fixed') {
                        fill.value = target.fill.value;
                    } else {
                        fill.maxWriteInterval = target.fill.maxWriteIntervalValue + ' ' + target.fill.maxWriteIntervalUnit;
                    }
                }
                var valueFilter = void 0;
                if (!_lodash2.default.isEmpty(target.valueFilter)) {
                    valueFilter = target.valueFilter.compareFlag + ' ' + target.valueFilter.compareValue;
                }
                query.push({
                    metric: target.metric,
                    field: target.field,
                    aggregators: aggregators,
                    groupBy: groupBy,
                    fill: fill,
                    filters: {
                        value: valueFilter,
                        start: options.range.from.valueOf(),
                        end: options.range.to.valueOf(),
                        tags: target.tags
                    }
                });
            });
            return {
                queries: query
            };
        }
    }, {
        key: 'convertQueryResult',
        value: function convertQueryResult(queryRes, options) {
            var _this2 = this;

            if (!queryRes || !queryRes.results) {
                return [];
            }
            var data = [];
            _lodash2.default.forEach(queryRes.results, function (result, index) {
                // group will lead to have multiple time series in one query
                _lodash2.default.forEach(result.groups, function (group) {
                    var datapoints = _lodash2.default.map(group.values, function (value) {
                        return [value[1], value[0]];
                    });
                    data.push({
                        target: _this2.createTargetLabel(options, index, group.groupInfos[0]),
                        datapoints: datapoints
                    });
                });
            });
            return data;
        }
    }, {
        key: 'createTargetLabel',
        value: function createTargetLabel(options, index, groupInfo) {
            if (!options || !options.targets) {
                return null;
            }
            if (index >= options.targets.length) {
                return null;
            }
            var label = void 0;
            var target = options.targets[index];

            if (target.alias && target.alias.length > 0) {
                label = target.alias;
            } else {
                label = target.metric + '_' + index;
            }

            if (!_lodash2.default.isEmpty(groupInfo)) {
                _lodash2.default.forEach(groupInfo.tags, function (value, key) {
                    label += '/' + key + '_' + value;
                });
            }
            return label;
        }
    }]);

    return TsdbDatasource;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TsdbDatasourceQueryCtrl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _sdk = __webpack_require__(6);

var _constant = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2018 Baidu, Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the License. You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * specific language governing permissions and limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author hq
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TsdbDatasourceQueryCtrl = exports.TsdbDatasourceQueryCtrl = function (_QueryCtrl) {
    _inherits(TsdbDatasourceQueryCtrl, _QueryCtrl);

    function TsdbDatasourceQueryCtrl($scope, $injector) {
        _classCallCheck(this, TsdbDatasourceQueryCtrl);

        var _this = _possibleConstructorReturn(this, (TsdbDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(TsdbDatasourceQueryCtrl)).call(this, $scope, $injector));

        _this.scope = $scope;

        _this.datasource.metricFindQuery().then(function (metrics) {
            _this.suggestMetrics = metrics;
        });

        if (!_lodash2.default.isEmpty(_this.target.metric)) {
            _this.metricTargetBlur();
        }

        _this.suggestAggregatorNames = _constant.constants.suggestAggregatorNames;
        _this.suggestAggregatorUnits = _constant.constants.suggestAggregatorUnits;
        _this.showAggregator = {
            'sampling': false,
            'percentile': false,
            'divisor': false,
            'factor': false,
            'timeUnit': false
        };
        if (!_this.target.aggregators) {
            _this.target.aggregators = [];
        }
        _this.suggestFillType = _constant.constants.suggestFillType;
        _this.suggestFillUnits = _constant.constants.suggestFillUnits;
        _this.target.fill = _this.target.fill || { type: false };

        _this.suggestCompareFlag = _constant.constants.suggestCompareFlag;
        return _this;
    }

    // addValueFilter


    _createClass(TsdbDatasourceQueryCtrl, [{
        key: 'addValueFilter',
        value: function addValueFilter() {
            this.addValueFilterMode = true;
            this.target.valueFilter = this.target.valueFilter || {
                compareFlag: '>'
            };
        }
    }, {
        key: 'removeValueFilter',
        value: function removeValueFilter() {
            this.addValueFilterMode = false;
            this.target.valueFilter = null;
            this.targetBlur();
        }

        // fill function

    }, {
        key: 'fillTypeChange',
        value: function fillTypeChange() {
            var fill = this.target.fill;
            this.showFill = {};
            if (fill.type) {
                this.target.fill.intervalValue = this.target.fill.intervalValue || 5;
                this.target.fill.intervalUnit = this.target.fill.intervalUnit || 'hours';
                if (fill.type === 'Linear' || fill.type === 'Previous') {
                    this.showFill.linearOrPrevious = true;
                    this.target.fill.maxWriteIntervalValue = this.target.fill.maxWriteIntervalValue || 5;
                    this.target.fill.maxWriteIntervalUnit = this.target.fill.maxWriteIntervalUnit || 'hours';
                } else if (fill.type === 'Fixed') {
                    this.showFill.fixed = true;
                    this.target.fill.value = 1;
                }
            }
            this.targetBlur();
        }
        // end fill

    }, {
        key: 'metricTargetBlur',
        value: function metricTargetBlur() {
            var _this2 = this;

            var metric = this.target.metric;
            this.datasource.findTags(metric).then(function (tags) {
                // this.tags = {"tag1":['v1','v2'], "tag2":['v1','v2']}
                _this2.tags = tags;
                _this2.suggestTagKeys = [];
                if (!_lodash2.default.isEmpty(_this2.tags)) {
                    _this2.suggestTagKeys = _lodash2.default.keys(_this2.tags);
                }
            });
            this.datasource.findFields(metric).then(function (fields) {
                _this2.fields = fields;
                if (!_lodash2.default.isEmpty(_this2.fields)) {
                    _this2.target.field = _this2.fields[0];
                }
                _this2.targetBlur();
            });
        }

        // get suggestTagValues

    }, {
        key: 'tagBlur',
        value: function tagBlur() {
            if (this.tags && this.target.currentTagKey) {
                this.suggestTagValues = this.tags[this.target.currentTagKey];
                // initial tag value
                if (!_lodash2.default.isEmpty(this.suggestTagValues)) {
                    this.target.currentTagValue = this.target.currentTagValue || this.suggestTagValues[0];
                }
            } else {
                this.suggestTagValues = [];
            }
        }
    }, {
        key: 'getOptions',
        value: function getOptions(query) {
            return this.datasource.metricFindQuery(query || '');
        }
    }, {
        key: 'targetBlur',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.panelCtrl.refresh(); // Asks the panel to refresh data.

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function targetBlur() {
                return _ref.apply(this, arguments);
            }

            return targetBlur;
        }()
    }, {
        key: 'addTag',
        value: function addTag() {

            if (!this.addTagMode) {
                this.addTagMode = true;

                if (!this.target.currentTagKey && !_lodash2.default.isEmpty(this.suggestTagKeys)) {
                    this.target.currentTagKey = this.suggestTagKeys[0];
                    this.tagBlur();
                }
                return;
            }

            if (!this.target.tags) {
                this.target.tags = {};
            }

            if (!this.target.tags[this.target.currentTagKey]) {
                this.target.tags[this.target.currentTagKey] = [];
            }
            var index = _lodash2.default.indexOf(this.target.tags[this.target.currentTagKey], this.target.currentTagValue);
            if (index === -1) {
                this.target.tags[this.target.currentTagKey].push(this.target.currentTagValue);
            }
            this.target.currentTagKey = '';
            this.target.currentTagValue = '';
            this.targetBlur();

            this.addTagMode = false;
        }
    }, {
        key: 'removeTag',
        value: function removeTag(key, value) {
            var values = this.target.tags[key];
            var index = values.indexOf(value);
            values.splice(index, 1);
            this.targetBlur();
        }
    }, {
        key: 'editTag',
        value: function editTag(key, value) {
            this.removeTag(key, value);
            this.target.currentTagKey = key;
            this.target.currentTagValue = value;
            this.tagBlur();
            this.addTag();
        }
    }, {
        key: 'closeAddTagMode',
        value: function closeAddTagMode() {
            this.addTagMode = false;
        }
    }, {
        key: 'aggregatorNameChange',
        value: function aggregatorNameChange() {
            var aggregator = this.target.currentAggregator;
            // clear original value
            this.target.currentAggregator = {};
            this.target.currentAggregator.name = aggregator.name;
            var name = this.target.currentAggregator.name;

            // change view and initialization value
            if (name === 'Percentile') {
                this.showAggregatorFields('percentile');
                this.target.currentAggregator.percentile = aggregator.percentile || 0.1;
            } else if (name === 'Div') {
                this.showAggregatorFields('divisor');
                this.target.currentAggregator.divisor = aggregator.divisor || 1;
            } else if (name === 'Scale') {
                this.showAggregatorFields('factor');
                this.target.currentAggregator.factor = aggregator.factor || 1;
            } else if (name === 'Rate') {
                this.showAggregatorFields('timeUnit');
                this.target.currentAggregator.timeUnit = aggregator.timeUnit || this.suggestAggregatorUnits[0].value;
            } else if (name === 'Diff') {
                // now diff function no other parameter
                this.showAggregatorFields('Diff');
            } else {
                this.showAggregatorFields('sampling');
                this.target.currentAggregator.samplingValue = aggregator.samplingValue || 1;
                this.target.currentAggregator.samplingUnit = aggregator.samplingUnit || this.suggestAggregatorUnits[0].value;
            }
        }
    }, {
        key: 'addAggregator',
        value: function addAggregator() {
            if (!this.addAggregatorMode) {
                this.addAggregatorMode = true;
                // initializaion value
                if (!this.target.currentAggregator) {
                    this.target.currentAggregator = { name: 'Avg' };
                    this.aggregatorNameChange();
                }
                return;
            }

            if (!this.target.aggregators) {
                this.target.aggregators = [];
            }

            this.target.aggregators.push(this.target.currentAggregator);
            this.target.currentAggregator = {};
            this.targetBlur();

            this.addAggregatorMode = false;
        }
    }, {
        key: 'closeAddAggregatorMode',
        value: function closeAddAggregatorMode() {
            this.addAggregatorMode = false;
        }
    }, {
        key: 'editAggregator',
        value: function editAggregator(aggregator) {
            this.target.currentAggregator = aggregator;
            this.aggregatorNameChange();
            this.removeAggregator(aggregator);
            this.addAggregator();
        }
    }, {
        key: 'removeAggregator',
        value: function removeAggregator(aggregator) {
            var index = this.target.aggregators.indexOf(aggregator);
            this.target.aggregators.splice(index, 1);
            this.targetBlur();
        }
    }, {
        key: 'showAggregatorFields',
        value: function showAggregatorFields(show) {
            var _this3 = this;

            _lodash2.default.keys(this.showAggregator).forEach(function (item) {
                if (item === show) {
                    _this3.showAggregator[item] = true;
                } else {
                    _this3.showAggregator[item] = false;
                }
            });
        }
    }, {
        key: 'addGroupTag',
        value: function addGroupTag() {
            if (!this.addGroupTagMode) {
                this.addGroupTagMode = true;
                if (!this.target.currentGroupTag && !_lodash2.default.isEmpty(this.suggestTagKeys)) {
                    this.target.currentGroupTag = this.suggestTagKeys[0];
                }
                return;
            }

            if (!this.target.groupTags) {
                this.target.groupTags = [];
            }

            var index = _lodash2.default.indexOf(this.target.groupTags, this.target.currentGroupTag);
            if (index === -1) {
                this.target.groupTags.push(this.target.currentGroupTag);
            }
            this.target.currentGroupTag = '';
            this.targetBlur();

            this.addGroupTagMode = false;
        }
    }, {
        key: 'editGroupTag',
        value: function editGroupTag(tag) {
            this.target.currentGroupTag = tag;
            this.removeGroupTag(tag);
            this.addGroupTag();
        }
    }, {
        key: 'removeGroupTag',
        value: function removeGroupTag(tag) {
            var index = this.target.groupTags.indexOf(tag);
            this.target.groupTags.splice(index, 1);
            this.targetBlur();
        }
    }, {
        key: 'closeAddGroupTagMode',
        value: function closeAddGroupTagMode() {
            this.addGroupTagMode = false;
        }
    }, {
        key: 'aggregatorToString',
        value: function aggregatorToString(aggregator) {
            var str = '';
            if (aggregator.name) {
                str += aggregator.name;
            }
            if (aggregator.samplingValue) {
                str += '-' + aggregator.samplingValue;
            }
            if (aggregator.samplingUnit) {
                str += '-' + aggregator.samplingUnit;
            }
            if (aggregator.percentile) {
                str += '-' + aggregator.percentile;
            }
            if (aggregator.divisor) {
                str += '-' + aggregator.divisor;
            }
            if (aggregator.factor) {
                str += '-' + aggregator.factor;
            }
            if (aggregator.timeUnit) {
                str += '-' + aggregator.timeUnit;
            }
            return str;
        }
    }]);

    return TsdbDatasourceQueryCtrl;
}(_sdk.QueryCtrl);

TsdbDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TsdbConfigCtrl = undefined;

var _constant = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2018 Baidu, Inc. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
                                                                                                                                                           * the License. You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           * http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
                                                                                                                                                           * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
                                                                                                                                                           * specific language governing permissions and limitations under the License.
                                                                                                                                                           *
                                                                                                                                                           * @author hq
                                                                                                                                                           */


var TsdbConfigCtrl = exports.TsdbConfigCtrl = function TsdbConfigCtrl($scope, $injector) {
    _classCallCheck(this, TsdbConfigCtrl);

    this.suggestRegions = _constant.constants.regions;
};

TsdbConfigCtrl.templateUrl = 'partials/config.html';

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2018 Baidu, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @author hq
 */

var TsdbQueryOptionsCtrl = exports.TsdbQueryOptionsCtrl = function TsdbQueryOptionsCtrl() {
  _classCallCheck(this, TsdbQueryOptionsCtrl);
};

TsdbQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2018 Baidu, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @author hq
 */

var TsdbAnnotationsQueryCtrl = exports.TsdbAnnotationsQueryCtrl = function TsdbAnnotationsQueryCtrl() {
  _classCallCheck(this, TsdbAnnotationsQueryCtrl);
};

TsdbAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';

/***/ })
/******/ ])});;