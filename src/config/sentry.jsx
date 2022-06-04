import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const initSentry = () => {
  if (
    import.meta.env.NODE_ENV === "production" &&
    import.meta.env.VITE_APP_SENTRY_DSN
  ) {
    Sentry.init({
      dsn: import.meta.env.REACT_APP_SENTRY_DSN,
      autoSessionTracking: false,
      environment: import.meta.env.NODE_ENV,
      release: `${import.meta.env.REACT_APP_NAME}@${
        import.meta.env.npm_package_version
      }`,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 0.1,
    });
  }
};

export default initSentry;
