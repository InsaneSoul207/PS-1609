function renderPosts(posts) {
    const feed = document.getElementById('feed');
    feed.innerHTML = ''; 

    posts.forEach(post => {
        const postElement = `
            <div class="post">
                <div class="post-header">
                    <img src="images/profile.jpg" alt="User Profile">
                    <div class="user-info">
                        <h3>${post.name}</h3>
                        <p>${post.time}</p>
                    </div>
                </div>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <div class="post-footer">
                    <button class="like-button">Like</button>
                    <button class="comment-button">Comment</button>
                    <button class="share-button">Share</button>
                </div>
            </div>`;
        feed.insertAdjacentHTML('beforeend', postElement);
    });
}

window.onload = () => {
    fetch('/api/posts')
        .then(response => response.json())
        .then(data => renderPosts(data))
        .catch(error => console.error('Error fetching posts:', error));

    fetch('/api/stories')
        .then(response => response.json())
        .then(data => renderStories(data))
        .catch(error => console.error('Error fetching stories:', error));
};

function createPost() {
    const postContent = document.getElementById('postContent').value;

    if (postContent) {
        fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: postContent }),
        })
            .then(response => response.json())
            .then(newPost => {
                document.getElementById('postContent').value = ''; // Clear textarea
                renderPosts([newPost, ...document.querySelectorAll('.post')]); // Add new post to the top
            })
            .catch(error => console.error('Error creating post:', error));
    }
}

function renderStories(stories) {
    const storiesDiv = document.getElementById('stories');
    storiesDiv.innerHTML = ''; // Clear existing content

    stories.forEach(story => {
        const storyElement = `
            <div class="story">
                <h3>${story.title}</h3>
                <p>${story.content}</p>
                ${story.image ? `<img src="${story.image}" alt="Story Image">` : ''}
            </div>`;
        storiesDiv.insertAdjacentHTML('beforeend', storyElement);
    });
}

function submitStory() {
    const storyContent = document.getElementById('storyContent').value;

    if (storyContent) {
        fetch('/api/stories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: storyContent, title: 'New Success Story' }),
        })
            .then(response => response.json())
            .then(newStory => {
                document.getElementById('storyContent').value = ''; 
                renderStories([newStory, ...document.querySelectorAll('.story')]); 
            })
            .catch(error => console.error('Error submitting story:', error));
    }
}
function saveStoriesToLocalStorage(stories) {
    localStorage.setItem('successStories', JSON.stringify(stories));
}

function loadStoriesFromLocalStorage() {
    const stories = JSON.parse(localStorage.getItem('successStories'));
    return stories ? stories : [];
}

function displayStories(stories) {
    const storiesContainer = document.getElementById('storiesContainer');
    storiesContainer.innerHTML = ''; // Clear existing stories

    stories.forEach((story, index) => {
        const storyElement = document.createElement('div');
        storyElement.classList.add('story');
        storyElement.innerHTML = `
            <h3>${story.title}</h3>
            <p><strong>By:</strong> ${story.name}</p>
            <p>${story.story}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        storiesContainer.appendChild(storyElement);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteStory(index);
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const stories = loadStoriesFromLocalStorage();
    displayStories(stories);
});
document.getElementById('successStoryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const story = document.getElementById('story').value;
    const stories = loadStoriesFromLocalStorage();
    stories.push({ name, title, story });
    saveStoriesToLocalStorage(stories);
    displayStories(stories);
    document.getElementById('successStoryForm').reset();
});
function deleteStory(index) {
    let stories = loadStoriesFromLocalStorage();
    stories.splice(index, 1); // Remove the story at the given index
    saveStoriesToLocalStorage(stories); // Save the updated list
    displayStories(stories); // Update the UI
}
