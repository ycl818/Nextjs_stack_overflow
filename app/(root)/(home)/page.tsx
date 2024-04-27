import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";

import Filter from "@/components/shared/Filter";
import Link from "next/link";
import React from "react";
import { HomePageFilters } from "@/constants/filter";
import HomeFilter from "@/components/home/HomeFilter";

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button
            className="primary-gradient
          min-h-[46px] px-4 py-3 !text-light-900
          "
          >
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          ontherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilter />
    </>
  );
};

export default Home;
