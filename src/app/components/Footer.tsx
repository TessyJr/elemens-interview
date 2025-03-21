"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [newsletterErrorMessage, setNewsletterErrorMessage] = useState("");
  const [newsletterSuccessMessage, setNewsletterSuccessMessage] = useState("");

  function handleSubmitNewsletterForm(formData: FormData) {
    setNewsletterErrorMessage("");
    setNewsletterSuccessMessage("");

    const email = formData.get("email") as string;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterErrorMessage("Please enter a valid email address.");
      return;
    }

    // Clear error and handle form submission
    setNewsletterErrorMessage("");
    setNewsletterSuccessMessage("Thank you for subscribing!");
  }

  return (
    <footer className="px-[8%] py-16">
      <div className="bg-moss-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-16 rounded-2xl gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Link
              href={"/"}
              className="lg:w-[207px] lg:h-[50px] relative flex-none w-[150px] h-[36]"
            >
              <Image
                src={"/images/logos/elemens/elemens-logo.png"}
                alt="Elemens Group logo"
                fill
                className="object-fill w-full h-full"
              />
            </Link>

            <p className="text-sm text-light-gray">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <Link
              href={"/"}
              className="bg-white text-moss-500 hover:bg-moss-500 hover:text-white transition-all rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </Link>

            <Link
              href={"/"}
              className="bg-white text-moss-500 hover:bg-moss-500 hover:text-white transition-all rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </Link>

            <Link
              href={"/"}
              className="bg-white text-moss-500 hover:bg-moss-500 hover:text-white transition-all rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="size-6"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h5 className="font-medium text-lg">Categories</h5>

          <ul className="flex flex-col gap-4 text-sm text-light-gray transition">
            <li>
              <Link href={"/"} className="hover:text-moss-500 transition">
                Cupcake
              </Link>
            </li>

            <li>
              <Link href={"/"} className="hover:text-moss-500 transition">
                Pizza
              </Link>
            </li>

            <li>
              <Link href={"/"} className="hover:text-moss-500 transition">
                Kebab
              </Link>
            </li>

            <li>
              <Link href={"/"} className="hover:text-moss-500 transition">
                Salmon
              </Link>
            </li>

            <li>
              <Link href={"/"} className="hover:text-moss-500 transition">
                Doughnut
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <h5 className="font-medium text-lg">About Us</h5>

          <ul className="flex flex-col gap-4 text-sm text-light-gray transition">
            <li>
              <Link href={"/"} className="hover:text-moss-500 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href={"/"} className="hover:text-moss-500 transition">
                FAQ
              </Link>
            </li>

            <li>
              <Link href={"/"} className="hover:text-moss-500 transition">
                Report Problem
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <h5 className="font-medium text-lg">Newletter</h5>

          <div className="flex flex-col gap-4 text-sm text-light-gray transition">
            <p>
              Get now free 50% discount for alll products on your first order
            </p>

            <form
              action={handleSubmitNewsletterForm}
              className="flex flex-col gap-2"
              noValidate
            >
              <div className="flex border border-black rounded-lg overflow-hidden">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="p-3 outline-none text-sm placeholder:text-black w-full text-black"
                  required
                />

                <button
                  type="submit"
                  className="bg-moss-500 transition hover:bg-moss-500/80 p-3 text-white font-medium text-sm flex-none cursor-pointer"
                >
                  SEND
                </button>
              </div>

              {newsletterErrorMessage && (
                <p className="text-sm text-red-400">{newsletterErrorMessage}</p>
              )}

              {newsletterSuccessMessage && (
                <p className="text-sm text-moss-500">
                  {newsletterSuccessMessage}
                </p>
              )}
            </form>

            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 text-moss-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <p>elemesid@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 text-moss-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <p> 0888 1111 2222 </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
