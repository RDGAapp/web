/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite-plugin-pwa/react" />
/// <reference types="vite-plugin-pwa/info" />
/// <reference lib="webworker" />

interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_FILE_URL: string;
  readonly VITE_APP_TELEGRAM_BOT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
