import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const topQuestions = [
    {
      _id: "1",
      title: "How to create a new project in React?",
      views: 100,
      answers: 10,
    },
    {
      _id: "2",
      title: "How to create a new project in Nexjs with a command?",
      views: 10,
      answers: 10,
    },
    {
      _id: "3",
      title: "How to create a new project in React?",
      views: 40,
      answers: 10,
    },
    {
      _id: "4",
      title: "How to create a new project in React?",
      views: 400,
      answers: 10,
    },
    {
      _id: "5",
      title: "How to create a new project in React?",
      views: 100,
      answers: 10,
    },
  ];

  const popularTags = [
    { _id: "1", name: "React", totalquestions: 1000 },
    { _id: "2", name: "Nextjs", totalquestions: 1000 },
    { _id: "3", name: "Javascript", totalquestions: 1000 },
    { _id: "4", name: "Typescript", totalquestions: 1000 },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalquestions={tag.totalquestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
