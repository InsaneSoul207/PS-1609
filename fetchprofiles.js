const users = [
    { id: 1, name: "John Doe", role: "Software Engineer at XYZ Corp", img: "https://via.placeholder.com/100" },
    { id: 2, name: "Jane Smith", role: "Data Scientist at ABC Inc", img: "https://via.placeholder.com/100" },
    { id: 3, name: "Alice Johnson", role: "Product Manager at Acme Co", img: "https://via.placeholder.com/100" },
];

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(users), 1000);  
    });
}

function createProfileCard(user) {
    return `
        <div class="Userprofile" id="user-${user.id}">
            <img src="${user.img}" alt="Profile Picture">
            <div class="profile-info">
                <h3>${user.name}</h3>
                <p>${user.role}</p>
                <button class="connect-button" onclick="handleConnect(${user.id})">Connect</button>
            </div>
        </div>
    `;
}

async function renderProfiles() {
    const profilesList = document.getElementById('profiles-list');
    const users = await fetchUserData();  // Fetch user data

    users.forEach(user => {
        const profileHTML = createProfileCard(user);
        profilesList.insertAdjacentHTML('beforeend', profileHTML);
    });
}

function handleConnect(userId) {
    const connectButton = document.querySelector(`#user-${userId} .connect-button`);
    
    connectButton.textContent = "Pending";
    connectButton.disabled = true;  
}

document.addEventListener('DOMContentLoaded', renderProfiles);

