//Collects the user information

let subjectTitle = prompt(`Your Subject title: `);
let classSchedule = prompt(`Your Class Schedule (Time,Days): `);
let classroom = prompt(`Your Classroom: `);
let classInstructor = prompt(`Your Class Instructor: `);
let studentName = prompt(`Your Full Name: `);

// logs the result :3
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`)
