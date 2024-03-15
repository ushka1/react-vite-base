/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MY_ENV: string;
  readonly VITE_BACKEND_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
