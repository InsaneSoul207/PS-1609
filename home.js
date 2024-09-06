document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const postTitleInput = document.querySelector('.post-title');
    const postContentInput = document.querySelector('.post-content');
    const postButton = document.querySelector('.post-button');
    const postsContainer = document.querySelector('.posts');

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        renderPosts(posts);
    }

    function savePosts(posts) {
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    function renderPosts(posts) {
        postsContainer.innerHTML = '<h2>Posts</h2>'; 
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });

        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    }

    function createPost() {
        const title = postTitleInput.value.trim();
        const content = postContentInput.value.trim();

        if (title && content) {
            const newPost = { title, content };
            const posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.unshift(newPost);
            savePosts(posts);
            postTitleInput.value = '';
            postContentInput.value = '';
            renderPosts(posts);
        } else {
            alert('Please fill in both the title and content.');
        }
    }
    function handleDelete(e) {
        const index = e.target.getAttribute('data-index');
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.splice(index, 1);
        savePosts(posts);
        renderPosts(posts);
    }

    postButton.addEventListener('click', createPost);
    loadPosts();
});

function redirectToProfile() {
    window.location.href = "different_profiles.html";  
}
const newsData = [
    {
        title: "Apple Announces New Products",
        description: "Apple unveils new iPhones, iPads, and MacBooks at the annual event.",
        link: "https://www.apple.com"
    },
    {
        title: "Global Market Trends",
        description: "Stock markets show mixed reactions to global economic policies.",
        link: "https://www.moneycontrol.com/stocksmarketsindia/"
    },
    {
        title: "Tech Conference 2024",
        description: "The biggest tech conference of the year is set to take place in December.",
        link: "https://techcrunch.com/"
    },
    // Add more news items as needed
];

function displayNews(newsArray) {
    const newsFeed = document.getElementById('newsFeed');
    newsFeed.innerHTML = '';  // Clear previous news

    newsArray.forEach(news => {
        const newsItem = `
            <div class="news-item">
                <a href="${news.link}" target="_blank">${news.title}</a>
            </div>
        `;
        newsFeed.innerHTML += newsItem;
    });
}

displayNews(newsData);

function searchNews() {
    const query = document.getElementById('newsSearch').value.toLowerCase();
    const filteredNews = newsData.filter(news => 
        news.title.toLowerCase().includes(query) || 
        news.description.toLowerCase().includes(query)
    );
    displayNews(filteredNews);
}
function show() {
    document.getElementById('card')
        .style.display = "block";
        
    }
function hide_image(card){
        document.getElementById(card).style.display = 'none';
    }