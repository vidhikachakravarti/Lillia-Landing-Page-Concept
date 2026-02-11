# Lillia Landing Page - Static HTML Version

This is a standalone HTML version that can be deployed anywhere without a build process.

## Files

- `index.html` - Main HTML file
- `styles.css` - All styling (includes brand colors and responsive design)
- `script.js` - Minimal JavaScript for smooth scrolling and animations

## How to Use

### Option 1: Open Locally
Simply double-click `index.html` to open in your browser.

### Option 2: Local Server
For better testing with a local server:

```bash
# Using Python
python3 -m http.server 8000

# Or using Node.js
npx serve

# Then open http://localhost:8000
```

### Option 3: Deploy to Static Hosting

**GitHub Pages:**
1. Create a new repository
2. Upload these files to the repository
3. Go to Settings > Pages
4. Select source branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

**Netlify:**
1. Drag and drop the `static` folder to netlify.com
2. Instant deployment!

**Vercel:**
```bash
vercel static
```

**AWS S3:**
1. Create S3 bucket
2. Enable static website hosting
3. Upload files
4. Set bucket policy for public access

**Cloudflare Pages:**
1. Upload folder via Cloudflare dashboard
2. Automatic deployment

## What's Included

✓ Full landing page with all sections:
- Navigation
- Hero with proof metrics
- Who We Serve (3 cards)
- Problem Section (dark background)
- Purpose & Mission
- Solutions overview
- Care Management Platform details
- Final CTA
- Footer

✓ Brand colors from Lillia brand manual
✓ Responsive design (mobile, tablet, desktop)
✓ Smooth scroll navigation
✓ Subtle scroll animations
✓ Professional enterprise aesthetic

## What's Not Included (From Full React Version)

This simplified version includes the core sections but omits some sub-sections for brevity:
- Agentic App details
- Journey Tracker details
- Conversational AI details
- Proof & Recognition section
- Impact Cards section
- Why Lillia section
- Audience Segmentation section

**To add these sections:** Copy the HTML structure from similar sections and add them between the current sections.

## Customization

### Update Colors
Edit the `:root` variables in `styles.css`:
```css
:root {
    --color-primary: #7848FE;
    --color-deep: #280470;
    /* etc. */
}
```

### Update Content
Edit the text directly in `index.html`. All content is clearly labeled with comments.

### Update Logo
Replace the logo path in `index.html`:
```html
<img src="path/to/your/logo.png" alt="Lillia">
```

### Add Images
1. Create an `images` folder
2. Add your images
3. Update paths in HTML:
```html
<img src="images/your-image.png" alt="Description">
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## File Size

- HTML: ~12KB
- CSS: ~10KB
- JS: ~2KB
- **Total: ~24KB** (extremely lightweight!)

## Performance

- No external dependencies (except Google Fonts)
- Minimal JavaScript
- Fast page load
- Mobile optimized

## Next Steps

1. **Add Visual Assets:**
   - Replace logo path
   - Add product screenshots
   - Add partner logos

2. **Connect Forms:**
   - Add demo booking form
   - Integrate with CRM
   - Add analytics

3. **SEO:**
   - Add meta tags
   - Add Open Graph tags
   - Add schema markup

4. **Analytics:**
   - Add Google Analytics
   - Add event tracking
   - Add conversion tracking

## Support

This is a simplified static version. For the full React/Next.js version with all sections, see the main project files.

## License

Proprietary - Lillia Health Technologies
