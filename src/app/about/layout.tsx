import React from 'react';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-hero-pattern h-64 bg-cover bg-center">
        <div className="text-white text-4xl text-center pt-20">
          <h1 className="text-3xl font-bold mb-4">About us</h1>
        </div>
      </div>
      <div className="relative mt-10">
        {children}
      </div>
    </>
  );
};

export default AboutLayout;
