export {};

declare global {
  interface Window {
    versions: any; // 👈️ turn off type checking
  }
}
