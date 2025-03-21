"use client";

import { useRef, useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

export default function CategorySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (containerRef.current) {
      setCanScrollLeft(containerRef.current.scrollLeft > 0);
      setCanScrollRight(
        containerRef.current.scrollLeft <
          containerRef.current.scrollWidth - containerRef.current.clientWidth
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 240;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    updateScrollButtons(); // Check scroll position on mount
  }, []);

  return (
    <section className="flex flex-col px-[8%] py-16 gap-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-dark-gray font-medium text-4xl">
          Browser Our Category
        </h2>
        <h3 className="text-moss-500 font-medium text-4xl">Receipt</h3>
      </div>

      <div className="flex flex-col gap-8">
        <div
          ref={containerRef}
          className="flex gap-4 overflow-y-hidden overflow-x-auto h-48"
          onScroll={updateScrollButtons}
        >
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-moss-100"
              icon="/images/icons/cupcake.png"
              name="Cupcake"
              amount={22}
            />
          </Link>
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-turquoise-100"
              icon="/images/icons/pizza.png"
              name="Pizza"
              amount={22}
            />
          </Link>
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-azure-100"
              icon="/images/icons/kebab.png"
              name="Kebab"
              amount={12}
            />
          </Link>
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-maroon-100"
              icon="/images/icons/salmon.png"
              name="Salmon"
              amount={22}
            />
          </Link>
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-olive-100"
              icon="/images/icons/doughnut.png"
              name="Doughnut"
              amount={11}
            />
          </Link>
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-moss-100"
              icon="/images/icons/cupcake.png"
              name="Cupcake"
              amount={22}
            />
          </Link>
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-turquoise-100"
              icon="/images/icons/pizza.png"
              name="Pizza"
              amount={22}
            />
          </Link>
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-azure-100"
              icon="/images/icons/kebab.png"
              name="Kebab"
              amount={12}
            />
          </Link>
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-maroon-100"
              icon="/images/icons/salmon.png"
              name="Salmon"
              amount={22}
            />
          </Link>
          <Link href={"/"}>
            <CategoryCard
              backgroundColor="bg-olive-100"
              icon="/images/icons/doughnut.png"
              name="Doughnut"
              amount={11}
            />
            /
          </Link>
        </div>

        <div className="self-end flex justify-center items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className={`bg-moss-500 hover:bg-moss-500/80 transition rounded-full p-2 flex gap-2 items-center ${
              !canScrollLeft
                ? "opacity-50 pointer-events-none"
                : "cursor-pointer"
            }`}
            disabled={!canScrollLeft}
          >
            <span className="text-moss-500 bg-white rounded-full p-1 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6 -translate-x-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="text-white font-medium mr-2">PREV</span>
          </button>

          <button
            onClick={() => scroll("right")}
            className={`bg-moss-500 hover:bg-moss-500/80 transition rounded-full p-2 flex gap-2 items-center ${
              !canScrollRight
                ? "opacity-50 pointer-events-none"
                : "cursor-pointer"
            }`}
            disabled={!canScrollRight}
          >
            <span className="text-white font-medium ml-2">NEXT</span>
            <span className="text-moss-500 bg-white rounded-full p-1 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6 translate-x-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
