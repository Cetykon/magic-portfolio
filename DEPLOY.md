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

## Manual Deploy

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The netlify.toml file is already configured
# Just connect your site to Netlify and it will use these settings
```

## Configuration Files

- `netlify.toml` - Netlify build and deployment configuration
- Uses `@netlify/plugin-nextjs` for Next.js support

## Custom Domain

After deployment, you can add a custom domain in Netlify:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed

## Notes

- The portfolio uses Next.js API routes (for OG image generation, etc.)
- Netlify's Next.js plugin automatically handles serverless functions
- Make sure to update `baseURL` in `src/resources/once-ui.config.ts` with your Netlify domain

