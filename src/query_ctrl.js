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
 * @file query_ctrl.js
 * @author hq(haoqian@baidu.com)
 */
import _ from 'lodash';
import {QueryCtrl} from 'grafana/app/plugins/sdk';
import {constants} from './constant';

export class TsdbDatasourceQueryCtrl extends QueryCtrl {

    constructor($scope, $injector)  {
        super($scope, $injector);

        this.scope = $scope;

        this.datasource.metricFindQuery().then(metrics => {
            this.suggestMetrics = metrics;
        });

        if (!_.isEmpty(this.target.metric)) {
            this.metricTargetBlur();
        }

        this.suggestAggregatorNames = constants.suggestAggregatorNames;
        this.suggestAggregatorUnits = constants.suggestAggregatorUnits;
        this.showAggregator = {
            'sampling': false,
            'percentile': false,
            'divisor': false,
            'factor': false,
            'timeUnit': false
        };
        if (!this.target.aggregators) {
            this.target.aggregators = [];
        }
        this.suggestFillType = constants.suggestFillType;
        this.suggestFillUnits = constants.suggestFillUnits;
        this.target.fill = this.target.fill || {type: false};

        this.suggestCompareFlag = constants.suggestCompareFlag;
    }

    // addValueFilter
    addValueFilter() {
        this.addValueFilterMode = true;
        this.target.valueFilter = this.target.valueFilter || {
            compareFlag: '>'
        };
    }

    removeValueFilter() {
        this.addValueFilterMode = false;
        this.target.valueFilter = null;
        this.targetBlur();
    }

    // fill function
    fillTypeChange() {
        const fill = this.target.fill;
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

    metricTargetBlur() {
        const metric = this.target.metric;
        this.datasource.findTags(metric).then(tags => {
            // this.tags = {"tag1":['v1','v2'], "tag2":['v1','v2']}
            this.tags = tags;
            this.suggestTagKeys = [];
            if (!_.isEmpty(this.tags)) {
                this.suggestTagKeys = _.keys(this.tags);
            }
        });
        this.datasource.findFields(metric).then(fields =>{
            this.fields = fields;
            if (!_.isEmpty(this.fields)) {
                this.target.field = this.fields[0];
            }
            this.targetBlur();
        });
    }

    // get suggestTagValues
    tagBlur() {
        if (this.tags && this.target.currentTagKey) {
            this.suggestTagValues = this.tags[this.target.currentTagKey];
            // initial tag value
            if (!_.isEmpty(this.suggestTagValues)) {
                this.target.currentTagValue = this.target.currentTagValue
                    || this.suggestTagValues[0];
            }
        } else {
            this.suggestTagValues = [];
        }
    }

    getOptions(query) {
        return this.datasource.metricFindQuery(query || '');
    }

    async targetBlur() {
        this.panelCtrl.refresh(); // Asks the panel to refresh data.
    }

    addTag() {

        if (!this.addTagMode) {
            this.addTagMode = true;

            if (!this.target.currentTagKey
                && !_.isEmpty(this.suggestTagKeys)) {
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
        const index = _.indexOf(this.target.tags[this.target.currentTagKey], this.target.currentTagValue);
        if (index === -1) {
            this.target.tags[this.target.currentTagKey].push(this.target.currentTagValue);
        }
        this.target.currentTagKey = '';
        this.target.currentTagValue = '';
        this.targetBlur();

        this.addTagMode = false;
    }

    removeTag(key, value) {
        let values = this.target.tags[key];
        const index = values.indexOf(value);
        values.splice(index, 1);
        this.targetBlur();
    }

    editTag(key, value) {
        this.removeTag(key, value);
        this.target.currentTagKey = key;
        this.target.currentTagValue = value;
        this.tagBlur();
        this.addTag();
    }

    closeAddTagMode() {
        this.addTagMode = false;
    }

    aggregatorNameChange() {
        const aggregator = this.target.currentAggregator;
        // clear original value
        this.target.currentAggregator = {};
        this.target.currentAggregator.name = aggregator.name;
        const name = this.target.currentAggregator.name;

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
            this.target.currentAggregator.timeUnit = aggregator.timeUnit
            || this.suggestAggregatorUnits[0].value;
        } else if (name === 'Diff') {
            // now diff function no other parameter
            this.showAggregatorFields('Diff');
        } else {
            this.showAggregatorFields('sampling');
            this.target.currentAggregator.samplingValue = aggregator.samplingValue || 1;
            this.target.currentAggregator.samplingUnit = aggregator.samplingUnit
            || this.suggestAggregatorUnits[0].value;
        }
    }

    addAggregator() {
        if (!this.addAggregatorMode) {
            this.addAggregatorMode = true;
            // initializaion value
            if (!this.target.currentAggregator) {
                this.target.currentAggregator = {name: 'Avg'};
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

    closeAddAggregatorMode() {
        this.addAggregatorMode = false;
    }

    editAggregator(aggregator) {
        this.target.currentAggregator = aggregator;
        this.aggregatorNameChange();
        this.removeAggregator(aggregator);
        this.addAggregator();
    }

    removeAggregator(aggregator) {
        const index = this.target.aggregators.indexOf(aggregator);
        this.target.aggregators.splice(index, 1);
        this.targetBlur();
    }

    showAggregatorFields(show) {
        _.keys(this.showAggregator).forEach(item => {
            if (item === show) {
                this.showAggregator[item] = true;
            } else {
                this.showAggregator[item] = false;
            }
        });
    }

    addGroupTag() {
        if (!this.addGroupTagMode) {
            this.addGroupTagMode = true;
            if (!this.target.currentGroupTag
                && !_.isEmpty(this.suggestTagKeys)) {
                this.target.currentGroupTag = this.suggestTagKeys[0];
            }
            return;
        }

        if (!this.target.groupTags) {
            this.target.groupTags = [];
        }

        const index = _.indexOf(this.target.groupTags, this.target.currentGroupTag);
        if (index === -1) {
            this.target.groupTags.push(this.target.currentGroupTag);
        }
        this.target.currentGroupTag = '';
        this.targetBlur();

        this.addGroupTagMode = false;
    }

    editGroupTag(tag) {
        this.target.currentGroupTag = tag;
        this.removeGroupTag(tag);
        this.addGroupTag();
    }

    removeGroupTag(tag) {
        const index = this.target.groupTags.indexOf(tag);
        this.target.groupTags.splice(index, 1);
        this.targetBlur();
    }

    closeAddGroupTagMode() {
        this.addGroupTagMode = false;
    }

    aggregatorToString(aggregator) {
        let str = '';
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
}
TsdbDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';