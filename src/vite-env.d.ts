/// <reference types="vite/client" />

declare module "vite/client" {
  interface ImportMetaEnv {
    GENERATE_SOURCE_MAP: boolean;
  }
}
