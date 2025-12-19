import { AppProviders } from "./providers/app-providers";
import { AppRouter } from "./router/app-router";

export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};
