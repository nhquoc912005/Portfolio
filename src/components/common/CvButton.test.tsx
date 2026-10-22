import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { I18nProvider } from "../../i18n/I18nContext";
import { useCvAsset } from "../../hooks/useCvAsset";
import { CvButton } from "./CvButton";

vi.mock("../../hooks/useCvAsset", () => ({ useCvAsset: vi.fn() }));

describe("CV download control", () => {
  it("offers a named PDF download only when a real PDF has been found", () => {
    vi.mocked(useCvAsset).mockReturnValue({ available: true, loading: false });
    render(
      <I18nProvider>
        <CvButton className="custom-download" />
      </I18nProvider>,
    );
    const download = screen.getByRole("link");
    expect(download).toHaveAttribute("href", "/assets/documents/cv.pdf");
    expect(download).toHaveAttribute("download", "NguyenHuuQuoc_CV.pdf");
    expect(download).toHaveClass("custom-download");
  });

  it("hides the control when a CV has not been provided", () => {
    vi.mocked(useCvAsset).mockReturnValue({ available: false, loading: false });
    render(
      <I18nProvider>
        <CvButton />
      </I18nProvider>,
    );
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByText("CV đang cập nhật")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
