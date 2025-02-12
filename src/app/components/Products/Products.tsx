"use client";
import Image from "next/image";
import * as React from "react";

interface Product {
  name: string;
  imageSrc: string;
  description: string;
  href: string;
}

const products: Product[] = [
  {
    name: "Prepmate App",
    imageSrc: "/assets/products/prepmate.webp",
    description:
      "Prepmate organizes the tools and resources needed to get better grades in an easy to use app.",
    href: "https://www.myprepmate.com/",
  },
];

const NamesList = () => {
  const nameElements = products.map((product, index) => (
    <div key={index}>
      <div className=" text-lg sm:text-sm py-5 lg:py-0">
        <div className="w-full max-w-[1024px] mx-auto">
          <div className="aspect-w-1054 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <Image
              width={1024}
              height={500}
              src={product.imageSrc}
              alt={product.imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
          <div className="col-span-5">
            <div className="flex justify-between">
              {/* <a href={product.href} target="_blank"> */}
                <div className="mt-6 block text-3xl font-bold text-gray-900">
                  {product.name}
                </div>
              {/* </a> */}
            </div>
            <p
              aria-hidden="true"
              className="mt-2 mb-5 text-xl font-normal text-gray-700"
            >
              {product.description}
            </p>
          </div>
          <div className="col-span-4 sm:col-span-2  flex items-center mt-2">
            <a
              href={product.href}
              target="_blank"
              className="bg-purple w-full hover:bg-purple text-white font-bold py-4 px-3 rounded text-center block"
            >
              Check out
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div
        id="products-section"
        className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div className="sm:flex justify-between items-center pb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
            Product
          </h2>
        </div>

        <div>
          <div className="mx-auto max-w-7xl">
            {nameElements.length > 0 ? nameElements : <p>No data to show</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamesList;
