"use client";

import { Article, Subject } from "@/types/articles";
import { useState } from "react";

export default function LibrarySection({ data }: any) {
  const tableRef: Article[] = data.librarySection.tableRef;

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
        <h2 className="text-xl font-bold mb-1">{data.librarySection.h2}</h2>
        <p className="mb-5 dark:text-gray-300">{data.librarySection.description}</p>

        {Object.values(Subject).map((item: Subject, index: number) => {
          return (
            <button
              className="p-4"
              onClick={() => filterSubjects(item)}
              key={index}
            >
              {item}
            </button>
          );
        })}

        <button onClick={() => setArticles(tableRef)}>All</button>

        <table className="min-w-[600px] table-fixed md:table-auto w-full border-collapse border-y border-spacing-2 border-gray-300 dark:border-gray-600 text-sm md:text-base mb-4">
          <thead className="border-b border-gray-300 dark:border-gray-600 text-left">
            <tr>
              <th className="leading-8">
                <span aria-hidden="true" className="pr-2">📰</span>
                <span>Article/Video</span>
              </th>
              <th>
                <span aria-hidden="true" className="pr-2">🖋</span>
                <span>Author</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((item: Article) => {
              return (
                <tr
                  key={item.id}
                  className="border-b border-gray-300  dark:border-gray-600 "
                >
                  <td className="py-2 font-medium w-4/5">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </td>
                  <td className="py-2">{item.author}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
