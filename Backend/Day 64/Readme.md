# Helmet.js

### What is Helmet.js?
Helmet.js is a popular Node.js middleware primarily used with Express.js applications. It is a collection of smaller middleware functions that automatically set secure HTTP response headers.

### Why do we use it?
By default, Express.js does not configure essential security headers, leaving your application vulnerable to common web attacks. Helmet helps secure your application by configuring these headers to protect against:
*   **Cross-Site Scripting (XSS):** Helps prevent attackers from injecting malicious scripts into your web pages.
*   **Clickjacking:** Prevents your site from being put in an iframe without your permission (using `X-Frame-Options`).
*   **MIME-Sniffing:** Prevents browsers from guessing the MIME type of a file (using `X-Content-Type-Options`), reducing the risk of malicious file uploads being executed.
*   **Disabled Info Leakage:** Removes the `X-Powered-By` header so attackers cannot easily tell you are running Express.js.

### How to use it?

**1. Install Helmet via npm:**
```bash
npm install helmet
```

**2. Add it to your Express application:**
You typically require it and use it globally across your application before defining your routes.

```javascript
const express = require('express');
const helmet = require('helmet');

const app = express();

// Use Helmet middleware to set default security headers
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, secure world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
