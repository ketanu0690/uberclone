import React from 'react';

const fetchData = () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve([
        "We reimagine the way the world moves for the better.",
        "A letter from our CEO",
        "Your safety drives us",
        "Company info",
        "Keep up with the latest",
        "Come reimagine with us"
      ]);
    }, 3000);
  });
};

const AboutPage = async () => {
  const pageHeaders = await fetchData();

  return (
    <div className="container mx-auto px-4 py-8">
      {pageHeaders.map((text, index) => {
        switch (text) {
          case 'We reimagine the way the world moves for the better.':
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-2xl font-bold text-black">{text}</h1>
                <p className="text-gray-700 mt-2">
                  At our company, we believe in revolutionizing the transportation industry to improve global mobility.
                </p>
              </div>
            );
          case 'A letter from our CEO':
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-black">{text}</h2>
                <p className="text-gray-700 mt-2">
                  Our CEO shares the vision for the future, focusing on sustainability and innovation.
                </p>
              </div>
            );
          case 'Your safety drives us':
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-black">{text}</h2>
                <p className="text-gray-700 mt-2">
                  We are committed to ensuring the highest safety standards for all our customers and partners.
                </p>
              </div>
            );
          case 'Company info':
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-medium text-black">{text}</h3>
                <p className="text-gray-700 mt-2">
                  Learn more about our company history, values, and the team that drives our success.
                </p>
              </div>
            );
          case 'Keep up with the latest':
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-medium text-black">{text}</h3>
                <p className="text-gray-700 mt-2">
                  Stay updated with the latest news and innovations coming from our company.
                </p>
              </div>
            );
          case 'Come reimagine with us':
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-medium text-black">{text}</h3>
                <p className="text-gray-700 mt-2">
                  Join us in shaping the future of mobility by bringing your skills and creativity to our team.
                </p>
              </div>
            );
          default:
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700">{text}</p>
              </div>
            );
        }
      })}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mt-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-black">About Us</h1>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-black">We reimagine the way the world moves for the better</h2>
          <p className="text-gray-700 mt-2">
            Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what
            gets us out of bed each morning. It pushes us to constantly reimagine how we can move
            better. For you. For all the places you want to go. For all the things you want to get.
            For all the ways you want to earn.
          </p>
          <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read our full mission statement</a>
        </div>
        <div>
          <h3 className="text-lg font-medium text-black">A letter from our CEO</h3>
          <p className="text-gray-700 mt-2">
            Read about our {`team's`}  commitment to provide everyone on our global platform with the
            technology that can help them move ahead.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">Read {`Dora's`} letter</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
