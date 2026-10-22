import { Component, type ReactNode } from "react";
import { RotateCcw } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { translations } from "../../i18n/translations";

export function ErrorFallback() {
  const { language } = useI18n();
  const copy = translations[language];
  return (
    <main id="main-content" className="not-found container" role="alert">
      <h1>{copy.errorTitle}</h1>
      <p>{copy.errorText}</p>
      <button
        className="button button-primary"
        onClick={() => window.location.reload()}
      >
        <RotateCcw size={17} />
        {copy.retry}
      </button>
    </main>
  );
}

export class RouteErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <ErrorFallback /> : this.props.children;
  }
}
