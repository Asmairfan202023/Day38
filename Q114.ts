// Question114:Iterate over a Map of Student IDs and names, and log each pair to the console.
const studentsInformation = new Map<number , string>();
studentsInformation.set(1,"Ahmad");
studentsInformation.set(2,"Haya");
studentsInformation.set(3,"Asma");
// Iterate over a MAp
studentsInformation.forEach((Name, id)=>{
    console.log(`studentID:${id}, Name:${Name}`);
});
