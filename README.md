# Group 3 Profile

React + Vite single-page profile site for Group 3.

## Local Development
- Install dependencies with `npm install`.
- Start the dev server on <http://localhost:5173> using `npm run dev`.
- Run the production build locally with `npm run build`.
- Preview the production bundle with `npm run preview`.

## CI/CD with GitHub Pages
- Workflow file: `.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages.
- Triggers: every push to `main`, or manual runs via **Actions → Deploy to GitHub Pages → Run workflow**.
- Tooling: Node.js 20 with `npm ci`, followed by `npm run build`, then `actions/deploy-pages@v4` publishes the site.
- First-time setup: in GitHub → Settings → Pages, ensure the source is set to **GitHub Actions** and grant the workflow read/write permission to Pages if prompted.

## Redirect root domain
- File `root-redirect/index.html` performs a meta-refresh + script redirect to `https://azhriler7.github.io/group3-profile/`.
- Create a repository named `azhriler7/azhriler7.github.io` (this hosts `https://azhriler7.github.io/`).
- Copy `root-redirect/index.html` into that repo as its `index.html`, commit, and enable GitHub Pages (from `main`, root).
- Visiting `https://azhriler7.github.io/` will then jump to the profile app while keeping the existing project Pages workflow untouched.

## Project Notes
- The Vite base path is set to `/group3-profile/` so assets load correctly from GitHub Pages.
- Update the base path if the repository name changes or if you host under a custom domain.
