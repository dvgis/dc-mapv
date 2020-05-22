# DC-Mapv

[**🇨🇳 中文**](./README_zh.md) | [**🇬🇧English**](./)

> DC-Mapv 是 DC-SDK 与 百度 Mapv 融合的产品。主要用于在 3D 场景中展现大数据。

> [home](http://dc.dvgis.cn)

```warning
Tips：This SDK is JS+GIS framework package. Developers need to have some front-end technology and GIS related technology
```

## 安装

> CDN

```html
<!--基础包-->
<script src="libs/dc-sdk/dc.base.min.js"></script>
<!--核心包-->
<script src="libs/dc-sdk/dc.core.min.js"></script>
<!--Mapv 包-->
<script src="libs/dc-sdk/dc.mapv.min.js"></script>
<!--插件包-->
<script src="libs/dc-sdk/plugins/dc.plugins.min.js"></script>
<!--主要样式-->
<link href="libs/dc-sdk/dc.core.min.css" rel="stylesheet" type="text/css" />
```

> NPM / YARN

```node
   yarn add @dvgis/dc-sdk  @dvgis/dc-mapv @dvgis/dc-plugins
   npm install @dvgis/dc-sdk  @dvgis/dc-mapv @dvgis/dc-plugins
```

```js
import 'dvgis/dc-sdk/dist/dc.base.min' //基础包
import 'dvgis/dc-sdk/dist/dc.core.min' //核心包
import 'dvgis/dc-mapv/dist/dc.plugins.min' //Mapv 包
import 'dvgis/dc-plugins/dist/dc.plugins.min' //插件包
import 'dvgis/dc-sdk/dist/dc.core.min.css' // 主要样式
```

## 配置

> Vue

```js
// vue.config.js

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgis = './node_modules/@dvgis'

module.exports = {
  // other settings
  chainWebpack: (config) => {
    config.resolve.alias.set('dvgis', path.resolve(__dirname, dvgisDist))
    config.plugin('copy').use(CopywebpackPlugin, [
      [
        {
          from: path.join(dvgisDist, 'dc-sdk/dist/resources'),
          to: 'libs/dc-sdk/resources',
        },
      ],
    ])
  },
}
```

## 文档

[Cesium Api](https://cesium.com/docs/cesiumjs-ref-doc/)

[Mapv Api](https://github.com/huiyan-fe/mapv/blob/master/API.md)

[DC-Mapv Api](http://resource.dvgis.cn/dc-api/mapv/)

## 示例

|   ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_point.png)    |  ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_point_d.gif)   |   ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_point_i.png)   |   ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_grid.png)   |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: |
|   ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_grid_d.gif)   | ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_honeycomb.png)  | ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_honeycomb_d.gif) | ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_polyline.png) |
| ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_polyline_d.gif) | ![pic](https://raw.githubusercontent.com/Digital-Visual/dc-sdk-examples/master/images/datav/m_polyline_i.png) |                                                                                                                |

[More>>](http://dc.dvgis.cn/#/examples)

## Copyright statement

```warning
1. The framework is a basic platform, completely open source, which can be modified and reconstructed by any individual or institution without our authorization.
2. A series of targeted plug-ins and tools will be added later, and an appropriate amount of open source.
3. Free and permanent use by any person or institution subject to the following conditions:
  1) complete package reference;
  2) reserve this copyright information in the console output
We reserve the right of final interpretation of this copyright information.
```

## Thanks
