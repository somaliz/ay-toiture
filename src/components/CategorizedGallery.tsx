import { useState, useRef, useEffect } from "react";
import { Photo, photos, photoCategories } from "@/data/photos";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  GalleryTabs,
  GalleryTabsList,
  GalleryTabsTrigger,
  GalleryTabsContent,
} from "@/components/ui/gallery-tabs";
import {
  GalleryLightbox,
  GalleryLightboxContent,
  GalleryLightboxImage,
  NavigationButton,
} from "@/components/ui/gallery-lightbox";

type GalleryCategory = "all" | "charpente" | "couverture" | "reparation";

const categoryMapping: Record<GalleryCategory, string[]> = {
  all: ["charpente", "couverture", "reparation"],
  charpente: ["charpente"],
  couverture: ["couverture"],
  reparation: ["reparation"],
};

const CategorizedGallery = () => {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const filteredPhotos = photos.filter((photo) =>
    categoryMapping[activeTab].includes(photo.category)
  );

  // Check scroll position
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      Math.ceil(container.scrollLeft + container.clientWidth) < container.scrollWidth - 1
    );
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [activeTab]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const targetScroll = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const goToPrev = () => {
    setCurrentPhotoIndex(
      (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  const currentPhoto = filteredPhotos[currentPhotoIndex];

  const getCategoryCount = (category: GalleryCategory): number => {
    if (category === "all") return photos.length;
    return photos.filter((photo) =>
      categoryMapping[category].includes(photo.category)
    ).length;
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gradient-to-b from-accent/5 to-background overflow-hidden">
      <div className="container px-4 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
          <span className="inline-block text-accent font-display font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Galerie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Nos réalisations
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
            Découvrez nos réalisations de charpente et couverture dans le Var
          </p>
        </div>

        {/* Tabs */}
        <GalleryTabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as GalleryCategory)}
          className="w-full"
        >
          <div className="flex justify-center mb-6 lg:mb-8 overflow-x-auto">
            <GalleryTabsList className="inline-flex">
              <GalleryTabsTrigger value="all">
                Tous <span className="ml-2 text-xs opacity-70">({getCategoryCount("all")})</span>
              </GalleryTabsTrigger>
              <GalleryTabsTrigger value="charpente">
                Charpente <span className="ml-2 text-xs opacity-70">({getCategoryCount("charpente")})</span>
              </GalleryTabsTrigger>
              <GalleryTabsTrigger value="couverture">
                Couverture <span className="ml-2 text-xs opacity-70">({getCategoryCount("couverture")})</span>
              </GalleryTabsTrigger>
              <GalleryTabsTrigger value="reparation">
                Réparations <span className="ml-2 text-xs opacity-70">({getCategoryCount("reparation")})</span>
              </GalleryTabsTrigger>
            </GalleryTabsList>
          </div>

          <GalleryTabsContent value={activeTab}>
            {/* Gallery Container */}
            <div className="relative group/gallery">
              {/* Scroll Button Left */}
              {canScrollLeft && (
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Défiler vers la gauche"
                >
                  <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              )}

              {/* Horizontal Scroll Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-3 lg:gap-4 overflow-x-auto overflow-y-hidden pb-6 pt-2 px-1"
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                  scrollBehavior: 'smooth',
                }}
              >
                {filteredPhotos.map((photo, index) => (
                  <div
                    key={`${photo.src}-${index}`}
                    className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px]"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div
                      className="relative group/photo cursor-pointer rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-2xl transition-all duration-500 aspect-[3/4]"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.description}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                          <p className="text-white text-sm lg:text-base font-medium leading-snug line-clamp-2">
                            {photo.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Scroll Button Right */}
                {canScrollRight && (
                  <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Défiler vers la droite"
                  >
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                )}
              </div>

              {/* Scroll Indicator */}
              {filteredPhotos.length > 2 && (
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground lg:hidden">
                  <span>Glisser pour voir plus →</span>
                </div>
              )}
            </div>

            {filteredPhotos.length === 0 && (
              <div className="text-center py-16 lg:py-20">
                <p className="text-muted-foreground text-base">
                  Aucune photo dans cette catégorie pour le moment.
                </p>
              </div>
            )}
          </GalleryTabsContent>
        </GalleryTabs>

        {/* Lightbox */}
        <GalleryLightbox open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <GalleryLightboxContent
            data-testid="gallery-lightbox"
            onPointerDownOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            {currentPhoto && (
              <>
                <NavigationButton
                  data-testid="lightbox-prev"
                  direction="prev"
                  onClick={goToPrev}
                  disabled={filteredPhotos.length <= 1}
                />
                <GalleryLightboxImage
                  src={currentPhoto.src}
                  alt={currentPhoto.description}
                  title={currentPhoto.title}
                />
                <NavigationButton
                  data-testid="lightbox-next"
                  direction="next"
                  onClick={goToNext}
                  disabled={filteredPhotos.length <= 1}
                />
              </>
            )}
          </GalleryLightboxContent>
        </GalleryLightbox>
      </div>

      <style>{`
        .group\\/photo .scale-105 {
          transform: scale(1.05);
        }

        @media (prefers-reduced-motion: no-preference) {
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          [style*="scroll-snap-type: mandatory"] > div {
            animation: slideIn 0.5s ease-out backwards;
          }
        }
      `}</style>
    </section>
  );
};

export default CategorizedGallery;
