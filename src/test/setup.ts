import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

class ImmediateObserver {
  private callback: IntersectionObserverCallback;
  observe(target: Element) {
    this.callback(
      [{ isIntersecting: true, target }] as IntersectionObserverEntry[],
      this as unknown as IntersectionObserver,
    );
  }
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
}

vi.stubGlobal("IntersectionObserver", ImmediateObserver);
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi
    .fn()
    .mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
});
window.scrollTo = vi.fn();
HTMLElement.prototype.scrollIntoView = vi.fn();

beforeEach(() => {
  localStorage.clear();
  vi.stubGlobal(
    "fetch",
    vi
      .fn()
      .mockResolvedValue({
        ok: true,
        headers: new Headers({ "content-type": "text/html" }),
      }),
  );
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
