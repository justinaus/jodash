import { getCanConvertNumber } from './number'

function justAdd1000Comma( strValue: string ): string {
  let ret: string = '';

  let nFromEnd: number;

  for(var i:number=0; i<strValue.length; ++i) {
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

  const strValue: string = value.toString().trim();
    
  // 그냥 다 숫자면 그대로 리턴.
  if( getCanConvertNumber( strValue ) ) {
    return justAdd1000Comma( strValue );
  }

  let strFiltered: string = '';

  let char: string;

  for(var i=0; i<strValue.length; ++i) {
    char = strValue.charAt( i );

    // 숫자로 못바꾸는 문자는 그냥 패스한다.
    if( !getCanConvertNumber( char ) )  continue;

    strFiltered += char;
  }

  return justAdd1000Comma( strFiltered );
}