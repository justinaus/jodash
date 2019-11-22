export function downloadFile( blob, flieName ) {
  // var newBlob = new Blob([blob], {type: "application/pdf"}
  var newBlob = new Blob([blob]);

  // IE doesn't allow using a blob object directly as link href
  // instead it is necessary to use msSaveOrOpenBlob
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(newBlob);
    return;
  } 

  const data = window.URL.createObjectURL(newBlob);
  var link = document.createElement('a');
  link.href = data;
  link.download= flieName || 'download';
  link.click();
}