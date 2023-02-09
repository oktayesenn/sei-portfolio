import linkedin from "../assets/linkedin.png";
import twitter2 from "../assets/twitter2.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";




const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/oktay-esen-a392b41bb/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src= {linkedin}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://twitter.com/oktayesenn"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src={twitter2} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/oktayesenn/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Github-link" src={github} />
        </a>
        <a 
          className="hover:opacity-50 transition duration-500"
          href="https://www.gmail.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Gmail-link" src={gmail} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;