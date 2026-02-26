import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = () => {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-20 lg:py-28 section-alt">
      <div className="container">
        {/* Google Rating Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-foreground">
                  4.5
                </span>
                <span className="text-muted-foreground">/5</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Basé sur {testimonials.length} avis Google
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-display font-bold text-sm uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground mt-3 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez les avis de nos clients satisfaits dans le Var
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-4 line-clamp-4">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.city}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {testimonial.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://search.google.com/local/writereview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <Star className="w-5 h-5 fill-current" />
            Laissez un avis sur Google
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            Partagez votre expérience avec AY Toiture
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
