import CarouselComponent from "./Corousel";
import AssetHome from "../../../Shared/allAssets/AssetHome";
import NavbarComponent from "../../../Shared/Navbar/NavbarComponent";

const Hero = () => {
  return (
    <>
      <NavbarComponent/>
      <CarouselComponent />
      <AssetHome />
    </>
  );
};

export default Hero;
