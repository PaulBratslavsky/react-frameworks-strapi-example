import type { LinksFunction as RemixLinksFunction } from "@remix-run/react";

export namespace Route {
  export type LinksFunction = RemixLinksFunction;
  
  export interface ErrorBoundaryProps {
    error: Error | unknown;
  }
} 