import { Parallax } from "react-parallax";

const Container2 = () => (
  <Parallax
    blur={{ min: -25, max: 15 }}
    className="IMAGE-2"
    bgImage="https://www.southernliving.com/thmb/y2_3ac5J0UDJ1LHOK9K4GCDaVSw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Delbar_PhotosbyAndrewThomasLee-853567ef56de496c9be59ec16facc5c6.jpg"
    strength={100}
  >
    <div className="content">
      <span className="img-text">
        THE MENU  <button id="butoniMenu">More</button>
      </span>
    </div>
  </Parallax>
);
export default Container2;
