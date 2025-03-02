import Image from "next/image";
import bird from "./bird.png";
import uni from "./uni.png";
import sample from '../images/sample.jpg';

const Logo = () => {
  return (
    <>
      <Image
        src={bird}
        alt="batch5"
        width={100}
        height={100}
      />
      <span>5<sup>th</sup> Computer Science Batch, University of Kelaniya</span>
    </>
  );
};

export default Logo;
