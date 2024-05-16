let students = [
    ["John", 85, 90, 88],
    ["Alice", 92, 88, 95],
    ["Bob", 78, 85, 80]
];
console.log(students[0]);         // Output: ["John", 85, 90, 88] (John's data)
console.log(students[1][0]);      // Output: "Alice" (Name of the second student)
console.log(students[2][2]);      // Output: 80 (Bob's score in the third exam)
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    console.log("Student:", student[0]);
    for (let j = 1; j < student.length; j++) {
        console.log("Exam", j, ":", student[j]);
    }
}
