import React from 'react';
// ... rest of imports

const Home = () => {
  // ... rest of component code

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 via-secondary-50/80 to-accent-50/90"></div>
        {/* Rest of hero content */}
      </section>

      {/* Quote of the Day */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
        {/* Rest of quote content */}
      </div>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        {/* Rest of CTA content */}
      </section>
    </div>
  );
};

export default Home;