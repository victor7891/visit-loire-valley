import { useState } from 'react'
import Modal from './Modal'

export default function Gallery({ images, alt = 'Gallery image' }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (index) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-gray-200"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          image={images[currentImageIndex]}
          alt={`${alt} ${currentImageIndex + 1}`}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={images.length > 1 ? goToNext : null}
          onPrevious={images.length > 1 ? goToPrevious : null}
          currentIndex={currentImageIndex}
          totalImages={images.length}
        />
      )}
    </>
  )
}
