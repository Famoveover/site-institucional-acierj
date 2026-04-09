import "../styles/globals.css";
import { AccessibilityProvider } from "../lib/AccessibilityContext";
import AccessibilityPanel from "../components/AccessibilityPanel";

export default function App({ Component, pageProps }) {
  return (
    <AccessibilityProvider>
      <Component {...pageProps} />
      <AccessibilityPanel />
    </AccessibilityProvider>
  );
}
