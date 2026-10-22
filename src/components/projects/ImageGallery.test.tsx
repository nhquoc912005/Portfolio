import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { I18nProvider } from "../../i18n/I18nContext";
import type { ProjectImage } from "../../types";
import { ImageGallery } from "./ImageGallery";

const images: readonly ProjectImage[] = [
  {
    src: "/test-only-desktop.png",
    alt: { vi: "Màn hình kiểm tra", en: "Test desktop image" },
    kind: "desktop",
  },
  {
    src: "/test-only-mobile.png",
    alt: { vi: "Ảnh di động kiểm tra", en: "Test mobile image" },
    kind: "mobile",
  },
];

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (
    this: HTMLDialogElement,
  ) {
    this.setAttribute("open", "");
  });
  HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
    this.removeAttribute("open");
  });
});

function renderGallery(items: readonly ProjectImage[]) {
  return render(
    <I18nProvider>
      <ImageGallery images={items} />
    </I18nProvider>,
  );
}

describe("optional project gallery", () => {
  it("renders nothing when real images have not been supplied", () => {
    const { container } = renderGallery([]);
    expect(container).toBeEmptyDOMElement();
  });

  it("opens images accessibly and supports next, previous, keyboard and close controls", async () => {
    const user = userEvent.setup();
    renderGallery(images);
    await user.click(
      screen.getByRole("button", {
        name: "Phóng to hình ảnh: Màn hình kiểm tra",
      }),
    );
    const viewer = screen.getByRole("dialog", { name: "Hình ảnh dự án" });
    expect(within(viewer).getByRole("img")).toHaveAttribute(
      "src",
      images[0].src,
    );
    await user.click(
      within(viewer).getByRole("button", { name: "Ảnh tiếp theo" }),
    );
    expect(within(viewer).getByRole("img")).toHaveAttribute(
      "src",
      images[1].src,
    );
    await user.click(within(viewer).getByRole("button", { name: "Ảnh trước" }));
    expect(within(viewer).getByRole("img")).toHaveAttribute(
      "src",
      images[0].src,
    );
    fireEvent.keyDown(viewer, { key: "ArrowLeft" });
    expect(within(viewer).getByRole("img")).toHaveAttribute(
      "src",
      images[1].src,
    );
    fireEvent.keyDown(viewer, { key: "ArrowRight" });
    expect(within(viewer).getByRole("img")).toHaveAttribute(
      "src",
      images[0].src,
    );
    await user.click(within(viewer).getByRole("img"));
    expect(viewer).toHaveAttribute("open");
    await user.click(
      within(viewer).getByRole("button", { name: "Đóng bộ xem ảnh" }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("supports native cancellation and backdrop dismissal without unnecessary single-image controls", async () => {
    const user = userEvent.setup();
    renderGallery(images.slice(0, 1));
    const open = screen.getByRole("button", {
      name: "Phóng to hình ảnh: Màn hình kiểm tra",
    });
    await user.click(open);
    let viewer = screen.getByRole("dialog");
    expect(
      within(viewer).queryByRole("button", { name: "Ảnh tiếp theo" }),
    ).not.toBeInTheDocument();
    fireEvent(viewer, new Event("cancel", { bubbles: false }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(open);
    viewer = screen.getByRole("dialog");
    fireEvent.click(viewer);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(open);
    fireEvent(
      screen.getByRole("dialog"),
      new Event("close", { bubbles: false }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
