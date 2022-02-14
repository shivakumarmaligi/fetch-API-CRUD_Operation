let form = document.querySelector("#form");
let studentName = document.querySelector("#name");
let studentId = document.querySelector("#std_id");
let studentEmail = document.querySelector("#email");
let studentCourses = document.querySelector("#courses");

// create data in DB by taking input from User
form.addEventListener("submit", async e => {
  e.preventDefault();
  let std_name = e.target[0].value;
  let std_id = e.target[1].value;
  let std_email = e.target[2].value;
  let std_courses = e.target[3].value;

  let payload = {
    name: std_name,
    std_id: std_id,
    email: std_email,
    courses: std_courses,
    };
    
    let url = "http://localhost:5000/api/students";
    let body = await window.fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(payload),
    });
    console.log(body);
    console.log(body.std_id);
}); 


// View All Data in a Table
let viewTable = document.querySelector("#viewTable");
view.addEventListener("click", async e => {
    let url = "http://localhost:5000/api/students";
    let data = (await fetch(url)).json().then((user) => {
        let newData = user.payload;
        console.log(newData);
        for (let i = 0; i < newData.length; i++) {
            viewTable.innerHTML += `<tr><td>${newData[i].name}</td><td>${newData[i].std_id}</td><td>${newData[i].email}</td><td>${newData[i].courses}</td></tr>`;
        }
    })
});


// Delete Data by Considering the Object ID
let delbtn = document.querySelector("#del");
formDelete.addEventListener("submit", async e => {
    e.preventDefault();
    let id = e.target[0].value;
    var url = `http://localhost:5000/api/students/${id}`;
    let data = await fetch(url, { method: "DELETE" }).then(user => {
      let newData = user.payload;
      console.log(newData);
    });
});

// Update Existing Data Using Obj:ID 
let updateButton = document.querySelector("#Update");
formUpdate.addEventListener("submit", async e => {
    e.preventDefault();
    let obj_id = e.target[0].value
  let std_name = e.target[1].value;
  let std_id = e.target[2].value;
  let std_email = e.target[3].value;
  let std_courses = e.target[4].value;
  let payload = {
    name: std_name,
    std_id: std_id,
    email: std_email,
    course: std_courses,
  };
  let url = `http://localhost:5000/api/students/${obj_id}`;
  let body = await window.fetch(url, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  console.log(body);
});












