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
 * @file module
 * @author hq(haoqian@baidu.com)
 */
import {TsdbDatasource} from './datasource';
import {TsdbDatasourceQueryCtrl} from './query_ctrl';
import {TsdbConfigCtrl} from './config_ctrl';
import {TsdbQueryOptionsCtrl} from './TsdbQueryOptionsCtrl';
import {TsdbAnnotationsQueryCtrl} from './TsdbAnnotationsQueryCtrl';

export {
    TsdbDatasource as Datasource,
    TsdbDatasourceQueryCtrl as QueryCtrl,
    TsdbConfigCtrl as ConfigCtrl,
    TsdbQueryOptionsCtrl as QueryOptionsCtrl,
    TsdbAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
