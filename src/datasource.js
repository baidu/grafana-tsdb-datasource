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
 * @file datasource
 * @author hq(haoqian@baidu.com)
 */
import _ from 'lodash';
import {appEvents} from 'app/core/core';
export class TsdbDatasource {

    constructor(instanceSettings, $q, backendSrv, templateSrv) {
        this.type = instanceSettings.type;
        this.url = instanceSettings.url;
        this.name = instanceSettings.name;
        this.q = $q;
        this.backendSrv = backendSrv;
        this.templateSrv = templateSrv;
        this.withCredentials = instanceSettings.withCredentials;
        this.headers = {'Content-Type': 'application/json'};
        this.headers.endpoint = instanceSettings.jsonData.endpoint;
        if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
            this.headers['Authorization'] = instanceSettings.basicAuth;
        }
    }

    query(options) {
        const query = this.bulidQueryParameter(options);
        if (!query || !query.queries || _.isEmpty(query.queries)) {
            return [];
        }

        return this.doRequest({
            url: `/v1/datapoint?query=${JSON.stringify(query)}`,
            method: 'GET'
        }).then(response => {
            const results = this.convertQueryResult(response.data, options);
            response.data = results;
            return response;
        }).catch(response => {
            appEvents.emit('alert-error', [response.data.message]);
        });
    }

    testDatasource() {
        return this.doRequest({
            url: '/v1/metric',
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                return {
                    status: 'success',
                    message: 'Data source is working',
                    title: 'Success'
                };
            }
        });
    }

    annotationQuery(options) {
    }

    metricFindQuery(query) {
        return this.doRequest({
            url: '/v1/metric',
            method: 'GET'
        }).then(response => {
            return response.data.metrics;
        });
    }

    findFields(metric) {
        return this.doRequest({
            url: `/v1/metric/${metric}/field`,
            method: 'GET'
        }).then(response => {
            return _.keys(response.data.fields);
        });
    }

    findTags(metric) {
        return this.doRequest({
            url: `/v1/metric/${metric}/tag`,
            method: 'GET'
        }).then(response => {
            return response.data.tags;
        });
    }

    doRequest(options) {
        options.url = this.url + options.url;
        options.headers = this.headers;
        return this.backendSrv.datasourceRequest(options);
    }

    bulidQueryParameter(options) {
        if (!options || !options.targets) {
            return null;
        }
        let query = [];
        _.forEach(options.targets, target =>{
            if (target.hide || !target.metric) {
                return;
            }
            let groupBy;
            if (!_.isEmpty(target.groupTags)) {
                groupBy = [{
                    name: 'Tag',
                    tags: target.groupTags
                }];
            }
            let aggregators;
            if (!_.isEmpty(target.aggregators)) {
                aggregators = _.map(target.aggregators, aggregator => {
                    const samplingValue = aggregator.samplingValue;
                    const samplingUnit = aggregator.samplingUnit;
                    let sampling;
                    if (samplingValue && samplingUnit) {
                        sampling = `${samplingValue} ${samplingUnit}`;
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
            let fill;
            if (!_.isEmpty(target.fill) && target.fill.type) {
                fill = {
                    type: target.fill.type,
                    interval: `${target.fill.intervalValue} ${target.fill.intervalUnit}`
                };
                if (target.fill.type === 'Fixed') {
                    fill.value = target.fill.value;
                } else {
                    fill.maxWriteInterval = `${target.fill.maxWriteIntervalValue} ${target.fill.maxWriteIntervalUnit}`;
                }
            }
            let valueFilter;
            if (!_.isEmpty(target.valueFilter)) {
                valueFilter = `${target.valueFilter.compareFlag} ${target.valueFilter.compareValue}`;
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

    convertQueryResult(queryRes, options) {
        if (!queryRes || !queryRes.results) {
            return [];
        }
        let data = [];
        _.forEach(queryRes.results, (result, index) => {
            // group will lead to have multiple time series in one query
            _.forEach(result.groups, group => {
                const datapoints = _.map(group.values, value => {
                    return [value[1], value[0]];
                });
                data.push({
                    target: this.createTargetLabel(options, index, group.groupInfos[0]),
                    datapoints: datapoints
                });
            });
        });
        return data;
    }

    createTargetLabel(options, index, groupInfo) {
        if (!options || !options.targets) {
            return null;
        }
        if (index >= options.targets.length) {
            return null;
        }
        let label;
        const target = options.targets[index];

        if (target.alias && target.alias.length > 0) {
            label = target.alias;
        } else {
            label = `${target.metric}_${index}`;
        }

        if (!_.isEmpty(groupInfo)) {
            _.forEach(groupInfo.tags, (value, key) => {
                label += `/${key}_${value}`;
            });
        }
        return label;
    }
}
