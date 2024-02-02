function calculate(){
  let current_cg=document.getElementById('display').value;
  let sem_complete=document.getElementById('display2').value;
  let target_cg=document.getElementById('display3').value;
  let total_sem=document.getElementById('display4').value;
  let a,b,c,d;
  a=parseFloat(current_cg);
  b=parseFloat(sem_complete);
  c=parseFloat(target_cg);
  d=parseFloat(total_sem);
  let remain_sem=0;
  remain_sem=d-b;
  //console.log(remain_sem);
  // console.log(b);
  // console.log(c);
  // console.log(d);
  let result=0;
  result=(((c*d)-(a*b))/remain_sem);
  result=Math.round(result*100)/100;
  //console.log(result)
  document.getElementById('demo').innerHTML=result;
  document.getElementById('demo2').innerHTML = `If you want to 
  obtain Cgpa ${c} You have to obtain CGPA ${result} in the next
   ${remain_sem} semester`;

}