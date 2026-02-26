import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FAQSection from "@/components/FAQSection";

describe("FAQSection", () => {
  it("should render section with title and subtitle", () => {
    render(<FAQSection />);

    expect(screen.getByText("Questions Fréquentes")).toBeInTheDocument();
    expect(
      screen.getByText("Tout savoir sur nos services de débarras")
    ).toBeInTheDocument();
  });

  it("should render all 8 FAQ items", () => {
    render(<FAQSection />);

    expect(screen.getByText("Combien coûte un débarras dans le Var ?")).toBeInTheDocument();
    expect(screen.getByText("Intervenez-vous le week-end ?")).toBeInTheDocument();
    expect(screen.getByText("Que deviendront mes objets après le débarras ?")).toBeInTheDocument();
    expect(screen.getByText("Faites-vous le nettoyage après le débarras ?")).toBeInTheDocument();
    expect(screen.getByText("Êtes-vous assuré pour les interventions ?")).toBeInTheDocument();
    expect(screen.getByText("Quel est le délai d'intervention ?")).toBeInTheDocument();
    expect(screen.getByText("Débarrassez-vous les déchets dangereux (amiante, peinture, etc.) ?")).toBeInTheDocument();
    expect(screen.getByText("Comment obtenir un devis gratuit ?")).toBeInTheDocument();
  });

  it("should render accordion with correct structure", () => {
    const { container } = render(<FAQSection />);

    // Check for accordion root (data-orientation is set by Radix UI)
    const accordion = container.querySelector('[data-orientation="vertical"]');
    expect(accordion).toBeInTheDocument();
  });

  it("should render accordion items with correct structure", () => {
    const { container } = render(<FAQSection />);

    // Check for accordion items using data-state attribute
    const accordionItems = container.querySelectorAll('[data-state][data-orientation]');
    expect(accordionItems.length).toBeGreaterThanOrEqual(8);
  });

  it("should render answers that are initially hidden", () => {
    const { container } = render(<FAQSection />);

    // Answers should be in the DOM but hidden
    const answerElements = container.querySelectorAll('[role="region"]');
    expect(answerElements.length).toBe(8);

    // All should be hidden initially
    answerElements.forEach(answer => {
      expect(answer).toHaveAttribute('data-state', 'closed');
      expect(answer).toHaveAttribute('hidden');
    });
  });

  it("should expand FAQ item when trigger is clicked", () => {
    const { container } = render(<FAQSection />);

    // Find the first FAQ trigger
    const firstTrigger = screen.getByText("Combien coûte un débarras dans le Var ?");
    expect(firstTrigger).toBeInTheDocument();

    // Click the trigger to expand
    fireEvent.click(firstTrigger);

    // After clicking, the button should have data-state="open"
    expect(firstTrigger).toHaveAttribute('data-state', 'open');

    // The corresponding content region should be visible
    const firstRegion = container.querySelector('[role="region"]');
    expect(firstRegion).toHaveAttribute('data-state', 'open');
    expect(firstRegion).not.toHaveAttribute('hidden');
  });

  it("should collapse FAQ item when trigger is clicked again", () => {
    const { container } = render(<FAQSection />);

    // Find and click the first FAQ trigger to expand
    const firstTrigger = screen.getByText("Combien coûte un débarras dans le Var ?");
    fireEvent.click(firstTrigger);

    // Verify it's open
    expect(firstTrigger).toHaveAttribute('data-state', 'open');

    // Click again to collapse
    fireEvent.click(firstTrigger);

    // Verify it's closed
    expect(firstTrigger).toHaveAttribute('data-state', 'closed');

    const firstRegion = container.querySelector('[role="region"]');
    expect(firstRegion).toHaveAttribute('data-state', 'closed');
    expect(firstRegion).toHaveAttribute('hidden');
  });

  it("should only allow one FAQ item to be open at a time", () => {
    const { container } = render(<FAQSection />);

    // Click first FAQ
    fireEvent.click(screen.getByText("Combien coûte un débarras dans le Var ?"));

    // Click second FAQ
    fireEvent.click(screen.getByText("Intervenez-vous le week-end ?"));

    // Get all triggers
    const triggers = container.querySelectorAll('button[data-radix-collection-item]');
    const firstTrigger = triggers[0];
    const secondTrigger = triggers[1];

    // First should be closed, second should be open
    expect(firstTrigger).toHaveAttribute('data-state', 'closed');
    expect(secondTrigger).toHaveAttribute('data-state', 'open');
  });

  it("should render chevron icons for each FAQ item", () => {
    const { container } = render(<FAQSection />);

    // Check for ChevronDown icons (lucide-react icons are typically svg elements)
    const chevrons = container.querySelectorAll('svg');
    // We should have at least 8 chevrons, one for each FAQ item
    expect(chevrons.length).toBeGreaterThanOrEqual(8);
  });

  it("should render FAQPage schema for SEO", () => {
    const { container } = render(<FAQSection />);

    // Check for JSON-LD schema script
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    const faqSchema = Array.from(scripts).find(script =>
      script.textContent?.includes('FAQPage')
    );

    expect(faqSchema).toBeInTheDocument();

    // Verify the schema contains expected FAQ structure
    const schemaContent = faqSchema?.textContent || '';
    expect(schemaContent).toContain('@type');
    expect(schemaContent).toContain('FAQPage');
  });

  it("should have responsive layout classes", () => {
    const { container } = render(<FAQSection />);

    const section = container.querySelector('section#faq');
    expect(section).toHaveClass('py-20');
    expect(section).toHaveClass('lg:py-28');
  });

  it("should apply correct styling to accordion items", () => {
    const { container } = render(<FAQSection />);

    // Find the first accordion item wrapper div (has both data-state and data-orientation)
    const accordionItems = container.querySelectorAll('div[data-state][data-orientation]');
    const firstItem = accordionItems[0];

    expect(firstItem).toHaveClass('bg-card');
    expect(firstItem).toHaveClass('border');
    expect(firstItem).toHaveClass('border-border');
    expect(firstItem).toHaveClass('rounded-xl');
  });
});
