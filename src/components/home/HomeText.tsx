import HomeTextWrapper from "../layout/home-text/HomeTextWrapper";
import Image from "next/image";

export default function HomeText() {
  return (
    <HomeTextWrapper>
      <picture style={{ position: "absolute", width: "100%", height: "100%", zIndex: "-1" }}>
        <source media="(max-width: 1023px)" srcSet={"/assets/background-images/background-portrait.webp"} />
        <Image src={"/assets/background-images/background-landscape.webp"} width={100} height={75} alt="BACKGROUND IMAGE" loading="eager" style={{ width: "100%", height: "100%" }} />
      </picture>
    </HomeTextWrapper>
  );
};
