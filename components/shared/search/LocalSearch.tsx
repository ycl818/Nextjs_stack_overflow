"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

type LocalSearchProps = {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  ontherClasses: string;
};

const LocalSearch = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  ontherClasses,
}: LocalSearchProps) => {
  return (
    <div
      className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${ontherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
