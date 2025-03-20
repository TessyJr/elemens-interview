import Image from "next/image";

interface CategoryCardProps {
  backgroundColor: string;
  icon: string;
  name: string;
  amount: number;
}

export default function CategoryCard({
  backgroundColor,
  icon,
  name,
  amount,
}: CategoryCardProps) {
  return (
    <div
      className={`${backgroundColor} rounded-lg w-56 h-44 flex items-center flex-none flex-col gap-6 hover:h-48 pt-8 relative group`}
    >
      <div className="hidden absolute w-full h-full inset-0 m-auto opacity-5 group-hover:block">
        <Image
          src={"/images/home/background.png"}
          alt="Doodle of foods"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-12 h-12 relative">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <h5 className="text-center font-medium">{name}</h5>
        <p className="text-center text-sm">{amount} Items</p>
      </div>
    </div>
  );
}
