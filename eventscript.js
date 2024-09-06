function saveEventsToLocalStorage(events) {
    localStorage.setItem('events', JSON.stringify(events));
}

function loadEventsFromLocalStorage() {
    const events = JSON.parse(localStorage.getItem('events'));
    return events ? events : [];
}

function deleteEvent(index) {
    const events = loadEventsFromLocalStorage();
    events.splice(index, 1); 
    saveEventsToLocalStorage(events); 
    displayEvents(events); 
}

function displayEvents(events) {
    const eventsContainer = document.getElementById('eventsContainer');
    eventsContainer.innerHTML = ''; 

    events.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p>${event.description}</p>
            <button class="deletion-btn" data-index="${index}">
            <i class="fas fa-trash"></i>
            </button>
        `;
        eventsContainer.appendChild(eventElement);
    });
    document.querySelectorAll('.deletion-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteEvent(index);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const events = loadEventsFromLocalStorage();
    displayEvents(events);
});

document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const description = document.getElementById('eventDescription').value;



    const events = loadEventsFromLocalStorage();
    events.push({ title, date, description });
    saveEventsToLocalStorage(events);
    displayEvents(events);
    document.getElementById('eventForm').reset();
});

