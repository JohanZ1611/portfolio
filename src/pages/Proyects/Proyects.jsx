import "./proyects.css";
import image from "../../assets/images/image10.png";
import image2 from "../../assets/images/image11.png";
import image3 from "../../assets/images/image12.png";
import image4 from "../../assets/images/image13.png";

export default function Proyects() {
  return (
    <div className=" h-screen bg-second-color flex flex-col gap-10 pt-20 justify-center items-center">
      <h2 className=" text-6xl font-bold text-center">
        Mis <span className=" text-btn2-color">Proyectos</span>
      </h2>
      <div className=" w-3/5 h-4/5 flex flex-col gap-4 ">
        <div className="w-full h-1/2 flex gap-4 ">
          <div className="w-1/2 h-full overflow-hidden rounded-lg relative bord">
            <div className="absolute inset-0 bg-color-base opacity-0 hover:opacity-90 transition-opacity">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-bold mb-2">Lance</h2>
                <div>
                  <a href="https://github.com/" className="mr-4">
                    GitHub
                  </a>
                  <a href="https://www.youtube.com/" className="mr-4">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            <img
              src={image}
              alt="image1"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-1/2 h-full overflow-hidden rounded-lg relative bord">
            <div className="absolute inset-0 bg-color-base opacity-0 hover:opacity-90 transition-opacity">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-bold mb-2">Minga</h2>
                <div>
                  <a href="https://github.com/" className="mr-4">
                    GitHub
                  </a>
                  <a href="https://www.youtube.com/" className="mr-4">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            <img
              src={image2}
              alt="image2"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-1/2 flex gap-4">
          <div className="w-1/2 h-full overflow-hidden rounded-lg relative bord">
            <div className="absolute inset-0 bg-color-base opacity-0 hover:opacity-90 transition-opacity">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-bold mb-2">PetShop</h2>
                <div>
                  <a href="https://github.com/" className="mr-4">
                    GitHub
                  </a>
                  <a href="https://www.youtube.com/" className="mr-4">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            <img
              src={image3}
              alt="image3"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full overflow-hidden rounded-lg relative bord">
            <div className="absolute inset-0 bg-color-base opacity-0 hover:opacity-90 transition-opacity">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-bold mb-2">Amazing Event</h2>
                <div>
                  <a href="https://github.com/" className="mr-4">
                    GitHub
                  </a>
                  <a href="https://www.youtube.com/" className="mr-4">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            <img
              src={image4}
              alt="image4"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
