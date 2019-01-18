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
export const constants = {
    suggestAggregatorNames: ['Avg', 'Dev', 'First', 'Last', 'LeastSquares', 'Count',
              'Max', 'Min', 'Percentile', 'Sum', 'Diff', 'Div', 'Scale', 'Rate', 'AdjacentUnique'
            ],
    suggestAggregatorUnits: [
            {name: '小时', value: 'hours'},
            {name: '分钟', value: 'minutes'},
            {name: '天', value: 'days'},
            {name: '周', value: 'weeks'},
            {name: '月', value: 'months'},
            {name: '年', value: 'years'},
            {name: '秒', value: 'seconds'},
            {name: '毫秒', value: 'milliseconds'}],
    regions: ['bj', 'gz'],
    suggestFillType: [
            {name: 'None', value: false},
            {name: 'Linear', value: 'Linear'},
            {name: 'Previous', value: 'Previous'},
            {name: 'Fixed', value: 'Fixed'}
        ],
    suggestFillUnits: [
            {name: '秒', value: 'seconds'},
            {name: '分钟', value: 'minutes'},
            {name: '小时', value: 'hours'}
        ],
    suggestCompareFlag: ['=', '!=', '>', '<', '>=', '<=']
};