# 3D Viewer with Command Palette

A modern React TypeScript application featuring a command palette for navigation and 3D model viewing capabilities. Built with Vite for optimal development experience.

## Features

- 🎯 Command palette for quick navigation (Press `Cmd+K` or `Ctrl+K` to open)
- 🚀 Fast navigation between pages
- 📦 3D STL file viewer with the following features:
  - Drag and drop file upload
  - Orbit controls for model manipulation
  - Professional lighting setup with environment maps
  - Real-time model rendering
- 🎨 Clean, modern UI
- ⚡ Lightning-fast development with Vite
- 📱 Responsive design

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd site_with_command_pallette
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/     # Reusable components
│   └── ModelViewer.tsx
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## Usage

### Command Palette

The command palette is the primary navigation tool in the application:

- Open: Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
- Navigation:
  - Type to search for commands
  - Use arrow keys to navigate results
  - Press Enter to execute a command

Quick commands:
- `g 1` - Navigate to Page One
- `g 2` - Navigate to Page Two
- `g 3` - Open 3D Viewer

### 3D Viewer

The 3D viewer supports STL files with the following features:

1. File Upload:
   - Click the file input button
   - Select an STL file from your computer
   - The model will automatically load and center in the viewer

2. Model Interaction:
   - Left click + drag: Rotate the model
   - Right click + drag: Pan the camera
   - Scroll wheel: Zoom in/out
   - Double click: Reset camera position

## Development

The project uses modern development tools and practices:

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run serve    # Preview production build
npm run lint     # Run ESLint
```

### Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **3D Rendering**: Three.js with React Three Fiber
- **Command Palette**: kbar
- **Routing**: React Router v6
- **Type Checking**: TypeScript
- **Code Quality**: ESLint

### Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
