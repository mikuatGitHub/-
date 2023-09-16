'use strict';{
  
const today= new Date();
const year= today.getFullYear();
const month= today.getMonth();
document.getElementById("title").textContent= `${year}/${month+1}`;

const dates= [];

function getClalenderBody(){
  // 今月最終日
  const lastDate= new Date(year,month+1,0).getDate();
  for(let i=1; i<=lastDate; i++){
    dates.push({
      number: i,
      isToday: false,
      isActive: true
    })
  }
}

function getCalenderHead(){
  //先月最終日
  const lastDay= new Date(year,month,0).getDay();
  const lastDate= new Date(year,month,0).getDate();
  for(let i=0; i<=lastDay; i++){
    dates.unshift({
      number: lastDate-i ,
      isToday: false,
      isActive: false
    })
  }
}

function getCalenderTail(){
  //今月最終日
  const lastDay= new Date(year,month+1,0).getDay();
  for(let i=0; i<6-lastDay; i++){
    dates.push({
      number: i+1,
      isToday: false,
      isActive: false
    })
  }
}

getCalenderHead();
getClalenderBody();
getCalenderTail();
// console.log(dates);


//dates[]を週ごとに分割
const weekCount= dates.length /7 ;
//  console.log(weekCount);
const weeks= [];

for(let i=0; i<weekCount; i++){
  weeks[i]= dates.splice(0,7);
}
console.log(weeks);


//描画
weeks.forEach(week =>{
  const tr= document.createElement("tr");

  week.forEach(date =>{
    const td= document.createElement("td");
    
    td.textContent= date.number;

    if(date.number === today.getDate() && date.isActive === true){
      date.isToday= true;
    }
    
    if(date.isToday === true){
      td.classList.add('today');
    }
    if(date.isActive === false){
      td.classList.add('notactive');
    }
    console.log(td);
    
    tr.appendChild(td);
  })
  
  const tbody= document.querySelector("tbody");
  tbody.appendChild(tr);
})


//clock
const hour= today.getHours();
const minutes= today.getMinutes();
const padHour= String(hour).padStart(2,'0');
const padMin= String(minutes).padStart(2,'0');

document.getElementById("time").textContent= `${padHour}:${padMin}`;

const comment= document.getElementById("comment");
let render
if(hour<=4 || 22<=hour){
  render= "Good night";
}else if(5<=hour<=9){
  render= "Good morning";
}else if(10<= hour <=15){
  render= "Good afternoon";
}else if(16<= hour <=21){
  render= "Good evening";
}else{
  render= "error";
}
comment.textContent= render;


//背景色チェンジ
const colors= document.getElementsByName("colors");
const body=document.querySelector("body");

document.getElementById("change").addEventListener("click",()=>{
  body.classList.remove("pink");
  body.classList.remove("skyblue");
  body.classList.remove("beige");

  if(colors[0].checked){
    body.classList.add("pink");
  }else if(colors[1].checked){
    body.classList.add("skyblue");
  }else if(colors[2].checked){
    body.classList.add("beige");
  }else{
    return;
  }
})


}