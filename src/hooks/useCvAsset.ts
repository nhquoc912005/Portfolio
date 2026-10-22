import { useEffect, useState } from "react";
import { profile } from "../data/profile";

let cachedAvailability: boolean | undefined;

export function useCvAsset() {
  const [state, setState] = useState({
    available: cachedAvailability === true,
    loading: cachedAvailability === undefined,
  });
  useEffect(() => {
    if (cachedAvailability !== undefined) return;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 6000);
    fetch(profile.cvPath, { method: "HEAD", signal: controller.signal })
      .then(
        (response) =>
          response.ok &&
          (response.headers.get("content-type") ?? "")
            .toLowerCase()
            .includes("application/pdf"),
      )
      .then((available) => {
        if (!controller.signal.aborted) {
          cachedAvailability = available;
          setState({ available, loading: false });
        }
      })
      .catch(() => {
        setState({ available: false, loading: false });
      })
      .finally(() => window.clearTimeout(timeout));
    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);
  return state;
}
