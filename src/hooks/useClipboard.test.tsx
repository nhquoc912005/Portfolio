import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useClipboard } from "./useClipboard";

afterEach(() => vi.useRealTimers());

describe("contact clipboard feedback", () => {
  it("reports a successful copy and clears the temporary feedback", async () => {
    vi.useFakeTimers();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const { result } = renderHook(useClipboard);
    expect(result.current.status).toBe("idle");
    await act(() => result.current.copy("contact@example.com"));
    expect(writeText).toHaveBeenCalledWith("contact@example.com");
    expect(result.current.status).toBe("success");
    act(() => vi.advanceTimersByTime(4000));
    expect(result.current.status).toBe("idle");
  });

  it("reports clipboard permission failures and supports retry", async () => {
    const writeText = vi
      .fn()
      .mockRejectedValueOnce(new Error("permission denied"))
      .mockResolvedValueOnce(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    const { result, unmount } = renderHook(useClipboard);
    await act(() => result.current.copy("contact@example.com"));
    expect(result.current.status).toBe("error");
    await act(() => result.current.copy("contact@example.com"));
    expect(result.current.status).toBe("success");
    unmount();
  });

  it("handles browsers without a clipboard API", async () => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: undefined,
    });
    const { result } = renderHook(useClipboard);
    await act(() => result.current.copy("contact@example.com"));
    expect(result.current.status).toBe("error");
  });
});
