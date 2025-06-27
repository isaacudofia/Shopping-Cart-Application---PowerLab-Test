import "../App.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Isaac Bicycle Workshop</h1>
        <div className="about-content">
          <p>
            Welcome to Isaac Bicycle Workshop, your premier destination for
            high-quality bicycles and exceptional service. Since our
            establishment, we have been dedicated to providing cyclists of all
            levels with the perfect ride.
          </p>
          <p>
            Our workshop combines traditional craftsmanship with modern
            technology to offer you the finest selection of bicycles, from
            mountain bikes to city cruisers, electric bikes to professional
            racing machines.
          </p>
          <p>
            At Isaac, we believe that every cyclist deserves a bike that fits
            their lifestyle and adventures. Our expert team is here to help you
            find the perfect bicycle and keep it running smoothly for years to
            come.
          </p>
          <h2>Our Services</h2>
          <ul className="service-list">
            <li>Custom bike fitting and consultation</li>
            <li>Professional bicycle repairs and maintenance</li>
            <li>Wide selection of premium bicycles</li>
            <li>Expert advice from experienced cyclists</li>
            <li>Warranty and after-sales support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
