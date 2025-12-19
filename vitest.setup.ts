import "@testing-library/jest-dom/vitest";

// Polyfill matchMedia for libraries (like next-themes) that expect it in the browser
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query: string): MediaQueryList => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {
        // Deprecated, no-op for backward compatibility
      },
      removeListener: () => {
        // Deprecated, no-op for backward compatibility
      },
      addEventListener: () => {
        // No-op for tests
      },
      removeEventListener: () => {
        // No-op for tests
      },
      dispatchEvent: () => false,
    };
  };
}
