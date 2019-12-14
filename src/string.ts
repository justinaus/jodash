import { getCanConvertNumber } from './number'

function justAdd1000Comma( strValue: string ): string {
  let ret = '';

  let nFromEnd: number;

  for(var i=0; i<strValue.length; ++i) {
    nFromEnd = strValue.length - 1 - i;

    ret += strValue[ i ];
    if( nFromEnd !== 0 && nFromEnd % 3 === 0 ) {
      ret += ','
    }
  }

  return ret;
}

export function changeTo1000comma( value: string | number ): string {
  if( value === 0 ) return '0';

  if( !value )  return '';

  const strValue = value.toString().trim();
    
  // 그냥 다 숫자면 그대로 리턴.
  if( getCanConvertNumber( strValue ) ) {
    return justAdd1000Comma( strValue );
  }

  let strFiltered = '';

  let char: string;

  for(var i=0; i<strValue.length; ++i) {
    char = strValue.charAt( i );

    // 숫자로 못바꾸는 문자는 그냥 패스한다.
    if( !getCanConvertNumber( char ) )  continue;

    strFiltered += char;
  }

  return justAdd1000Comma( strFiltered );
}


export function getNumberAfterRemoveComma( value: string | number ): number {
  if( !value )  return 0;

  const strValue = value.toString().trim();

  const strValueWithoutComma = strValue.split( ',' ).join( '' );

  if( !strValueWithoutComma || !getCanConvertNumber( strValueWithoutComma ) ) return 0;

  return Math.floor( Number( strValueWithoutComma ) );
}

export function ellipsis ( strFull: string, cutoffLength: number, strAdd: string = '&#8230;' ): string {
  const ret: string  = strFull.length <= cutoffLength ? strFull : strFull.substr(0, cutoffLength) + strAdd;
  
  return ret;
};

export function decodeHTMLEntities( docu: Document, text: string) {
  const textArea = docu.createElement('textarea');
  textArea.innerHTML = text;
  const value = textArea.value;

  docu.removeChild( textArea );
  // textArea = null;
  return value;
}

export function make00( value: string | number ): string {
  const strValue = value.toString();

  if( !getCanConvertNumber( value ) ) return strValue;

  const nCount = Math.floor( Number( strValue ) );

  return nCount < 10 ? '0' + nCount : nCount.toString();
}