// Get bookmarks from Local Storage or initialize an empty array
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

// Function to display bookmarks
function displayBookmarks() {
    const list = document.getElementById('bookmark-list');
    list.innerHTML = '';
    bookmarks.forEach((bookmark, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <strong>${bookmark.name}</strong><br>
                <a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
            </div>
            <button class="delete" onclick="removeBookmark(${index})">Delete</button>
        `;
        list.appendChild(listItem);
    });
}

// Function to add a bookmark
function addBookmark() {
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;

    if (name && url) {
        bookmarks.push({ name, url });
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        document.getElementById('name').value = '';
        document.getElementById('url').value = '';

        displayBookmarks();
    }
}

// Function to remove a bookmark
function removeBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    displayBookmarks();
}

// Display bookmarks when the page loads
displayBookmarks();
