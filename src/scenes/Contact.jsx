import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";
import LineGradient from "../components/LineGradient";

const Contact = () => {


  return (
    <section id="contact" className="contact py-48">

<motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          
          </p>
          <p>
            I am currently looking for new opportunities. My inbox is always open. There is the way you can chose to contact me.
          </p>
          <div className="flex md:justify-center my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      <div className= "flex justify-center">
      <SocialMediaIcons />
      </div>
     
    </section>
  );
};

export default Contact;
