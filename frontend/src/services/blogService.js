const API_URL = "http://127.0.0.1:8000/api/blog/";

export async function fetchBlogs() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch blogs");
  return response.json();
}

export async function createBlog(blog) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  if (!response.ok) throw new Error("Failed to create blog");
  return response.json();
} 