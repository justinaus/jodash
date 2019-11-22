export function makeQueryStringByObject ( obj ) {
  let str = '?' + Object.keys(obj).reduce( (arr, k) => {
    arr.push(k + '=' + encodeURIComponent(obj[k]));
    return arr;
  }, []).join('&');
  return str;
};