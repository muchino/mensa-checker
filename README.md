# Mensa Menu Service

REST API to fetch and parse menu plans from [thueringen.my-mensa.de](https://thueringen.my-mensa.de).

## Features
- Fetches daily or weekly menu plans from the Thüringen Mensa website
- Parses and returns menu data in JSON format
- Simple REST API built with Express

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mensa
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will start on the default port (usually 3000). You can change the port in `app.js` if needed.

## API Endpoints

- `GET /menus` - Fetches the current menu plan
- `GET /menus/:date` - Fetches the menu plan for a specific date (format: YYYY-MM-DD)

_Refer to the code in `app.js` for more details on available endpoints and parameters._

## Dependencies
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Cheerio](https://cheerio.js.org/)

## Development
- [Nodemon](https://nodemon.io/) for auto-reloading during development

## License

MIT

