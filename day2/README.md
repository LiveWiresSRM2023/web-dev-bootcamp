# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Create a New Vite React Project

## Step 1: Create a New Vite Project

1. **Open Your Terminal or Command Prompt**:
   - On Windows, you can open Command Prompt or PowerShell.
   - On macOS, open Terminal.
   - On Linux, open your preferred terminal application.

2. **Navigate to the Directory Where You Want to Create Your Project**:
   - Use the `cd` command to change the directory. For example:
     ```sh
     cd path/to/your/projects
     ```

3. **Run the Following Command to Create a New Vite Project**:
   - In your terminal, type and run:
     ```sh
     npm create vite@latest
     ```
   - This command will initialize the Vite project creation process.

## Step 2: Follow the Prompts

1. **Enter a Project Name**:
   - When prompted, enter the name for your new project. For example:
     ```sh
     my-vite-react-app
     ```

2. **Select a Framework**:
   - You will be asked to choose a framework. Use the arrow keys to select `React` and press `Enter`.

3. **Select a Variant**:
   - Next, choose between JavaScript and TypeScript. Use the arrow keys to select your preferred variant and press `Enter`.

## Step 3: Navigate Into the Project Directory

1. **Change Directory to Your New Project**:
   - Use the `cd` command to move into your newly created project directory:
     ```sh
     cd my-vite-react-app
     ```

2. **Install Dependencies**:
   - Run the following command to install the necessary dependencies:
     ```sh
     npm install
     ```

3. **Run the Development Server**:
   - Start the Vite development server by running:
     ```sh
     npm run dev
     ```
   - This will launch the development server, and you should see output similar to this:

     ```
     VITE v2.x.x  ready in x.xs

     ➜  Local:   http://localhost:3000/
     ➜  Network: use --host to expose
     ```

   - Open your browser and navigate to `http://localhost:3000` to see your new React app running.

## Example Commands Summary

```sh
# Step 1: Create a new Vite project
npm create vite@latest

# Follow the prompts to choose project name, framework (React), and variant (JavaScript or TypeScript)

# Step 3: Navigate into the project directory
cd my-vite-react-app

# Install dependencies
npm install

# Run the development server
npm run dev
