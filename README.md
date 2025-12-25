My Portfolio – Rohan Shamanthula
================================

This repository contains the source code for my personal portfolio website, hosted with GitHub Pages.

Live Site
---------

- **URL**: `https://rohansmarty.github.io/My-Portfolio/`

Tech Stack
----------

- **Frontend**: HTML5, CSS3, vanilla JavaScript
- **Hosting**: GitHub Pages
- **Containerization**: Docker
- **CI/CD**: Jenkins

Structure
---------

- `index.html` – Home page with hero section, skills, and quick actions.
- `resume.html` – Detailed resume (experience, skills, certifications, education).
- `projects.html` – Highlighted projects and impact.
- `contact.html` – Contact form and links.
- `style.css` – Shared styling for all pages.
- `script.js` – Navigation behavior (dropdowns, mobile hamburger menu).
- `assets/yourphoto.jpg` – Profile photo.
- `assets/Rohan_Shamanthula_Resume.pdf` – Downloadable resume.

Local Development
-----------------

### Option 1: Direct Browser
1. Clone the repo:
   ```bash
   git clone https://github.com/Rohansmarty/My-Portfolio.git
   cd My-Portfolio
   ```
2. Open `index.html` directly in a browser (no build step required).

### Option 2: Docker
1. Build and run with Docker:
   ```bash
   docker build -t my-portfolio .
   docker run -d -p 8080:80 --name portfolio my-portfolio
   ```
2. Visit `http://localhost:8080` in your browser.

### Option 3: Docker Compose
1. Run with docker-compose:
   ```bash
   docker-compose up -d
   ```
2. Visit `http://localhost:8080` in your browser.
3. To stop: `docker-compose down`

Deploying with GitHub Pages
---------------------------

1. Push changes to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Set **Source** to:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Save – the site will update automatically in ~30–60 seconds.

Jenkins CI/CD Pipeline
-----------------------

The repository includes a Jenkinsfile for automated CI/CD:

1. **Setup Jenkins Job:**
   - Create a new Pipeline job in Jenkins
   - Point it to this repository
   - Jenkins will automatically detect the `Jenkinsfile`

2. **Pipeline Stages:**
   - **Checkout**: Clones the repository
   - **Validate**: Checks for required files
   - **Build Docker Image**: Creates Docker image
   - **Test Container**: Tests the Docker container
   - **Push to GitHub Pages**: Auto-deploys on main branch

3. **Configure Credentials:**
   - Add GitHub credentials in Jenkins (ID: `github-credentials`)
   - Or modify the Jenkinsfile to use your credential ID

4. **Run Pipeline:**
   - Trigger manually or on git push
   - Pipeline will build, test, and deploy automatically

Docker Commands
---------------

```bash
# Build image
docker build -t my-portfolio .

# Run container
docker run -d -p 8080:80 --name portfolio my-portfolio

# View logs
docker logs portfolio

# Stop container
docker stop portfolio

# Remove container
docker rm portfolio

# Using docker-compose
docker-compose up -d      # Start
docker-compose down       # Stop
docker-compose logs -f    # View logs
```

Notes
-----

- The site remains active as long as this repository and my GitHub account exist.
- Docker image uses nginx:alpine for optimal performance and small size.
- Jenkins pipeline automatically validates, builds, and deploys changes.
- Feel free to use this structure as a template for your own portfolio.