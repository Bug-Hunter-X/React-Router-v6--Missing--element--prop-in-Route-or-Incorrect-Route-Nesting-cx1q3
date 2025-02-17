```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
```
This code snippet uses the `Routes` component to define multiple routes in a React application.  However, a common error is to forget to include the `element` prop within each `Route` component.  If a route's `element` prop is missing or incorrectly defined, the application will either render nothing or throw an error.

Another subtle issue involves nesting routes incorrectly, causing unexpected routing behavior.  Improper nesting can lead to routes not being matched correctly, and components rendering in an unexpected order.