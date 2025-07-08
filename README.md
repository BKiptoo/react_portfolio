# Bettson Portfolio

A modern fullstack portfolio web application built with React (frontend) and Django (backend).

## Project Overview

This project showcases a personal/professional portfolio with:
- A beautiful, responsive React frontend (Vite + Tailwind CSS)
- A Django REST API backend for blog management
- Features: About, Skills, Services, Contact, and a dynamic Blog section

## Project Structure

```
bettson_portfolio/
├── backend/      # Django backend (API, admin, blog management)
├── frontend/     # React frontend (portfolio UI)
└── README.md     # Project documentation
```

## Backend (Django)

- **Location:** `backend/`
- **Features:**
  - Blog API (CRUD)
  - Django admin for blog/content management
  - CORS enabled for frontend-backend communication

### Setup
1. **Install dependencies:**
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt  # or manually: django djangorestframework django-cors-headers
   ```
2. **Apply migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
3. **Create a superuser:**
   ```bash
   python manage.py createsuperuser
   ```
4. **Run the server:**
   ```bash
   python manage.py runserver
   ```
5. **Access:**
   - API: [http://127.0.0.1:8000/api/blog/](http://127.0.0.1:8000/api/blog/)
   - Admin: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

## Frontend (React)

- **Location:** `frontend/`
- **Features:**
  - Modern, responsive UI (Vite + Tailwind CSS)
  - Dynamic blog page with search, filter, pagination
  - About, Skills, Services, Contact, and more

### Setup
1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Access:**
   - [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal)

## Connecting Frontend & Backend
- The frontend fetches blog data from the backend API (`/api/blog/`).
- Make sure both servers are running for full functionality.
- CORS is enabled in Django for local development.

## Customization
- Add/edit blog posts via the Django admin panel.
- Update portfolio sections by editing React components in `frontend/src/pages/`.
- To support blog images, tags, categories, or other fields, update the Django model and React UI accordingly.

## Deployment
- For production, use a WSGI/ASGI server for Django and build the React app for static hosting.
- Configure environment variables and CORS for your deployment setup.

## License

MIT License 