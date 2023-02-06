const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/oktay-esen-a392b41bb/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://twitter.com/oktayesenn"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src="../assets/twitter.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/oktayesenn/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Github-link" src="" />
        </a>

      </div>
    );
  };
  
  export default SocialMediaIcons;