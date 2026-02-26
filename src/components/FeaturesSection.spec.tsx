import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturesSection from '@/components/FeaturesSection';

describe('FeaturesSection', () => {
  it('renders the section with proper id and classes', () => {
    const { container } = render(<FeaturesSection />);
    const section = container.querySelector('section#features');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('py-12', 'lg:py-16');
  });

  it('renders the section title and subtitle', () => {
    render(<FeaturesSection />);
    expect(screen.getByText('Nos Atouts')).toBeInTheDocument();
    expect(screen.getByText('Pourquoi choisir DebarrasPower ?')).toBeInTheDocument();
  });

  it('renders exactly 3 feature cards', () => {
    const { container } = render(<FeaturesSection />);
    const cards = container.querySelectorAll('.feature-card');
    expect(cards).toHaveLength(3);
  });

  it('renders the first feature about Var coverage', () => {
    const { container } = render(<FeaturesSection />);
    const cards = container.querySelectorAll('.feature-card');
    const firstCard = cards[0];

    expect(firstCard).toHaveTextContent('Intervention dans tout le Var (83)');
    expect(firstCard).toHaveTextContent('Toulon, Hyères, Fréjus, Draguignan, et 23+ autres villes.');
    expect(firstCard).toHaveTextContent('Déplacement rapide dans tout le département.');

    const icon = firstCard.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('renders the second feature about complete clearance', () => {
    const { container } = render(<FeaturesSection />);
    const cards = container.querySelectorAll('.feature-card');
    const secondCard = cards[1];

    expect(secondCard).toHaveTextContent('Débarras complet : maisons, appartements, caves');
    expect(secondCard).toHaveTextContent('Nous débarrassons tout types de biens : habitations, caves, greniers, garages, bureaux, locaux professionnels.');

    const icon = secondCard.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('renders the third feature about recycling', () => {
    const { container } = render(<FeaturesSection />);
    const cards = container.querySelectorAll('.feature-card');
    const thirdCard = cards[2];

    expect(thirdCard).toHaveTextContent('Recyclage & revalorisation jusqu\'à 80%');
    expect(thirdCard).toHaveTextContent('Tri sélectif, don aux associations, recyclage en filières agréées.');
    expect(thirdCard).toHaveTextContent('Réduction maximale des déchets ultimes.');

    const icon = thirdCard.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('uses responsive grid layout', () => {
    const { container } = render(<FeaturesSection />);
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-3');
  });

  it('icons are in circles with proper styling', () => {
    const { container } = render(<FeaturesSection />);
    const iconContainers = container.querySelectorAll('.icon-circle');
    expect(iconContainers).toHaveLength(3);
    iconContainers.forEach(container => {
      expect(container).toHaveClass('w-16', 'h-16', 'rounded-full', 'bg-accent/10', 'mx-auto', 'mb-4');
    });
  });

  it('text is center-aligned', () => {
    const { container } = render(<FeaturesSection />);
    const cards = container.querySelectorAll('.feature-card');
    cards.forEach(card => {
      expect(card).toHaveClass('text-center');
    });
  });
});
