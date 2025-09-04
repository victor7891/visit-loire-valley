import { Helmet } from 'react-helmet-async'

export default function SEOHead({ 
  title = "Visit Loire Valley Castles", 
  description = "Discover the magnificent châteaux of the Loire Valley. Book skip-the-line tickets for Chambord, Chenonceau, Amboise and more historic French castles.",
  image = "https://res.cloudinary.com/funbooker/images/w_1200,h_630,c_fill/f_auto,q_auto/v1685345930/blog_wordpress/shutterstock_1407078329-1/loire-valley-castles.jpg",
  url = "https://visitloirecastles.com"
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}