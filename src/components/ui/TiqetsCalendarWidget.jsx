import { useEffect, useRef } from 'react'

export default function TiqetsCalendarWidget({ productId, campaign, castleName }) {
  const widgetRef = useRef(null)
  const scriptRef = useRef(null)

  useEffect(() => {
    // Clean up any existing script
    if (scriptRef.current) {
      scriptRef.current.remove()
    }

    // Create and inject the script
    const script = document.createElement('script')
    script.src = 'https://widgets.tiqets.com/loader.js'
    script.defer = true
    script.onload = () => {
      // Widget will auto-initialize based on data attributes
    }
    
    document.head.appendChild(script)
    scriptRef.current = script

    return () => {
      // Cleanup on unmount
      if (scriptRef.current) {
        scriptRef.current.remove()
      }
    }
  }, [productId])

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Book Your Visit</h3>
      
      {/* Tiqets Widget Container */}
      <div 
        ref={widgetRef}
        data-tiqets-widget="availability" 
        data-layout="full" 
        data-orientation="vertical" 
        data-product-id={productId}
        data-language="en" 
        data-currency="EUR" 
        data-partner="visitloirecastels"
        data-tq-campaign={campaign}
        className="min-h-[300px]"
      />
      
      {/* Fallback content while widget loads */}
      <div className="text-center text-gray-500 text-sm mt-4">
        <p>Secure booking powered by Tiqets</p>
        <div className="flex justify-center items-center mt-2 space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs">Skip-the-line guaranteed</span>
        </div>
      </div>
    </div>
  )
}