var data;
var request = new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
request.send();
request.onload=function() {

 var result = JSON.parse(request.response);
 data = result;
var box = document.createElement('div');
box.className="container";
 var Table = document.createElement('table');
 Table.id="table1";
 Table.classList.add("table","table-dark","table-bordered",);
 var tHead = document.createElement('thead');
var tR1 = document.createElement('tr');
 
var th1 = document.createElement('th');
th1.innerHTML = "Id";
var th2 = document.createElement('th');
th2.innerHTML = "Name";
var th3 = document.createElement('th');
th3.innerHTML = "Email";
 Table.append(tHead);
 tHead.append(tR1);
 tR1.append(th1,th2,th3);
// -----------------------------------------
 var tBody = document.createElement('tbody');
tBody.classList.add("table-striped");
 Table.append(tBody);
 
 var Bdiv = document.createElement('div');
Bdiv.className="container";
let pageCount = data.length/5;
let button;
for(var i=0; i<pageCount; i++){
  button+= `
  <button class="btn active" id="btn-1"  role="button" onclick="demo(${i})" aria-pressed="true" for=1>${i}</button>
  `
}; 
Bdiv.innerHTML =
`
<div class="container" id="container2">
  <button class="btn active" id="btn-previous"  role="button" onclick="demo(0)" aria-pressed="true"  for=previous>Previous</button>

  <button class="btn active" id="btn-Next" role="button" onclick="demo(6)" aria-pressed="true" for=next>Next</button>
</div>
`
// var btnN = document.getElementById('btn-next');
// btnN.addEventListener('click',()=>{

// })


for(var i =0; i<result.length; i++) {

   
    var tD = document.createElement('tr');
    tD.className="table";
    tD.innerHTML = ` 
    
 <td>${result[i].id}</td> 
 
<td>${result[i].name}</td> 

<td>${result[i].email}</td> 

`
// var table1 = document.getElementById('table1');
// // console.log(table1);
// table1.append(tD); 
tBody.append(tD);
}




box.append(Table,Bdiv);
document.body.append(box);
}

function demo(a) {

  var box = document.createElement('div');
box.className="container";
 var Table = document.createElement('table');
 Table.id="table1";
 Table.classList.add("table","table-dark","table-bordered",);
 var tHead = document.createElement('thead');
var tR1 = document.createElement('tr');
 
var th1 = document.createElement('th');
th1.innerHTML = "Id";
var th2 = document.createElement('th');
th2.innerHTML = "Name";
var th3 = document.createElement('th');
th3.innerHTML = "Email";
 Table.append(tHead);
 tHead.append(tR1);
 tR1.append(th1,th2,th3);

 var tBody = document.createElement('tbody');
tBody.classList.add("table-striped");
 
 
 var Bdiv = document.createElement('div');
Bdiv.className="container";
let pageCount = data.length/5;
console.log(pageCount);
let button;
for(var i=0; i<pageCount; i++){
  button+= `
  <button class="btn active" id="btn-1"  role="button" onclick="demo(${i})" aria-pressed="true" for=1>${i}</button>
  `
}; 
Bdiv.innerHTML =
`
<div class="container" id="container2">
  <button class="btn active" id="btn-previous"  role="button" onclick="demo(0)" aria-pressed="true"  for=previous>Previous</button>
   ${button}
  <button class="btn active" id="btn-Next" role="button" onclick="demo(6)" aria-pressed="true" for=next>Next</button>
</div>
`

 let b= "";
 let c = parseInt(a*5);
  console.log(c);
 for(var i =c; i<c+5; i++) {

  let tR1 = document.createElement("tr"); 
  console.log(i);
   
  tR1.innerHTML = ` 
  
<td>${data[i].id}</td> 

<td>${data[i].name}</td> 

<td>${data[i].email}</td> 

`
tBody.append(tR1);
}

// tBody.innerHTML= b;
document.querySelector("body").innerHTML = "";

Table.append(tBody);
// console.log(Table);
box.append(Table,Bdiv);
document.body.append(box);
}