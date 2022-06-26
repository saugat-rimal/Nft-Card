import image from "./images/image-equilibrium.jpg";
import eth from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import author from "./images/image-avatar.png";
import view from "./images/icon-view.svg";

export default function Nft() {
  return (
    <div className="container mx-auto flex items-center justify-center ">
      <section className="flex max-w-xs bg-[#15273F] p-5 rounded-xl mx-3">
        <div>
          <div className="relative group flex justify-center overflow-hidden cursor-pointer rounded-lg">
            <img
              src={image}
              alt="nft"
              className=" rounded-lg object-cover ease-in-out duration-500  group-hover:rotate-6 group-hover:scale-125 "
            />
            <div className="absolute bg-[#00FFF7] w-full h-full rounded-lg flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-50 "></div>

            <div className="absolute flex w-full h-full rounded-lg justify-center items-center">
              <img
                src={view}
                alt=""
                className="text-white group-hover:text-white hidden group-hover:block duration-700"
              />
            </div>
          </div>
          <h1 className="text-xl font-semibold py-4 cursor-pointer hover:text-[#00FFF7] ">
            Equilibrium #3429
          </h1>
          <p className=" font-extralight text-slate-400 pb-4">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className=" flex justify-between text-sm text-[#00FFF7] pb-4">
            <span className="flex gap-2">
              <img src={eth} alt="" /> 0.041 ETH
            </span>

            <span className="flex justify-center items-center gap-2">
              <img src={clock} alt="" /> 3 days left
            </span>
          </div>
          <div className="border-t border-slate-200/20 py-4	flex items-center gap-3">
            <span>
              <img
                src={author}
                alt="author"
                className="w-8 border rounded-full "
              />
            </span>

            <span>
              <p className="text-slate-400">
                Creation of{"   "}
                <span className="text-white hover:text-[#00FFF7] cursor-pointer">
                  Saugat Rimal
                </span>
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
