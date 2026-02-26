import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProcessSection from "./ProcessSection";

describe("ProcessSection", () => {
  it("should render the section with correct heading", () => {
    render(<ProcessSection />);
    expect(screen.getByText("Comment ça marche ?")).toBeInTheDocument();
  });

  it("should render all 4 process steps", () => {
    render(<ProcessSection />);

    // Check for all 4 number badges
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("04")).toBeInTheDocument();

    // Check for all 4 emojis
    expect(screen.getByText("📞")).toBeInTheDocument();
    expect(screen.getByText("📍")).toBeInTheDocument();
    expect(screen.getByText("👷")).toBeInTheDocument();
    expect(screen.getByText("♻️")).toBeInTheDocument();
  });

  it("should render step titles", () => {
    render(<ProcessSection />);

    expect(screen.getByText("Contactez-nous")).toBeInTheDocument();
    expect(screen.getByText("Estimation gratuite")).toBeInTheDocument();
    expect(screen.getByText("Intervention rapide")).toBeInTheDocument();
    expect(screen.getByText("Recyclage responsable")).toBeInTheDocument();
  });

  it("should render step descriptions", () => {
    render(<ProcessSection />);

    expect(screen.getByText(/Appelez-nous ou remplissez le formulaire/)).toBeInTheDocument();
    expect(screen.getByText(/Nous évaluons le volume sur place ou via photos/)).toBeInTheDocument();
    expect(screen.getByText(/Notre équipe débarrasse et nettoyer/)).toBeInTheDocument();
    expect(screen.getByText(/Tri, don et recyclage/)).toBeInTheDocument();
  });

  it("should have section-alt class for alternating background", () => {
    const { container } = render(<ProcessSection />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("section-alt");
  });
});
