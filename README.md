# Vehicle Inventory Web Application

A modern web application for managing vehicle inventory, built with **React**, **TypeScript**, and **Vite**.

## Features

- Fast, modern React UI with hot module replacement (HMR)
- TypeScript for type safety
- ESLint for code quality
- Easily customizable and extendable

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/vehicle-inventory.git
cd vehicle-inventory
npm install
# or
yarn install
```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Building for Production

```sh
npm run build
# or
yarn build
```

### Linting

```sh
npm run lint
# or
yarn lint
```

## Project Structure

```
├── public/           # Static assets
├── src/              # Source code
│   ├── components/   # React components
│   ├── pages/        # Page components
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## ESLint Configuration

This project uses ESLint with recommended rules for React and TypeScript. You can expand the configuration as needed. Example:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

---
Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/)