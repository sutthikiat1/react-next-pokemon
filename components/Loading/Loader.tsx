import { motion } from "framer-motion";
import styled from "styled-components";

export const Loader = () => {
  return (
    <ContainerLoader>
      <>
        <span>Loading...</span>
        <motion.div
          animate={{
            rotate: 360,
            //   borderRadius: ["50% 50%", "2% 50%"],
            x: 75,
          }}
          initial={{
            x: -75,
          }}
          transition={{
            flip: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          style={{
            width: "50px",
            height: "50px",
            background: "#fff",
            borderRadius: "50% 50%",
            backgroundImage: `url('/image/logo/pokeball.png')`,
            backgroundSize: "cover",
            marginTop: "20px",
          }}
        ></motion.div>
      </>
    </ContainerLoader>
  );
};

const ContainerLoader = styled(motion.div)`
  width: 100%;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #000;
`;
