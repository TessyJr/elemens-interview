import Link from "next/link";
import Button from "../../Button";
import TrendingCard from "./TrendingCard";

export default function TrendingSection() {
  return (
    <section className="flex flex-col px-[8%] py-16 gap-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-dark-gray font-medium text-4xl">
          Browser Our Trending
        </h2>
        <h3 className="text-moss-500 font-medium text-4xl">Receipt</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
        <TrendingCard
          backgroundColor="bg-turquoise-100"
          image="/images/home/trending/pizza-paperoni.png"
          name="Pizza Paperoni"
          category="Pizza"
          rating={4}
        />
        <TrendingCard
          backgroundColor="bg-turquoise-100"
          image="/images/home/trending/pizza-meat.png"
          name="Pizza Meat"
          category="Pizza"
          rating={3}
        />
        <TrendingCard
          backgroundColor="bg-azure-100"
          image="/images/home/trending/doner-kebab.png"
          name="Doner Kebab"
          category="Kebab"
          rating={5}
        />
        <TrendingCard
          backgroundColor="bg-maroon-100"
          image="/images/home/trending/salmon-roll.png"
          name="Salmon Roll"
          category="Salmon"
          rating={4}
        />
        <TrendingCard
          backgroundColor="bg-moss-100"
          image="/images/home/trending/cupcake-choco.png"
          name="Cupcake Choco"
          category="Cupcake"
          rating={4}
        />
        <TrendingCard
          backgroundColor="bg-olive-100"
          image="/images/home/trending/doughnut-milk.png"
          name="Doughnut Milk"
          category="Doughnut"
          rating={5}
        />
        <TrendingCard
          backgroundColor="bg-olive-100"
          image="/images/home/trending/doughnut-unicorn.png"
          name="Doughnut Unicorn"
          category="Doughnut"
          rating={4}
        />
        <TrendingCard
          backgroundColor="bg-azure-100"
          image="/images/home/trending/kathi-kebab.png"
          name="Kathi Kebab"
          category="Kebab"
          rating={4}
        />
      </div>

      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <Button variant="primary" size="md">
            ALL Receipt
          </Button>
        </Link>
      </div>
    </section>
  );
}
