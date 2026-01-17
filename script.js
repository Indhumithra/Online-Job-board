const jobs = [
  { title: "Frontend Developer", location: "Remote", type: "Full Time" },
  { title: "Backend Engineer", location: "New York", type: "Full Time" },
  { title: "UI/UX Designer", location: "Remote", type: "Part Time" }
];

const jobsList = document.getElementById("jobsList");

if (jobsList) {
  jobsList.innerHTML = "";

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.style.padding = "15px";
    div.style.borderBottom = "1px solid #eee";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.location} • ${job.type}</p>
    `;
    jobsList.appendChild(div);
  });
}
