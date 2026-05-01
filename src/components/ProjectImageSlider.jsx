import { useEffect, useMemo, useState } from 'react'

export default function ProjectImageSlider({ images = [], title }) {
  const sliderImages = useMemo(() => [...new Set(images.filter(Boolean))], [images])
  const [currentIndex, setCurrentIndex] = useState(0)
  const hasMultipleImages = sliderImages.length > 1
  const [touchStartX, setTouchStartX] = useState(null)

  useEffect(() => {
    setCurrentIndex(0)
  }, [sliderImages])

  if (!sliderImages.length) return null

  const goToPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? sliderImages.length - 1 : index - 1))
  }

  const goToNext = () => {
    setCurrentIndex((index) => (index === sliderImages.length - 1 ? 0 : index + 1))
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0]?.clientX ?? null)
  }

  const handleTouchEnd = (event) => {
    if (!hasMultipleImages || touchStartX === null) return
    const touchEndX = event.changedTouches[0]?.clientX
    if (typeof touchEndX !== 'number') return

    const deltaX = touchStartX - touchEndX
    const minSwipeDistance = 42

    if (Math.abs(deltaX) < minSwipeDistance) return
    if (deltaX > 0) goToNext()
    else goToPrevious()
    setTouchStartX(null)
  }

  return (
    <section className="project-slider" aria-label={`Galería del proyecto ${title}`}>
      <div
        className="project-slider-frame"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className="project-slider-img"
          src={sliderImages[currentIndex]}
          alt={`Imagen ${currentIndex + 1} del proyecto ${title}`}
          loading="eager"
        />

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              className="project-slider-arrow project-slider-arrow--prev"
              onClick={goToPrevious}
              aria-label={`Imagen anterior del proyecto ${title}`}
            >
              ‹
            </button>
            <button
              type="button"
              className="project-slider-arrow project-slider-arrow--next"
              onClick={goToNext}
              aria-label={`Imagen siguiente del proyecto ${title}`}
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {hasMultipleImages ? (
        <>
          <div className="project-slider-footer">
            <span className="project-slider-counter" aria-live="polite">
              {currentIndex + 1} / {sliderImages.length}
            </span>
          </div>

          <div className="project-slider-thumbnails" role="tablist" aria-label={`Miniaturas de ${title}`}>
            {sliderImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`project-slider-thumbnail ${index === currentIndex ? 'is-active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ver imagen ${index + 1} del proyecto ${title}`}
              >
                <img src={image} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </section>
  )
}
