import Image from "next/image";
import Ratings from "../../Ratings";

interface TrendingCardProps {
  backgroundColor: string;
  image: string;
  name: string;
  category: string;
  rating: number;
}

export default function TrendingCard({
  backgroundColor,
  image,
  name,
  category,
  rating,
}: TrendingCardProps) {
  return (
    <div className={`${backgroundColor} flex flex-col gap-4 p-8 rounded-xl`}>
      <div className="w-32 h-32 rounded-md overflow-hidden relative">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <h5 className="font-medium text-2xl truncate">{name}</h5>
        <p className="font-medium text-lg text-moss-500 truncate">{category}</p>
      </div>

      <Ratings rating={rating} />
    </div>
  );
}
