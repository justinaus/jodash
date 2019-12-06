export function getCanConvertNumber( value: any ): boolean {
  if( value === 0 ) return true;

  if( !value )  return false;

  return !isNaN( value );
}