# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 13, React, and Tailwind CSS. This portfolio showcases my professional experience, skills, and projects with a clean and intuitive user interface.

🌍 Live Demo
This project is hosted on Vercel.
🔗 Live Site: https://aynurkozan.com

<img width="1373" alt="image" src="https://github.com/user-attachments/assets/704dfc69-b861-4a91-b799-aec61b516e80" />


## 🚀 Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme switcher for better user experience
- **Contact Form**: Integrated EmailJS for seamless contact functionality
- **Email Protection**: Built-in email obfuscation to prevent spam
- **Performance Optimized**: Fast loading times and optimized assets
- **Accessibility**: WCAG compliant and keyboard navigable

## 🛠️ Built With

- [Next.js 13](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [EmailJS](https://www.emailjs.com/) - Client-side email sending
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons in React
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio.git
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install

# or

yarn install
\`\`\`

3. Create a .env.local file in the root directory and add your EmailJS credentials:
   \`\`\`env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
   \`\`\`

4. Run the development server
   \`\`\`bash
   npm run dev

# or

yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration

### Email Configuration

The contact form uses EmailJS for sending emails. To configure:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Add your credentials to .env.local

### Customization

- Edit `data/resumeData.js` to update your experience and education
- Edit `data/addressData.js` to update your contact information
- Modify theme colors in `tailwind.config.js`
- Update styles in `styles/globals.css`

## 🚀 Deployment

This project can be deployed to any platform that supports Next.js:

- [Vercel](https://vercel.com/) (Recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For any questions or feedback, please reach out through the contact form on the website.
