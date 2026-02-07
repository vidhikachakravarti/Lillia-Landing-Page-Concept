# Deployment Guide - Lillia Static Landing Page

## Quick Deploy Options

### 🚀 Fastest: Netlify Drop (30 seconds)

1. Go to https://app.netlify.com/drop
2. Drag the entire `static` folder
3. Done! Your site is live

### 🔥 Easy: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from static folder
cd static
vercel

# Follow prompts
```

### 📦 GitHub Pages

1. Create new repository on GitHub
2. Upload files from `static` folder
3. Go to Settings > Pages
4. Select main branch as source
5. Save

Your site will be live at: `https://yourusername.github.io/repo-name`

### ☁️ Cloudflare Pages

1. Go to https://pages.cloudflare.com
2. Create new project
3. Upload `static` folder
4. Deploy

### 🪣 AWS S3 (Static Website)

```bash
# Upload to S3 bucket
aws s3 sync static/ s3://your-bucket-name --acl public-read

# Enable static website hosting in S3 console
```

## Testing Locally

Before deploying, test locally:

### Option 1: Python Server
```bash
cd static
python3 -m http.server 8000
# Open http://localhost:8000
```

### Option 2: Node.js
```bash
cd static
npx serve
# Open http://localhost:3000
```

### Option 3: PHP
```bash
cd static
php -S localhost:8000
```

### Option 4: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## What You're Deploying

```
static/
├── index.html          (Main page - 12KB)
├── styles.css          (All styling - 10KB)
├── script.js           (Minimal JS - 2KB)
├── lillia-logo.png     (Logo)
└── README.md           (Documentation)
```

**Total size: ~24KB** (extremely fast!)

## Pre-Deployment Checklist

- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Verify logo displays correctly
- [ ] Test smooth scroll navigation
- [ ] Check responsive design at different widths
- [ ] Verify CTAs point to correct URLs

## Custom Domain Setup

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Update DNS records as instructed

### Vercel
```bash
vercel --prod
vercel domains add yourdomain.com
```

### GitHub Pages
1. Add `CNAME` file to repository
2. Put your domain in it
3. Update DNS settings

## Adding Analytics

### Google Analytics
Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible (Privacy-friendly)
Add before `</head>`:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## SEO Enhancements

Add to `<head>` section:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com/">
<meta property="og:title" content="Lillia - AI-Powered Chronic Care at Scale">
<meta property="og:description" content="Agentic AI infrastructure for healthcare systems">
<meta property="og:image" content="https://yourdomain.com/og-image.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourdomain.com/">
<meta property="twitter:title" content="Lillia - AI-Powered Chronic Care at Scale">
<meta property="twitter:description" content="Agentic AI infrastructure for healthcare systems">
<meta property="twitter:image" content="https://yourdomain.com/twitter-image.png">

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png">
```

## Performance Optimization

### 1. Compress Images
- Use TinyPNG for logo
- Convert to WebP where possible

### 2. Enable Gzip (Most hosts do this automatically)

### 3. Add CDN (Cloudflare)
- Free tier available
- Automatic caching
- DDoS protection

### 4. Lazy Load Images
In `index.html`, add to images:
```html
<img src="image.png" loading="lazy" alt="Description">
```

## SSL Certificate

All recommended platforms (Netlify, Vercel, GitHub Pages, Cloudflare) provide **free SSL automatically**.

For custom servers:
- Use Let's Encrypt (free)
- Or Cloudflare SSL

## Monitoring

### Free Options:
- **Uptime Robot** - Monitor if site is up
- **Google Search Console** - SEO insights
- **Cloudflare Analytics** - Traffic stats

### Paid Options:
- **Datadog** - Full monitoring
- **New Relic** - Performance tracking

## Troubleshooting

### Logo not showing?
- Check file path is correct: `lillia-logo.png`
- Ensure logo file is in same folder as index.html

### Styles not loading?
- Verify `styles.css` is in same folder
- Check browser console for errors

### Links not working?
- Make sure CTAs point to valid URLs
- Test anchor links scroll properly

### Mobile issues?
- Test on actual device, not just browser dev tools
- Check touch targets are large enough (44px minimum)

## Next Steps After Deployment

1. **Set up monitoring** - Know if your site goes down
2. **Add analytics** - Track visitor behavior
3. **Submit to Google** - Get indexed in search
4. **Test performance** - Run Lighthouse audit
5. **Set up backups** - Download site periodically

## Support

Questions? Check:
1. `README.md` in static folder
2. Platform-specific documentation
3. Browser console for errors

## Estimated Deployment Times

- Netlify Drop: **30 seconds**
- Vercel CLI: **1 minute**
- GitHub Pages: **2-5 minutes**
- Cloudflare Pages: **1-2 minutes**
- AWS S3: **5 minutes** (first time setup)

Choose the fastest option for your needs!
