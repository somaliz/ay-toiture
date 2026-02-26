import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price?: string;
  description: string;
  features?: string[];
  recommended?: boolean;
  className?: string;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ title, price, description, features, recommended = false, className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "pricing-card relative transition-all duration-300 hover:shadow-lg",
          recommended && "border-accent border-2 shadow-md bg-accent/5",
          className
        )}
        {...props}
      >
        {recommended && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
            Recommandé
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl">{title}</CardTitle>
          {price && (
            <div className="mt-4">
              <span className="text-2xl lg:text-3xl font-semibold text-accent">{price}</span>
            </div>
          )}
          <CardDescription className="mt-3 text-sm lg:text-base">{description}</CardDescription>
        </CardHeader>
        {features && features.length > 0 && (
          <CardContent>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    );
  }
);

PricingCard.displayName = "PricingCard";

export { PricingCard };
