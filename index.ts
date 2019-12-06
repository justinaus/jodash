import { getCanConvertNumber } from './src/number'
import { changeTo1000comma, getNumberAfterRemoveComma, decodeHTMLEntities, ellipsis, make00 } from './src/string'
import { downloadFile } from './src/file'
import { makeQueryStringByObject } from './src/url'

export {
  getCanConvertNumber,

  changeTo1000comma,
  getNumberAfterRemoveComma, 
  decodeHTMLEntities, 
  ellipsis, 
  make00,

  downloadFile,

  makeQueryStringByObject
}

console.log( getCanConvertNumber( '123123' ) );

console.log( getNumberAfterRemoveComma( '123,123' ) );

console.log( ellipsis( 'afdasdfadsfads', 4 ) );

console.log( make00( 7 ) );