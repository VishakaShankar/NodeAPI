const Employee_API_Link = "https://musical-space-spoon-q76j4695v9pjc49vx-6006.app.github.dev/employee";

fetch(Employee_API_Link).then(response=>{
    if(!response.ok)
        throw new Error("FAILED TO FETCH DATA");
    return response.json();
}).then(data=>{

    const tbody = document.querySelector("#employeetable tbody");

    data.forEach(employee=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${employee.employee_id}</td>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.email}</td>
        <td>${employee.phone_number}</td>
        
        `;
        tbody.appendChild(row);
    });
    
}).catch(err=>{
    console.log(err.message);
});