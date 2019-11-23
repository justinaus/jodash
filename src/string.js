import { getCanConvertNumber } from './number'

export function add1000Comma( value ) {
  if( !value )  return value;

  const strValue = String( value );

  if( strValue.indexOf( ',' ) > -1 ) return strValue;

  var ret = '';

  var nFromEnd;

  for(var i=0; i<strValue.length; ++i) {
    nFromEnd = strValue.length - 1 - i;

    ret += strValue[ i ];
    if( nFromEnd !== 0 && nFromEnd % 3 === 0 ) {
      ret += ','
    }
  }

  return ret;
}

export function getNumberAfterRemoveComma( value ) {
  if( !value )  return 0;

  const strValue = String( value ).trim();

  const strValueWithoutComma = strValue.split( ',' ).join( '' );

  if( !strValueWithoutComma || isNaN( strValueWithoutComma ) ) return 0;

  const ret = Number.parseInt( strValueWithoutComma, 10 );

  return ret;
}

export function ellipsis ( strFull, cutoffLength, strAdd ) {
  var str = strFull.toString(); // cast numbers

  if( !strAdd ) {
    strAdd = '&#8230;'
  }

  str = str.length <= cutoffLength ? str : str.substr(0, cutoffLength) + strAdd;
  
  return str;
};

export function decodeHTMLEntities( docu, text) {
  var textArea = docu.createElement('textarea');
  textArea.innerHTML = text;
  const value = textArea.value;
  textArea = null;
  return value;
}

export function make00( value ) {
  if( !getCanConvertNumber( value ) ) return value;

  var nCount = Number.parseInt( value, 10 );

  var ret;

  if( nCount < 10 ) {
    ret = '0' + nCount;
  } else {
    ret = String( nCount );
  }
  return ret;
}