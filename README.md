# grafana-tsdb-datasource-plugin

本项目为BaiduTSDB对接grafana的数据源插件

# 安装

git clone 代码之后，将项目放在grafana插件目录下（Mac默认在/usr/local/var/lib/grafana/plugins）
可以通过编辑grafana.ini 文件来配置插件目录。（Mac默认在/usr/local/etc/grafana目录下）
```
[path]
plugins = <your plugins path>
```
项目自带了dist目录，可以直接放在grafana插件目录下，重启grafana服务即可使用。

如果对项目内容进行了修改，则需要进入到TSDB数据源插件项目根目录，对项目进行重新编译，打包，运行：
```
npm install
npm run build
```
重启grafana服务:
```
brew services restart grafana
```
# 使用

由于Grafana不支持百度云使用公钥和私钥（AK&SK）计算签名的鉴权方式，为保证用户AK和SK的安全，因此需要通过一个代理服务进行签名计算和请求转发。
使用之前需要先安装运行代理服务[grafana-tsdb-datasource-plugin-backend](https://github.com/baidu/grafana-tsdb-datasource-backend)。

按要求安装运行代理服务后，执行以下步骤：

1、访问：http://localhost:3000 登录grafana控制台（默认用户名admin，密码admin）

2、新建一个grafana数据源，Type 选择 BaiduTSDB，URL填写代理服务监听的地址，默认为：http://localhost:3333。在TSDB Settings 中 填写你要访问的数据库域名（可在百度云控制台查看）
信息输入完成后点击 Sava&Test 进行连接测试。

3、以上都配置成功后，您就可以在grafana中创建dashboard并开始使用了。

# F&Q

如果遇到 npm install 超时失败的问题，可以尝试使用阿里的npm源，或者直接安装cnpm
```
npm install cnpm -g
cnpm install
```
