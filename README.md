# Portfolio Website

A professional portfolio website showcasing skills, experience, and projects.

## Features

- Responsive design that works on all devices
- Modern and clean UI
- Dynamic project cards loaded from JavaScript
- Smooth scrolling and mobile-friendly navigation

## How to Use

1. Clone or download this repository
2. Open `index.html` in your browser to view the website
3. Customize the content in the HTML files to match your information
4. Add your profile image to replace the placeholder
5. Update project information in the `script.js` file

## Customization

### Colors

You can easily change the color scheme by modifying the CSS variables in the `:root` selector in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --dark-color: #1f2937;
    --light-color: #f3f4f6;
    --success-color: #10b981;
    --danger-color: #ef4444;
    --text-color: #374151;
    --border-color: #e5e7eb;
    --transition: all 0.3s ease;
}
```

### Projects

To add or modify projects, edit the `projectsData` array in `js/script.js`. Each project has the following structure:

```javascript
{
    name: "Project Name",
    description: "Project description text",
    tags: ["Tag1", "Tag2", "Tag3"],
    github: "https://github.com/username/repository",
    demo: "https://demo-link.com", // Optional
    image: "image-name.jpg" // Optional
}
```

## Deployment

You can deploy this website to any web hosting service that supports static websites, such as:

- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Firebase Hosting

Simply upload all the files to your hosting provider according to their documentation.

## Credits

- Font Awesome for icons
- Google Fonts for the Poppins font
