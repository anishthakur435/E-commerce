# 🛍️ E-Commerce App

A modern, full-featured e-commerce application built with **React 19**, **Vite**, **Tailwind CSS**, and **Material-UI**. This project demonstrates a complete shopping experience with product browsing, cart management, user authentication via Clerk, and a smooth checkout process.

## ✨ Features

- **🛒 Product Catalog**: Browse and search through products with detailed views
- **🛒 Shopping Cart**: Add/remove items and manage cart quantities in real-time
- **🔐 Secure Authentication**: User sign up and login via Clerk authentication
- **📦 Product Details**: View comprehensive product information with images and pricing
- **💳 Checkout Process**: Complete multi-step checkout with order review
- **📄 Receipt Generation**: Order confirmation and receipt display
- **📱 Responsive Design**: Fully responsive UI that works on all devices
- **✉️ Newsletter**: Subscribe to updates and promotions
- **🎨 Smooth Animations**: Framer Motion-powered animations for enhanced UX
- **📝 Form Validation**: React Hook Form with robust validation
- **🔔 Toast Notifications**: User feedback with React Toastify

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2** - Latest React with concurrent features
- **Vite 8.2** - Lightning-fast build tool and dev server

### Styling & UI
- **Tailwind CSS 4.3** - Utility-first CSS framework
- **Material-UI (MUI) 9.3** - Professional component library
- **Framer Motion 13** - Advanced animations and transitions

### Routing & State Management
- **React Router DOM 7.11** - Client-side routing with nested routes
- **Context API** - State management for products, auth, and cart
- **Clerk Auth** - Modern authentication solution

### Forms & Validation
- **React Hook Form 7.85** - Efficient form state management
- **Form validation** - Client-side validation

### API & Communication
- **Axios 1.19** - HTTP client with interceptors for API calls

### Other Libraries
- **React Toastify 11.1** - Toast notifications for user feedback

### Development Tools
- **Node.js** - JavaScript runtime
- **ESLint 10.8** - Code quality and linting
- **npm** - Package management

## 📋 Prerequisites

Before running this project, ensure you have:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm or yarn** - Package manager
- **Git** - Version control
- **Clerk Account** - For authentication ([Sign up at clerk.com](https://clerk.com))
- **Backend API** - A configured backend API endpoint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/e-commerce-app.git
   cd e-commerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment configuration**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_MY_API_KEY_PRODUCTS=your_backend_api_url
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

   **Environment Variables Explained:**
   - `VITE_MY_API_KEY_PRODUCTS` - Your backend API endpoint for fetching products and managing orders
   - `VITE_CLERK_PUBLISHABLE_KEY` - Clerk authentication public key from your Clerk dashboard

## 🏃 Running Locally

### Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── layout/             # Layout wrappers
│   │   ├── MainLayout.jsx        # Main app layout
│   │   ├── CheckoutLayout.jsx    # Checkout page layout
│   │   ├── LoginInLayout.jsx     # Login/Sign up layout
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── Footer.jsx            # Footer component
│   │   ├── AnnouncementBar.jsx   # Top announcement bar
│   │   └── Newsletter.jsx        # Newsletter subscription
│   └── Reusable/           # Reusable UI components
│       ├── ButtonCard.jsx         # Button component
│       ├── FormField.jsx          # Form input wrapper
│       ├── ProductDisplayCard.jsx # Product card
│       └── ToastNotification.jsx  # Toast notifications
├── pages/                   # Page components (lazy loaded)
│   ├── Home/               # Homepage
│   ├── Shop/               # Product listing page
│   ├── Cart/               # Shopping cart page
│   ├── ViewProduct/        # Product detail page
│   ├── CheckOut/           # Checkout page
│   ├── Receipt/            # Order receipt page
│   ├── About/              # About us page
│   ├── Contact/            # Contact page
│   └── LogIn/              # Authentication pages
│       ├── SignIn.jsx
│       └── SignUp.jsx
├── routes/                 # Routing configuration
│   ├── AppRoutes.jsx      # Main route definitions
│   └── CustomProvider.jsx # Context providers setup
├── services/              # API and state management
│   ├── api.js            # Axios API configuration
│   └── context/          # Context providers
│       ├── getProducts.jsx    # Products context
│       └── userAuth.jsx       # User authentication context
├── assets/               # Static files
│   └── images/          # Image assets
├── App.jsx              # Root component
├── index.css            # Global styles
└── main.jsx             # Application entry point
```

## 🔐 Key Features

### 🔑 Authentication with Clerk
- Secure user registration and login via Clerk
- Social authentication support (Google, GitHub, etc.)
- User session management
- Protected routes for authenticated users

### 🛒 Cart Management
- Add/remove products from cart
- Update product quantities
- Real-time cart total calculations
- Persistent cart state management via Context API

### 📦 Product Management
- Fetch products from backend API
- Product listing with filtering and sorting
- Detailed product view with images
- Product recommendations

### 💳 Checkout Flow
- Multi-step checkout process
- Order review and summary
- Order confirmation
- Receipt generation and display

### 🎨 User Experience
- Smooth animations with Framer Motion
- Responsive design with Tailwind CSS
- Material-UI components for consistency
- Form validation with React Hook Form
- Toast notifications for user feedback
- Loading states with Suspense

## 🚀 Deployment on Vercel

### Prerequisites
- Vercel account (https://vercel.com) - Sign up free
- GitHub repository with your code
- Clerk account configured (https://clerk.com)
- Backend API deployed and accessible

### Step-by-Step Deployment

#### 1. **Prepare Your Repository**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### 2. **Connect to Vercel**
- Visit [Vercel Dashboard](https://vercel.com/dashboard)
- Click "New Project"
- Select your GitHub repository containing the e-commerce app
- Click "Import"

#### 3. **Configure Build Settings**
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### 4. **Add Environment Variables**
In Vercel project settings → Environment Variables, add:
```
VITE_MY_API_KEY_PRODUCTS=your_production_backend_api_url
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

**Getting Your Environment Variables:**
- **Clerk Key**: 
  1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
  2. Select your application
  3. Copy the "Publishable Key" from API Keys
  
- **Backend URL**:
  1. Deploy your backend to a service like Heroku, Railway, or Render
  2. Use the production API endpoint

#### 5. **Deploy**
- Click "Deploy"
- Wait for the build to complete
- Your app will be live at the provided Vercel URL (e.g., `your-app.vercel.app`)

#### 6. **Configure Clerk for Production**
After deployment:
1. Go to Clerk Dashboard → Settings → URLs
2. Add your Vercel domain to **Allowed URLs**:
   - Allowed Origins: `https://your-app.vercel.app`
   - Allowed Redirect URLs: `https://your-app.vercel.app/sign-in/*`, `https://your-app.vercel.app/*`

### Optional: Add Custom Domain
- In Vercel project settings → Domains
- Add your custom domain (e.g., `yoursite.com`)
- Update DNS records as instructed by Vercel
- Update Clerk allowed URLs with your custom domain

### Monitoring & Updates
- Vercel automatically deploys on every push to `main`
- Monitor builds and logs in Vercel dashboard
- Check application performance and errors in Vercel Analytics

## 🌐 API Integration

The app connects to a backend API for:
- Product catalog data fetching
- User orders and purchase history
- Cart management
- Transaction processing

**Backend API Configuration:**
Update the API endpoint in `src/services/api.js`:
```javascript
const AxiosApi = axios.create({
  baseURL: import.meta.env.VITE_MY_API_KEY_PRODUCTS,
});
```

**Expected Backend Endpoints:**
- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch product details
- `POST /orders` - Create new order
- `GET /orders/:userId` - Fetch user orders

**Authentication:**
Clerk tokens are automatically managed for API calls. Pass the token in request headers if your backend requires authentication.

## � Performance Optimizations

This project includes several performance optimizations:

- **Code Splitting**: Route-based lazy loading with React.lazy()
- **Suspense Boundaries**: Loading states during route transitions
- **Tailwind CSS**: Minimal CSS footprint with utility classes
- **Vite**: Ultra-fast build tool and dev server
- **API Interceptors**: Request/response optimization with Axios

## 🐛 Troubleshooting

### Environment Variables Not Loading
- Ensure `.env.local` file is in the project root
- Restart the dev server after adding env variables
- Prefix all variables with `VITE_` for Vite to recognize them

### Clerk Authentication Not Working
- Verify Clerk publishable key is correct
- Check Clerk allowed URLs match your deployment domain
- Clear browser cookies and try again

### API Calls Failing
- Verify backend API is running and accessible
- Check network tab in browser DevTools
- Ensure CORS is enabled on backend
- Verify `VITE_MY_API_KEY_PRODUCTS` points to correct endpoint

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are listed in `package.json`
- Clear Vercel cache and redeploy

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Material-UI Components](https://mui.com/material-ui/getting-started/)
- [Clerk Authentication](https://clerk.com/docs)
- [React Router Guide](https://reactrouter.com/docs/en/v6)
- [Vercel Deployment Guide](https://vercel.com/docs/concepts/deployments/overview)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** and test thoroughly
4. **Commit with clear messages**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request** with a description of changes

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support & Contact

For issues, questions, or suggestions:
- **GitHub Issues**: Open an issue on the repository
- **Email**: [your-email@example.com]
- **Discord/Community**: [Add your community link]

## 🔗 Important Links

- 🌍 **Live Demo**: [Deploy your Vercel URL here]
- 📦 **Repository**: [Your GitHub Repository URL]
- 🔌 **Backend API**: [Your Backend Repository URL]
- 👤 **Clerk**: [Your Clerk Project Link]

---

**Made with ❤️ by [Your Name/Team]**

**Last Updated**: August 2026
