import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App'
import './index.css'

const createElement = document.querySelector('#root');
const root = createRoot(createElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
