# Customer Support Knowledge Agent - Setup Guide for macOS

This guide provides step-by-step instructions for setting up and running the Customer Support Knowledge Agent UI on macOS.

## Prerequisites

Before you begin, ensure you have Node.js installed on your Mac.

### Check if Node.js is installed

Open Terminal and run:

```bash
node --version
npm --version
```

If both commands return version numbers, you're good to go! If not, continue to the next section.

### Install Node.js (if needed)

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version for macOS
3. Run the installer and follow the prompts
4. Restart Terminal after installation
5. Verify installation by running the version checks again

## Step-by-Step Setup

### Step 1: Clone or Download the Repository

If you haven't already, get the code:

```bash
# Using git
git clone https://github.com/bhaba-elastic/mcp-server-elasticsearch.git
cd mcp-server-elasticsearch

# Or download and extract the ZIP file, then navigate to it in Terminal
```

### Step 2: Navigate to the Frontend Directory

```bash
cd frontend
```

### Step 3: Install Dependencies

This will download all required packages (React, Tailwind CSS, Lucide icons, etc.):

```bash
npm install
```

This may take a few minutes. You'll see progress messages as packages are installed.

### Step 4: Start the Development Server

```bash
npm start
```

You should see output like:

```
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.x.x.x:3000
```

Your default browser should automatically open to `http://localhost:3000`.

## Using the Application

### First-Time Usage

1. You'll see the Customer Support Knowledge Agent interface
2. Try clicking one of the three example buttons:
   - **Login Issues**: "Can't access account"
   - **Performance**: "Slow loading times"
   - **Integration**: "Third-party setup"
3. Click the **Search** button or press Enter
4. After a brief simulation, you'll see:
   - AI-recommended resolution steps
   - Similar historical tickets
   - Knowledge base articles
   - A draft customer response template

### Custom Searches

1. Type your own issue description in the search box
2. Examples:
   - "Customer can't reset their password"
   - "Payment not processing"
   - "Mobile app crashes on startup"
3. Click Search or press Enter

### Copying Response Templates

1. After viewing results, find the "Draft Customer Response" section
2. Click the **Copy Template** button
3. The template is now in your clipboard
4. Paste it into your email client or support ticketing system

## Common Commands

### Start the application
```bash
npm start
```

### Stop the application
Press `Ctrl + C` in the Terminal window where it's running

### Build for production
```bash
npm run build
```

### Run tests
```bash
npm test
```

## Troubleshooting

### Port 3000 already in use

**Problem**: Another application is using port 3000

**Solution**: 
```bash
# Option 1: Use a different port
PORT=3001 npm start

# Option 2: Find and stop the process using port 3000
lsof -ti:3000 | xargs kill
```

### "command not found: npm"

**Problem**: Node.js/npm not installed or not in PATH

**Solution**: 
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Restart Terminal
3. Try again

### Installation fails

**Problem**: Package installation errors

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Styles not working correctly

**Problem**: Tailwind CSS not loading

**Solution**: Verify `src/index.css` contains:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Browser doesn't open automatically

**Problem**: Browser doesn't open when running `npm start`

**Solution**: Manually open `http://localhost:3000` in your browser

## Project Structure

```
frontend/
├── public/               # Static files (HTML, favicon, etc.)
├── src/
│   ├── App.js           # Main application component
│   ├── SupportAgentUI.js # Customer Support UI component
│   ├── index.js         # Application entry point
│   ├── index.css        # Global styles with Tailwind
│   └── ...
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # Detailed documentation
```

## Next Steps

### Customizing the UI

1. Open `src/SupportAgentUI.js` in your favorite code editor
2. Modify the mock data in the `handleSearch` function
3. Change styling by updating Tailwind CSS classes
4. Save and see changes automatically reload in the browser

### Connecting to Real Data

To connect this UI to actual Elasticsearch data:

1. Create a backend API that uses the Elasticsearch MCP Server
2. Replace the mock `handleSearch` function with actual API calls
3. Update the data structure to match your Elasticsearch indices

Example:
```javascript
const handleSearch = async () => {
  const response = await fetch('/api/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  const data = await response.json();
  setResults(data);
};
```

## Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Node.js Documentation](https://nodejs.org/docs/)

## Getting Help

If you encounter issues:

1. Check the [frontend/README.md](README.md) for detailed documentation
2. Review error messages in the Terminal
3. Check the browser console for errors (press F12 or Cmd+Option+I)
4. Search for the error message online

## Summary

You've successfully set up the Customer Support Knowledge Agent UI! Here's a quick recap:

```bash
# Setup (one-time)
cd frontend
npm install

# Run (every time)
npm start

# Stop (when done)
Ctrl + C
```

Enjoy exploring the UI! 🚀
