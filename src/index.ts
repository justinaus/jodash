// const add = (a: number, b: number) => a + b;

// export {
//   add
// }


import { getCanConvertNumber } from './number'
import { changeTo1000comma, getNumberAfterRemoveComma, decodeHTMLEntities, ellipsis, make00 } from './string'
import { downloadFile } from './file'
import { makeQueryStringByObject } from './url'

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

// console.log( getCanConvertNumber( '123123' ) );

// console.log( getNumberAfterRemoveComma( '123,123' ) );

// console.log( ellipsis( 'afdasdfadsfads', 4 ) );

// console.log( make00( 7 ) );

// console.log( ellipsis( 123, 4 ) );

// console.log( make00( null ) );
