import { Link } from 'react-router-dom';

export default function HeroBanner({ 
    title, 
    subheadline,
    buttonText = "Discover", 
    buttonLink = "/castles",
    backgroundImage = "https://res.cloudinary.com/funbooker/images/w_1440,h_720,c_scale/f_auto,q_auto/v1685345930/blog_wordpress/shutterstock_1407078329-1/shutterstock_1407078329-1.jpg?_i=AA"
  }) {
    return (
        <section 
      className="relative min-h-[460px] h-100 md:h-96 lg:h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('${backgroundImage}')`
      }}
    >
      <div className="text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          {title}
        </h1>
        <h5 className="text-2xl md:text-2xl lg:text-2xl mb-8 leading-tight">
          {subheadline}
        </h5>
        <Link 
          to={buttonLink} 
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg  text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          {buttonText}
        </Link>
      </div>
    </section>
    )
}