var tables = document.querySelectorAll('table');
var dataTable = tables[2];
var headerTable = tables[1];


var headers = headerTable.querySelectorAll('th');

var headerRow = [];
headers.forEach(tr => headerRow.push(tr.innerText));

var trs = dataTable.querySelectorAll('tr');

var totalRes = [headerRow];
trs.forEach(tr => {
   tds = tr.querySelectorAll('td');
   var rowRes = [];
   tds.forEach(td => {
      rowRes.push(td.innerText);
   });
   totalRes.push(rowRes);
});

console.log(totalRes);
let csvContent = "data:text/csv;charset=utf-8," 
    + totalRes.map(e => e.join(",")).join("\n");
var encodedUri = encodeURI(csvContent);
window.open(encodedUri);