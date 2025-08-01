/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.json" {
  const value: any;
  export default value;
}
