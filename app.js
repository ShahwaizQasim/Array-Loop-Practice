
/* Student RollNumber */

let student_rollnumber = [1023,1024,1025,1026,1027,1028,1029,1030,1031,1032];
let user_student = prompt("Enter Your Number");
let userwin = false;

for (let i= 0; i < student_rollnumber.length; i++) {
    if (user_student == student_rollnumber[i]) {
        userwin = true;
        break;
    }
}
if(userwin){
    alert("Allow my class");
}
else{
    alert("Not Allow my class")
}