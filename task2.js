const students=[{
   studentID:1 ,
   name:"Kethra" ,
   grade: 9,
   courses: ["Engineering Graphics","Control Systems","Signal Processing"],
   attanance:{
    "2025-04-21":true,
    "2025-04-22":false,
    "2025-04-23":true,
    "2025-04-24":true,
    "2025-04025":true,
   } ,
   hobbies:{
    sports:["criket","football","volley ball","basketball"],
    music:["gittar","piano"]
   }, 
},
{
    studentID:2 ,
    name: "Packiam",
    grade:8 ,
    courses:["circuit Analysis","communication systems","enginnering physics"] ,
    attanance:{
        "2025-04-21":true,
        "2025-04-22":false,
        "2025-04-23":true,
        "2025-04-24":false,
        "2025-04-25":true,
    } ,
    hobbies:{
        sports:["cricket","basket ball"],
        music:["violin","musical keyboard"]
    }, 
 },
 {
    studentID:3 ,
    name: "Gabriel" ,
    grade:9 ,
    courses:["Disel Mechanical","Basic designer", "Virtual verifier"] ,
    attanance:{
        "2025-04-21":true,
        "2025-04-22":true,
        "2025-04-23":true,
        "2025-04-24":false,
        "2025-04-25":true,
    } ,
    hobbies:{
        sports:["tennis","football"],
        music:["violin","musical keyboard"]
    }, 
 },
 {
    studentID:4 ,
    name:"Henry" ,
    grade:7 ,
    courses:["Physiscs","Mathematics","Geography"] ,
    attanance:{
        "2025-04-21":true,
        "2025-04-22":true,
        "2025-04-23":true,
        "2025-04-24":true,
        "2025-04-25":true,
    } ,
    hobbies: {
        sports:["criket","football","volley ball"],
        music:["gittar","piano"], 
    }
 },
 {
    studentID:5 ,
    name: "Raja" ,
    grade: 8 ,
    courses:["Electronics","electromagnetic fields"] ,
    attanance:{
        "2025-04-21":true,
        "2025-04-22":true,
        "2025-04-23":false,
        "2025-04-24":true,
        "2025-04-25":true,
    } ,
    hobbies:{
        sports:["cricket","basket ball"],
        music:["violin","musical keyboard"]
    }, 
 },
];


// ----------------Display Student details--------------------

const displayStudentDetails=(student)=>{
    console.log("Student Details:");
    for (const key in student){
        if(key!== "course"){
            console.log(`${key} : ${student[key]}`);
           }
        else{
            console.log(`course: ${student.course.join(",")}`);
        }
    }
   };
students.forEach((student)=>displayStudentDetails(student));


// --------------------Filter students by grade------------------


const filterStudentsByGrade=(grade)=>{
  return students.filter((student)=> student.grade === grade);
}
console.log("-----Filter Students by grade-------");
const filterGrade = filterStudentsByGrade(8);
filterGrade.forEach((student) => displayStudentDetails(student));


// -----------------find students by ID-----------------

const findStudentById =(studentID)=>{
    return students.find((student)=>student.studentID=== studentID);
}

console.log("-----find students by ID-----------");
const findStudentId = findStudentById(3);
console.log(findStudentId);

// -----------------record Attanance----------------

// const attananceManagementModule=(()=>{
//     const recordAttanance=(student)=>{
//         student.attanance.key.value
//     };
//     return{
//         recordAttanance:recordAttanance
//     }
// })();

// console.log("---------attanance record------");
// const attananceDetail=displayStudentDetails();
// attananceManagementModule.recordAttanance(attananceDetail)
// attananceDetail.forEach((student)=>displayStudentDetails(student));



// ----------------------Adding course to student--------------

const addCourseToStudent =(studentID,course)=>{
    const student=findStudentById(studentID);
    if(student){
        if(!student.courses.includes(course)){
            student.courses.push(course);
            console.log(`Course "${course}" is added to the studentID "${studentID}"`);
        }else{
            console.log(`Course "${course}" is already exists in studentID "${studentID}"`);
        }
    }else{
        console.log(`Student with ID "${studentID}" is not found`);
    }
}

console.log("------Adding Course to student--------");
addCourseToStudent(1,"Java Programming");
displayStudentDetails(findStudentById(1));

// -----------------Remove a student------------------

const removeStudent=(studentID)=>{
    const index= students.findIndex((s)=>s.studentID=== studentID);
    if(index!== -1){
        students.splice(index,1);
        console.log(`Student with ID "${studentID}" is removed`);
    }else{
        console.log(`Student with ID "${studentID}" is not found`);
    }
};
 
console.log("----Remove a Student------");
removeStudent(4);
removeStudent(7);
console.log("---After Removal of student-----");
students.forEach((student)=>displayStudentDetails(student));

// ------------------Get Students with Most Hobbies in a Category----------

const studentsWithMostHobbies=(sports,music)=>{
    const studentHobbies =sports + music;
    console.log(studentHobbies);
   
}

studentsWithMostHobbies();
students.forEach((student)=>displayStudentDetails(student));

   


