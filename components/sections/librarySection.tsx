"use client";

import { Article, Library, Subject } from "@/types/types";
import { useState } from "react";

export function LibrarySection({ data }: any) {
  const librarySection: Library = data.librarySection;
  const tableRef: Article[] = librarySection.tableRef;

  const [articles, setArticles] = useState(tableRef);

  const filterSubjects = (subject: Subject) => {
    const newSubject = tableRef.filter((a: Article) =>
      a.subject.includes(subject)
    );
    setArticles(newSubject);
  };

  return (
    <>
      <section className="mb-16 md:mb-20">
        <h2 className="text-xl font-bold mb-1">{librarySection.h2}</h2>
        <p className="mb-6 dark:text-gray-300">{librarySection.description}</p>
        <p className="">Filter</p>
        <hr></hr>
        <div className="flex flex-wrap py-2 gap-2 mb-2">
          <button className="py-1 px-4 bg-purple-200 rounded-lg hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-800" onClick={() => setArticles(tableRef)}>
            All
          </button>
          {Object.values(Subject).map((item: Subject, index: number) => {
            return (
              <button
                className="py-1 px-4 bg-purple-200 rounded-lg hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-800"
                onClick={() => filterSubjects(item)}
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>

        <ul className="h-[400px] overflow-y-scroll scrollbar dark:scrollbarDark">
          {articles.map((item: Article) => {
            return (
              <li key={item.id} className="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-2"
                >
                  <p className="font-medium">
                    {item.title}
                  </p>
                  <p
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    {item.author}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
