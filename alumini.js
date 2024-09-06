const alumniProfiles = [
    {
        name: "Rahul Patel",
        title: "Software Engineer",
        company: "Infosys",
        email: "rahul.patel@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "Sardar Vallabhbhai National Institute of Technology",
        degree: "B.Tech",
        year: "2022"
    },
    {
        name: "Priya Shah",
        title: "Data Analyst",
        company: "TCS",
        email: "priya.shah@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "IIT-Gandhinagar",
        degree: "M.Tech",
        year: "2021"
    },
    {
        name: "Rohan Desai",
        title: "Project Manager",
        company: "Wipro",
        email: "rohan.desai@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "DA-IICT",
        degree: "B.E.",
        year: "2020"
    },
    {
        name: "Aditi Mehta",
        title: "Electrical Engineer",
        company: "Siemens",
        email: "aditi.mehta@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "Birla Vishvakarma Mahavidyalaya (Engineering College)",
        degree: "B.E.",
        year: "2019"
    },
    {
        name: "Nishant Trivedi",
        title: "Mechanical Engineer",
        company: "L&T",
        email: "nishant.trivedi@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "Dharamsin Desai University",
        degree: "B.Tech",
        year: "2018"
    },
    {
        name: "Ritika Joshi",
        title: "Civil Engineer",
        company: "Shapoorji Pallonji",
        email: "ritika.joshi@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "Institute of Technology, Nirma University",
        degree: "M.Tech",
        year: "2017"
    },
    {
        name: "Amit Solanki",
        title: "Chemical Engineer",
        company: "Reliance Industries",
        email: "amit.solanki@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "Faculty of Tech & Engineering, MS University",
        degree: "B.E.",
        year: "2016"
    },
    {
        name: "Pooja Shah",
        title: "Architect",
        company: "Godrej Properties",
        email: "pooja.shah@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "LD College of Engineering",
        degree: "B.Arch",
        year: "2015"
    },
    {
        name: "Vishal Patel",
        title: "Electronics Engineer",
        company: "Intel",
        email: "vishal.patel@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "CK Pithawalla College of Engineering and Technology",
        degree: "B.Tech",
        year: "2014"
    },
    {
        name: "Kajal Trivedi",
        title: "Software Developer",
        company: "Google",
        email: "kajal.trivedi@example.com",
        image: "https://wallpapers.com/images/hd/pfp-pictures-ph6qxvz14p4uvj2j.jpg",
        college: "GH Patel College of Engineering",
        degree: "M.Tech",
        year: "2013"
    }
];

// Function to render alumni profiles dynamically
function renderAlumniProfiles(profiles) {
    const alumniContainer = document.getElementById('alumni-container');
    alumniContainer.innerHTML = ''; // Clear existing content

    profiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');

        profileCard.innerHTML = `
            <img src="${profile.image}" alt="Profile Picture" class="profile-image">
            <h2>${profile.name}</h2>
            <p>${profile.title} at ${profile.company}</p>
            <p>College: ${profile.college}</p>
            <p>Degree: ${profile.degree}</p>
            <p>contact: ${email}</p>
            <p>Year of Passing: ${profile.year}</p>
        `;

        alumniContainer.appendChild(profileCard);
    });
}
// Function to render alumni profiles dynamically
function renderAlumniProfiles(profiles) {
    const alumniContainer = document.getElementById('alumni-container');
    alumniContainer.innerHTML = ''; // Clear existing content

    profiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');

        profileCard.innerHTML = `
            <img src="${profile.image}" alt="Profile Picture" class="profile-image">
            <h2>${profile.name}</h2>
            <p>${profile.title} at ${profile.company}</p>
            <p>College: ${profile.college}</p>
            <p>Degree: ${profile.degree}</p>
            <p>Contact: ${profile.email}</p>
            <p>Year of Passing: ${profile.year}</p>
            
        `;

        alumniContainer.appendChild(profileCard);
    });
}
// Function to filter profiles based on dropdown selections
function filterProfiles() {
    const collegeFilter = document.getElementById('collegeFilter').value;
    const degreeFilter = document.getElementById('degreeFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;

    const filteredProfiles = alumniProfiles.filter(profile => {
        return (collegeFilter === "" || profile.college === collegeFilter) &&
               (degreeFilter === "" || profile.degree === degreeFilter) &&
               (yearFilter === "" || profile.year === yearFilter);
    });

    renderAlumniProfiles(filteredProfiles);
}

// Initialize with all profiles (optional if you want to display all profiles initially)
document.addEventListener('DOMContentLoaded', () => renderAlumniProfiles(alumniProfiles));

// Function to render alumni profiles dynamically
function renderAlumniProfiles(profiles) {
    const alumniContainer = document.getElementById('alumni-container');
    alumniContainer.innerHTML = ''; // Clear existing content

    if (profiles.length === 0) {
        alumniContainer.innerHTML = '<p>No profiles found for the selected criteria.</p>';
    } else {
        profiles.forEach(profile => {
            const profileCard = document.createElement('div');
            profileCard.classList.add('profile-card');

            profileCard.innerHTML = `
                <img src="${profile.image}" alt="Profile Picture" class="profile-image">
                <h2>${profile.name}</h2>
                <p>${profile.title} at ${profile.company}</p>
                <p>College: ${profile.college}</p>
                <p>Degree: ${profile.degree}</p>
                <p>Contact: ${profile.email}</p>    
                <p>Year of Passing: ${profile.year}</p>
            `;

            alumniContainer.appendChild(profileCard);
        });
    }
}
