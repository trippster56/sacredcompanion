# EmailJS Setup Guide

This guide will help you set up the contact form to send emails using EmailJS.

## Prerequisites
1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an Email Service (Gmail, Outlook, etc.) in your EmailJS account
3. Create an Email Template in EmailJS

## Setup Steps

### 1. Get Your EmailJS Credentials
1. Go to your [EmailJS dashboard](https://dashboard.emailjs.com/admin)
2. Note down your **Service ID** (or create a new email service)
3. Go to the **Email Templates** section and create a new template
4. Note down your **Template ID**
5. Go to **Account** > **API Keys** and note down your **Public Key**

### 2. Configure Environment Variables
1. Create a new file called `.env` in the project root
2. Copy the contents from `.env.example` to `.env`
3. Update the values with your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

### 3. Configure Email Template
In your EmailJS template, you can use these dynamic variables that will be passed from the contact form:
- `from_name` - The sender's name
- `from_email` - The sender's email
- `message` - The message content

### 4. Deploy to Vercel
1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import the repository to Vercel
3. Add the environment variables in Vercel's project settings:
   - Go to your project in Vercel
   - Click on Settings > Environment Variables
   - Add the same variables from your `.env` file
4. Deploy your application

## Testing
1. Fill out the contact form on your website
2. Check your email for the test message
3. Verify that the email was sent successfully

## Troubleshooting
- If emails aren't being sent, check the browser's console for any error messages
- Ensure all environment variables are correctly set in both local development and Vercel
- Verify that your EmailJS template is properly configured with the correct variable names
