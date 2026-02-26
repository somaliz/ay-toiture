import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

import { cn } from "@/lib/utils";

const GalleryLightbox = DialogPrimitive.Root;

const GalleryLightboxTrigger = DialogPrimitive.Trigger;

const GalleryLightboxPortal = DialogPrimitive.Portal;

const GalleryLightboxClose = DialogPrimitive.Close;

const GalleryLightboxOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
GalleryLightboxOverlay.displayName = DialogPrimitive.Overlay.displayName;

const GalleryLightboxContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <GalleryLightboxPortal>
    <GalleryLightboxOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-6xl translate-x-[-50%] translate-y-[-50%] p-4 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className,
      )}
      {...props}
    >
      <VisuallyHiddenPrimitive.Root>
        <DialogPrimitive.Title>Visualisation de photo</DialogPrimitive.Title>
        <DialogPrimitive.Description>
          Agrandissement d'une photo de la galerie
        </DialogPrimitive.Description>
      </VisuallyHiddenPrimitive.Root>
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 z-0 rounded-md bg-black/50 p-2 text-white opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-6 w-6" />
        <span className="sr-only">Fermer</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </GalleryLightboxPortal>
));
GalleryLightboxContent.displayName = DialogPrimitive.Content.displayName;

interface NavigationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'prev' | 'next';
}

const NavigationButton = React.forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ className, direction, ...props }, ref) => {
    const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;

    return (
      <button
        ref={ref}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-3 text-white opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          direction === 'prev' ? 'left-4' : 'right-4',
          className,
        )}
        {...props}
      >
        <Icon className="h-6 w-6" />
        <span className="sr-only">{direction === 'prev' ? 'Précédent' : 'Suivant'}</span>
      </button>
    );
  }
);
NavigationButton.displayName = "NavigationButton";

const GalleryLightboxImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement> & {
    title?: string;
    description?: string;
  }
>(({ className, title, description, alt, ...props }, ref) => (
  <div className="flex flex-col items-center justify-center gap-4">
    <img
      ref={ref}
      className={cn(
        "max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl",
        className,
      )}
      alt={alt}
      {...props}
    />
    {(title || description) && (
      <div className="text-center text-white">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="text-sm text-gray-300">{description}</p>}
      </div>
    )}
  </div>
));
GalleryLightboxImage.displayName = "GalleryLightboxImage";

export {
  GalleryLightbox,
  GalleryLightboxPortal,
  GalleryLightboxOverlay,
  GalleryLightboxClose,
  GalleryLightboxTrigger,
  GalleryLightboxContent,
  GalleryLightboxImage,
  NavigationButton,
};
