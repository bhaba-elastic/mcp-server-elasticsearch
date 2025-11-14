# Customer Support Knowledge Agent UI

A React-based user interface for the Customer Support Knowledge Agent that helps support agents quickly find solutions from historical tickets and knowledge base articles.

## Overview

This application provides an intuitive interface where support agents can:
- Search for solutions by describing customer issues
- View AI-recommended resolution steps
- Access similar historical tickets
- Get relevant knowledge base articles
- Copy ready-to-use customer response templates

## Prerequisites

Before you begin, make sure you have the following installed on your macOS:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

To check if you have Node.js and npm installed:

```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

## Installation

### Step 1: Navigate to the frontend directory

```bash
cd frontend
```

### Step 2: Install dependencies

```bash
npm install
```

This will install all required dependencies including:
- `react` - The React library
- `react-dom` - React DOM bindings
- `lucide-react` - Icon library
- `tailwindcss` - Utility-first CSS framework
- Other supporting packages

## Running the Application

### Start the development server

```bash
npm start
```

This command will:
1. Start the development server
2. Automatically open your browser to `http://localhost:3000`
3. Enable hot-reloading (changes to code will automatically refresh the browser)

The application should now be running! You'll see the Customer Support Knowledge Agent UI.

### Stop the development server

Press `Ctrl + C` in the terminal where the server is running.

## Using the Application

1. **Try the Quick Start Examples**: Click on one of the three example buttons (Login Issues, Performance, Integration) to see the UI in action

2. **Custom Search**: Type your own customer issue description in the search bar and click "Search" or press Enter

3. **View Results**: 
   - See AI-recommended resolution steps
   - Review similar historical tickets
   - Access relevant knowledge base articles
   - Copy the draft customer response template

## Project Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── App.js          # Main App component
│   ├── SupportAgentUI.js  # Customer Support UI component
│   ├── index.js        # Entry point
│   ├── index.css       # Global styles with Tailwind
│   └── ...
├── package.json        # Project dependencies
└── tailwind.config.js  # Tailwind CSS configuration
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Customization

### Modifying the Component

The main UI component is located at `src/SupportAgentUI.js`. You can:
- Modify the styling by changing Tailwind CSS classes
- Update the mock data in the `handleSearch` function
- Connect to a real API by replacing the simulated API call

### Connecting to a Real API

To connect to a real backend, replace the mock data in `handleSearch`:

```javascript
const handleSearch = async () => {
  if (!query.trim()) return;
  
  setLoading(true);
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    
    const data = await response.json();
    setResults(data);
  } catch (error) {
    console.error('Error fetching results:', error);
  } finally {
    setLoading(false);
  }
};
```

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **lucide-react** - Icon library for modern, customizable icons
- **Create React App** - Build toolchain for React applications

## Troubleshooting

### Port 3000 is already in use

If you see an error that port 3000 is already in use, you can:
1. Stop the process using port 3000
2. Or choose a different port by running: `PORT=3001 npm start`

### Dependencies installation fails

Try clearing the npm cache and reinstalling:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSS not working

Make sure the Tailwind directives are present in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## License

This project is part of the Elasticsearch MCP Server repository. See the main repository LICENSE file for details.
