const jobsList = document.getElementById("jobsList");
const searchBtn = document.getElementById("searchBtn");

async function fetchJobs() {
  const q = document.getElementById("q").value;
  const location = document.getElementById("location").value;
  const type = document.getElementById("type").value;

  const res = await fetch(
    `http://localhost:5000/jobs?q=${q}&location=${location}&type=${type}`
  );
  const jobs = await res.json();

  jobsList.innerHTML = "";

  jobs.forEach(job => {
    jobsList.innerHTML += `
      <div class="job-card">
        <h3>${job.title}</h3>
        <p>${job.location} • ${job.type}</p>
      </div>
    `;
  });
}

fetchJobs();
searchBtn.addEventListener("click", fetchJobs);
