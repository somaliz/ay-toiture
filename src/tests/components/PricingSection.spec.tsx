import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PricingSection from "@/components/PricingSection";

describe("PricingSection", () => {
  it("should render section title and subtitle", () => {
    render(<PricingSection />);

    expect(screen.getByText("Une tarification transparente")).toBeInTheDocument();
    expect(
      screen.getByText(/Selon la valeur de vos biens, votre débarras peut être gratuit, valorisé/)
    ).toBeInTheDocument();
  });

  it("should render three pricing tiers", () => {
    render(<PricingSection />);

    expect(screen.getByText("Débarras Déchets Gratuit")).toBeInTheDocument();
    expect(screen.getByText("Débarras Déchets Payé")).toBeInTheDocument();
    expect(screen.getByText("Débarras Déchets Classique")).toBeInTheDocument();
  });

  it("should render legal disclaimer", () => {
    render(<PricingSection />);

    expect(
      screen.getByText(/Les tarifs sont établis sur devis après visite/)
    ).toBeInTheDocument();
  });

  it("should render CTA button with correct link", () => {
    render(<PricingSection />);

    const ctaButton = screen.getByRole("link", { name: /Demander un devis gratuit/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.closest("a")).toHaveAttribute("href", "#devis");
  });

  it("should render pricing features with checkmarks", () => {
    render(<PricingSection />);

    // Check for key features in pricing tiers
    expect(screen.getByText(/Tri et évacuation inclus/i)).toBeInTheDocument();
    expect(screen.getByText(/Estimation gratuite des biens/i)).toBeInTheDocument();
    expect(screen.getByText(/Intervention rapide/i)).toBeInTheDocument();
  });

  it("should highlight recommended tier", () => {
    render(<PricingSection />);

    // The middle tier should be highlighted/recommended
    const middleCard = screen.getByText("Débarras Déchets Payé").closest(".pricing-card");
    expect(middleCard).toHaveClass("border-accent");
  });
});
