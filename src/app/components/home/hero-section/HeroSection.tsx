import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
import Ratings from "../Ratings";

export default function HeroSection() {
  return (
    <section className="flex px-[8%] pt-32 pb-16 items-center gap-32 relative">
      <div className="absolute w-full h-full top-0 left-0 -z-10 opacity-5">
        <Image
          src={"/images/home/background.png"}
          alt="Doodles of food"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center-center gap-8">
        <h1 className="text-5xl lg:text-6xl font-medium text-moss-500 leading-16">
          Good Food Us Good Mood
        </h1>

        <div className="w-64 h-64 relative justify-center items-center flex-none lg:hidden flex mt-8 mb-16">
          <span className="absolute w-full h-full inset-0 m-auto bg-lighter-gray/50 rounded-full"></span>

          <div className="absolute -bottom-8 -right-32 flex bg-white/80 p-5 z-10 rounded-2xl backdrop-blur-xs items-center gap-4 w-80 shadow-xl">
            <div className="w-16 h-16 relative flex-none">
              <Image
                src={"/images/home/salad.png"}
                alt="A plate of salad"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-1">
                <h5 className="text-sm font-semibold truncate">
                  Green Tomato Salad
                </h5>
                <p className="text-xs text-light-gray truncate">Tomato</p>
              </div>

              <Ratings rating={3} />
            </div>
          </div>

          <div className="w-96 h-96 relative">
            <Image
              src={"/images/home/salad.png"}
              alt="A plate of salad"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-light-gray text-lg">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>

        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Button variant="primary" size="md">
              Daftar Sekarang
            </Button>
          </Link>

          <Link href={"/"}>
            <Button variant="secondary" size="md">
              About Us
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-[500px] h-[500px] relative justify-center items-center flex-none lg:flex hidden">
        <span className="absolute w-full h-full inset-0 m-auto bg-lighter-gray/50 rounded-full"></span>

        <div className="absolute bottom-8 -left-16 flex bg-white/80 p-5 z-10 rounded-2xl backdrop-blur-xs items-center gap-4 w-80 shadow-xl">
          <div className="w-16 h-16 relative flex-none">
            <Image
              src={"/images/home/salad.png"}
              alt="A plate of salad"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-1">
              <h5 className="text-sm font-semibold truncate">
                Green Tomato Salad
              </h5>
              <p className="text-xs text-light-gray truncate">Tomato</p>
            </div>

            <Ratings rating={3} />
          </div>
        </div>

        <div className="w-96 h-96 relative">
          <Image
            src={"/images/home/salad.png"}
            alt="A plate of salad"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
