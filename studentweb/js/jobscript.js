const Job_API_Link = "https://musical-space-spoon-q76j4695v9pjc49vx-6006.app.github.dev/job";

fetch(Job_API_Link).then(response=>{
    if(!response.ok)
        throw new Error("FAILED TO FETCH DATA");
    return response.json();
}).then(data=>{

    const tbody = document.querySelector("#jobtable tbody");

    data.forEach(job=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${job.job_id}</td>
         <td>${job.job_title}</td>
          <td>${job.min_salary}</td>
           <td>${job.max_salary}</td>
        `;
        tbody.appendChild(row);
    });
    
}).catch(err=>{
    console.log(err.message);
});