import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby leggings tofu mukbang, pitchfork jean shorts twee
            cold-pressed chartreuse wayfarers dreamcatcher taxidermy cardigan
            kinfolk. Next level kombucha trust fund squid vibecession. Cronut
            mukbang vexillologist blue bottle everyday carry, asymmetrical green
            juice.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
