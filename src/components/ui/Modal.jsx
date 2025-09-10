import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Modal({ 
  image, 
  alt, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious, 
  currentIndex, 
  totalImages 
}) {
  
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowRight':
          if (onNext) onNext()
          break
        case 'ArrowLeft':
          if (onPrevious) onPrevious()
          break
        default:
          break
      }
    }

    const handleClickOutside = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleClickOutside)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onNext, onPrevious])

  if (!isOpen) return null

  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-7xl max-h-[90vh] mx-4 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Arrows */}
        {onPrevious && totalImages > 1 && (
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {onNext && totalImages > 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image */}
        <img
          src={image}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Image Counter */}
        {totalImages > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full text-sm font-medium">
            {currentIndex + 1} / {totalImages}
          </div>
        )}
      </div>
    </div>
  )
}
