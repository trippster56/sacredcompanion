# Website Management Guide

Welcome to your website management guide! This document will help you update and maintain your website's content.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Updating Content](#updating-content)
   - [Text Content](#text-content)
   - [Images](#images)
   - [Contact Form](#contact-form)
3. [Adding New Pages](#adding-new-pages)
4. [Deploying Changes](#deploying-changes)
5. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites
- A GitHub account
- Basic understanding of Markdown (for content editing)
- Access to the website's GitHub repository
- Vercel account (for deployment)

### Repository Structure
```
src/
├── pages/         # Website pages
├── components/    # Reusable components
├── assets/        # Images and other static files
└── styles/        # Global styles
```

## Updating Content

### Text Content

1. **Find the file** you want to edit in the `src/pages/` directory.
2. **Edit the text** between the quotation marks or HTML tags.
3. **Save the file** and commit your changes.

Example for updating the Home page:
```tsx
// In src/pages/Home.tsx
<h1>Welcome to My Spiritual Journey</h1>
<p>Your updated introduction text goes here...</p>
```

### Images

1. **Add new images** to the `src/assets/images/` directory.
2. **Reference them** in your components:

```tsx
import myImage from '../assets/images/your-image.jpg';

// In your component
<img src={myImage} alt="Description" />
```

### Contact Form

The contact form is pre-configured with EmailJS. To update the recipient email or form fields:

1. **Edit** `src/pages/Contact.tsx`
2. **Update** the form fields as needed
3. **Update** the email template in your EmailJS dashboard if you change field names

## Adding New Pages

1. **Create a new file** in `src/pages/` (e.g., `NewPage.tsx`)
2. **Use this template**:

```tsx
import React from 'react';

export const NewPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Page Title</h1>
      <p>Your content here</p>
    </div>
  );
};
```

3. **Add the page** to your navigation in `src/components/Header.tsx`

## Deploying Changes

### Automatic Deployment (Recommended)
- Push changes to the `main` branch
- Vercel will automatically deploy the updates

### Manual Deployment
1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run locally** (for testing):
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**:
   - Push changes to GitHub
   - Vercel will automatically deploy from the main branch

## Troubleshooting

### Common Issues

1. **Changes not showing up?**
   - Clear your browser cache
   - Check Vercel deployment status
   - Verify your changes were committed and pushed

2. **Build errors**
   - Check the error message in the terminal
   - Ensure all dependencies are installed
   - Verify TypeScript types are correct

3. **Contact form not working**
   - Verify EmailJS credentials in Vercel environment variables
   - Check browser console for errors
   - Ensure your EmailJS template matches the form field names

### Getting Help

For technical support, please contact:
- Your developer: [Your Contact Information]
- Vercel Support: https://vercel.com/support
- EmailJS Support: https://www.emailjs.com/support/

## Best Practices

1. **Backup** your content before making major changes
2. **Test changes** locally before deploying
3. **Commit often** with descriptive messages
4. **Keep images optimized** for web (use tools like TinyPNG)
5. **Regularly update** dependencies using `npm update`

---
Last Updated: August 2025
