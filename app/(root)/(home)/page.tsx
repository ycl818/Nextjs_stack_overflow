import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";

import Filter from "@/components/shared/Filter";
import Link from "next/link";
import React from "react";
import { HomePageFilters } from "@/constants/filter";
import HomeFilter from "@/components/home/HomeFilter";
import { title } from "process";
import { create } from "domain";
import { auth } from "@clerk/nextjs/server";
import NoResult from "@/components/shared/NoResult";

const Home = () => {
  const questions = [
    // {
    //   _id: 1,
    //   title: "How to create a new project in React?",
    //   tags: [
    //     { _id: 1, name: "react" },
    //     { _id: 2, name: "javascript" },
    //   ],
    //   author: "John Doe",
    //   upvotes: 10,
    //   views: 20,
    //   answers: 2,
    //   createdAt: "2021-09-01T12:00:00.000Z",
    // },
    // {
    //   _id: 2,
    //   title: "How to create a new project in Angular?",
    //   tags: [
    //     { _id: 3, name: "angular" },
    //     { _id: 2, name: "javascript" },
    //   ],
    //   author: "Jane Doe",
    //   upvotes: 5,
    //   views: 10,
    //   answers: 1,
    //   createdAt: "2021-09-02T12:00:00.000Z",
    // },
  ];

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

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => "QuestionCard")
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
