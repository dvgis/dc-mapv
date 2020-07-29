/*
 * @Author: Caven
 * @Date: 2020-01-14 18:22:10
 * @Last Modified by: Caven
 * @Last Modified time: 2020-07-29 16:36:42
 */

const install = function(DC) {
  if (!DC || !DC.init) {
    throw new Error('Mapv: Missing DC Base')
  }

  if (!DC.ready) {
    throw new Error('Mapv: Missing DC Core')
  }

  DC.init(() => {
    let mapv = require('mapv')
    DC.Namespace['mapv'] = mapv
    DC.MapvDataSet = mapv?.DataSet
    require('./Mapv.Loader')
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.DC) {
  install(DC)
}

module.exports = {
  install
}
