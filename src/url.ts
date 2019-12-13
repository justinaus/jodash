export function makeQueryStringByObject ( obj: any ) {
  let str = Object.keys(obj).reduce( (arr, k) => {
    arr.push(k + '=' + encodeURIComponent(obj[k]));
    return arr;
  }, []).join('&');
  return str ? '?' + str : str;
};