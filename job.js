const displayJobs = () => {
    const jobListingsDiv = document.querySelector('.job-listings .Jobs');
    jobListingsDiv.innerHTML = ''; // Clear existing listings

    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    jobs.forEach((job, index) => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');
        jobElement.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Experience Required:</strong> ${job.experience}</p>
        `;
        jobListingsDiv.appendChild(jobElement);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            deleteJob(index);
        });
    });
};

document.getElementById('post-job-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;

    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs.push({ title, company, location, experience });
    localStorage.setItem('jobs', JSON.stringify(jobs));
    document.getElementById('post-job-form').reset();
    displayJobs();
});

const deleteJob = (index) => {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs.splice(index, 1);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    displayJobs();
};

displayJobs();
