# table-list-lit

## Web Components with LitElement and Vite

This project is a comprehensive example demonstrating the use of Web Components with LitElement, utilizing Vite as the build tool. It features a modular architecture with reusable components, routing, and API integration.


## Project Structure

```
table-list-lit/
├── src/
│   ├── main.js                    # Main application entry point
│   ├── styles/
│   │   └── main.styles.js         # Main app styles
│   ├── modules/
│   │   ├── components/            # Reusable Web Components
│   │   │   ├── button/
│   │   │   │   ├── button.js
│   │   │   │   └── styles/
│   │   │   │       └── button.styles.js
│   │   │   ├── input/
│   │   │   │   ├── input.js
│   │   │   │   └── styles/
│   │   │   │       └── input.styles.js
│   │   │   ├── select/
│   │   │   │   ├── select.js
│   │   │   │   └── styles/
│   │   │   │       └── select.styles.js
│   │   │   └── table/
│   │   │       ├── table.js
│   │   │       └── styles/
│   │   │           └── table.styles.js
│   │   ├── services/
│   │   │   └── apiService.js      # API integration service
│   │   └── views/                 # Application pages/views
│   │       ├── principalPage/
│   │       │   ├── principalPage.js
│   │       │   └── styles/
│   │       │       └── principalPage.styles.js
│   │       └── formPage/
│   │           ├── formPage.js
│   │           └── styles/
│   │               └── formPage.styles.js
│   └── utils/
│       └── formatData.js          # Data formatting utilities
├── public/                        # Static assets
├── index.html                     # HTML entry point
├── package.json
└── README.md
```

## Features

### Components

- **Button** (`wc-button`): Customizable button with disabled state
- **Input** (`wc-input`): Text input with event handling
- **Select** (`wc-select`): Dropdown component with options
- **Table** (`wc-table`): Dynamic table for displaying data

### Views

- **Principal Page**: Displays a list of dogs from an API with filtering capabilities
- **Form Page**: Form to create and manage data with validation

### Routing

The application uses `@lit-labs/router` for client-side routing between different views.

## Technologies

- **Lit 3.2.1**: Lightweight library for building Web Components
- **Vite 6.2.3**: Fast build tool and development server
- **Axios 1.12.0**: HTTP client for API requests
- **Lodash 4.17.21**: Utility library
- **@lit-labs/router 0.1.4**: Client-side routing

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`


```

## Security

All dependencies are kept up-to-date to address security vulnerabilities. The project uses:

- Vite 6.2.3+ (addresses CVE-2025-58752, CVE-2025-58751, CVE-2025-30208, CVE-2025-31125, CVE-2025-31486)
- Axios 1.12.0+ (addresses CVE-2025-58754)
- Form-data 4.0.4+ (addresses CVE-2025-7783)

## Architecture Highlights

### Separation of Concerns

- **Components**: Each component has its own folder with logic and styles separated
- **Styles**: All styles are in dedicated `.styles.js` files using Lit's `css` tagged template
- **Services**: API logic is abstracted in service files
- **Utils**: Reusable utilities for data transformation

### Component Communication

Components use custom events for parent-child communication:

- `button-click`: Emitted when button is clicked
- `input-change`: Emitted when input value changes
- `select-change`: Emitted when select value changes

## Best Practices

- ✅ Modular component structure
- ✅ Separated styles from logic
- ✅ Consistent naming conventions
- ✅ Custom events for component communication
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ Secure dependencies
