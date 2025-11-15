# Deploying to Netlify

This portfolio is configured to deploy on Netlify with Next.js 15.

## Quick Deploy

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify:**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select this repository

3. **Build Settings (Auto-detected):**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `20`

4. **Environment Variables (if needed):**
   - Add any environment variables in Netlify dashboard under Site settings → Environment variables

5. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically use the `netlify.toml` configuration

## Drag and Drop Deploy (Easiest Method)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Drag and drop the `out` folder:**
   - Go to [Netlify](https://www.netlify.com/)
   - Log in to your account
   - On the dashboard, find the "Sites" section
   - Drag and drop the entire `out` folder from your project directory onto the Netlify dashboard
   - Netlify will automatically deploy your site

3. **Your site will be live** at a URL like `https://random-name-123.netlify.app`

## Git-Based Deploy (Automatic)

If you prefer automatic deployments from Git:

```bash
# Build the project
npm run build

# Commit and push your code
git add .
git commit -m "Ready for deployment"
git push
```

Then connect your repository to Netlify (see "Quick Deploy" above).

## Configuration Files

- `netlify.toml` - Netlify build and deployment configuration
- Uses `@netlify/plugin-nextjs` for Next.js support

## Custom Domain

After deployment, you can add a custom domain in Netlify:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed

## Notes

- This portfolio is configured for **static export** (no server-side functionality)
- All pages are pre-rendered as static HTML files
- Make sure to update `baseURL` in `src/resources/once-ui.config.ts` with your Netlify domain after deployment
- The `out` folder contains all static files ready for deployment

