function save(){
name= document.getElementById("name").value;
email_id= document.getElementById("email").value;
number= document.getElementById("number").value;

localStorage.setItem("name",name);
localStorage.setItem("email_id",email_id);
localStorage.setItem("number",number);


}