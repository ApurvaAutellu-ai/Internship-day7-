// let name = "apurva";
// console.log(name);
// let marks = 85;
// console.log(marks);
// let AttendancePercentage = 80;
// console.log(AttendancePercentage);



// let marks = 75;
// if(marks>=35){
//     console.log("passed");
// }
// else{
//     console.log("failed");
// }

// let Attendance = 80;
// let status =(Attendance>=75)? "Eligible For Exam" : "Not Eligible For Exam";
// console.log(status);

// let score = 74;
// if(score>=90){
//     console.log("grade A+");
// }else if(score>=75 && score<=89){
//     console.log("grade A");
// }else if(score>=60 && score<=74){
//     console.log("grade B");
// }else if(score>=35 && score<=59){
//     console.log("grade C");
// }else{
//     console.log("failed");
// }


// let StudentDepartment = "Computer Engineering";
// switch(StudentDepartment){
//     case "Computer Science":
//         console.log("Student is in Computer Science department");
//         break;
//     case "Information Technology":
//         console.log("Student is in Information Technology department");
//         break;
//      case"Computer Engineering":
//         console.log("Student is in Computer Engineering department");
//         break;
//         case"Mechanical Engineering":
//         console.log("Student is in Mechanical Engineering department");
//         break;   
//     default:
//         console.log("Student is in a different department");
// }


// for(let i=1; i<20; i++){
//     console.log(i);
// }

// 
// let i=2;
// while(i<20){
//     console.log("i=",i");
//     i++;
// }

// let i=10;
// do{
//     console.log("i=",i);
//     i--;

// }while(i>=1);



// for(let i=1; i<20; i++){
//     if(i===15){
//         break;
//     }
// console.log(i);
// }

for(let i=1; i<20; i++){
    if(i%3==0){
        continue;
    }
    console.log(i);
}