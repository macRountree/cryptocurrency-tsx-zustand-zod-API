import {FaGithub, FaLinkedin, FaLaptopCode, FaWhatsapp} from 'react-icons/fa6';

export const SocialMedia = () => {
  return (
    <div className="social-container">
      <h2 className="social-title">
        Social <span>Media</span>
      </h2>
      <div className="social-icons">
        <a
          href="https://portfoliomacrountree.netlify.app/"
          target="_blank"
          className="social-icon"
        >
          <FaLaptopCode className="icon" />
        </a>
        <a
          href="https://github.com/macRountree/Kcal_counter"
          target="_blank"
          className="social-icon"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/macrountree/"
          target="_blank"
          className="social-icon"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://wa.me/526622277834"
          target="_blank"
          className="social-icon"
        >
          <FaWhatsapp className="icon" />
        </a>
      </div>
    </div>
  );
};
