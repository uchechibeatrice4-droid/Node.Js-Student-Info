// EXPORT FILE
const student = require("./student");
const fs = require("fs");
const http = require("http")

console.log("Student Information");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);

// CREATE A STUDENT.TXT FILE AND WRITE STUDENT INFO INTO IT
fs.writeFileSync("data/student.txt", 'studentInfo');
console.log("Student Info Created");

const studentInfo = `Name: ${student.name}
                     Age: ${student.age}
                     Course: ${student.course}`

fs.writeFileSync("data/student.txt", studentInfo);
console.log("Student Info Written to File");


// READ FILE
const fileContent = fs.readFileSync('data/student.txt', 'utf-8');
console.log("File Read Successfully");

// APPEND FILE
fs.appendFileSync('data/student.txt', '\nstatus: Active');
console.log("Status Added Successfully");

// READ UPDATED FILE
const updatedContent = fs.readFileSync('data/student.txt', 'utf-8');
console.log("File Updated Successfully"); 

// CREATE HTTP SERVER
const server = http.createServer((req, res) => {
    if (req.url === "/") {
       res.writeHead(200,
        {"Content-Type": "text/html"});

        res.end(`<h1> Welcome To My Student App </h1>`);
    }
    else if (req.url === "/student") {
        res.writeHead(200,
            {"Content-Type": "text/html"});

            res.end(`<h1> Student Information </h1>
                <p> Name: ${student.name} </p>
                <p> Age: ${student.age} </p>
                <p> Course: ${student.course} </p> `);
    }

    else {res.writeHead(404,
        {"Content-Type": "text/html"});

        res.end(`<h1> 404 - Page Not Found </h1>`);
    }
});

server.listen(3000, () => {
    console.log("\nServer Running at http://localhost:3000");
    
});
