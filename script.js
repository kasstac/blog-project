// Get form and blog posts container
const form = document.getElementById("blog-form");
const blogPostsContainer = document.getElementById("blog-posts");

// Initialize blog posts array
let blogPosts = [];

// Function to render blog posts
function renderBlogPosts() {
  alert("Thank You for Uploading the Blog! Go to the Blog to see.");
  blogPostsContainer.innerHTML = "";
  blogPosts.forEach((post, index) => {
    const blogPostHTML = `
            <div class="col-md-6">
            <div
              class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
            >
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-2.5 blog-h">${post.title}</h3>
                <div class="mb-2.5 text-body-secondary blog-a">Author: ${post.author}</div>
                <p class="card-text mb-auto blog-p">
                ${post.content}
                </p>
              </div>
            </div>
          </div>
        `;
    blogPostsContainer.insertAdjacentHTML("beforeend", blogPostHTML);
  });
}

// Form submission event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const author = document.getElementById("author").value;

  // Create new blog post object
  const newPost = {
    title,
    content,
    author,
  };

  // Add new post to blog posts array
  blogPosts.push(newPost);

  // Render updated blog posts
  renderBlogPosts();

  // Clear form fields
  form.reset();
});
