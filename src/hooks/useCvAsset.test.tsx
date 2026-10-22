import { act, renderHook, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

beforeEach(() => vi.resetModules());
afterEach(() => vi.useRealTimers());

describe("real CV availability", () => {
  it("accepts an actual PDF response and reuses the resolved availability", async () => {
    const fetchAsset = vi
      .fn()
      .mockResolvedValue({
        ok: true,
        headers: new Headers({ "content-type": "application/pdf" }),
      });
    vi.stubGlobal("fetch", fetchAsset);
    const { useCvAsset } = await import("./useCvAsset");
    const first = renderHook(useCvAsset);
    expect(first.result.current.loading).toBe(true);
    await waitFor(() =>
      expect(first.result.current).toEqual({ available: true, loading: false }),
    );
    expect(fetchAsset).toHaveBeenCalledWith(
      "/assets/documents/cv.pdf",
      expect.objectContaining({ method: "HEAD" }),
    );
    first.unmount();
    const second = renderHook(useCvAsset);
    expect(second.result.current).toEqual({ available: true, loading: false });
    expect(fetchAsset).toHaveBeenCalledTimes(1);
  });

  it.each([
    ["SPA HTML fallback", true, "text/html"],
    ["missing file", false, "application/pdf"],
    ["missing content type", true, null],
  ])(
    "rejects %s rather than exposing a broken download",
    async (_description, ok, contentType) => {
      vi.stubGlobal(
        "fetch",
        vi
          .fn()
          .mockResolvedValue({
            ok,
            headers: new Headers(
              contentType ? { "content-type": contentType } : {},
            ),
          }),
      );
      const { useCvAsset } = await import("./useCvAsset");
      const { result } = renderHook(useCvAsset);
      await waitFor(() =>
        expect(result.current).toEqual({ available: false, loading: false }),
      );
    },
  );

  it("recovers from a network error with no downloadable link", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const { useCvAsset } = await import("./useCvAsset");
    const { result } = renderHook(useCvAsset);
    await waitFor(() =>
      expect(result.current).toEqual({ available: false, loading: false }),
    );
  });

  it("aborts the asset request when the component unmounts", async () => {
    let requestSignal: AbortSignal | undefined;
    let finish:
      | ((value: { ok: boolean; headers: Headers }) => void)
      | undefined;
    vi.stubGlobal(
      "fetch",
      vi.fn().mockImplementation((_url, options: RequestInit) => {
        requestSignal = options.signal as AbortSignal;
        return new Promise((resolve) => {
          finish = resolve;
        });
      }),
    );
    const { useCvAsset } = await import("./useCvAsset");
    const { unmount } = renderHook(useCvAsset);
    unmount();
    expect(requestSignal?.aborted).toBe(true);
    await act(async () => {
      finish?.({
        ok: true,
        headers: new Headers({ "content-type": "application/pdf" }),
      });
    });
  });
});
