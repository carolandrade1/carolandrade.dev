"use client";

import { SetStateAction, useState } from "react";
import { GalleryIcon, TableIcon } from "@/lib/icons";
import { Projects } from "@/types/types";
import TabItem from "@/components/miscellaneous/tabItem";

export const ProjectSection = ({ data }: any) => {
  const projectSection: Projects = data.projectSection;

  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleClick = (id: SetStateAction<number>) => setSelectedIndex(id);

  const tabsConfig = [
    {
      id: 1,
      label: "Gallery view",
      icon: GalleryIcon(),
    },
    {
      id: 2,
      label: "Table view",
      icon: TableIcon(),
    },
  ];

  return (
    <section className="mb-28">
      <h2 className="text-2xl font-bold mb-1">{projectSection.h2}</h2>
      <p className="mb-5 dark:text-gray-300">{projectSection.description}</p>

      <nav
        role="tablist"
        aria-labelledby="tablist-1"
        className="flex mb-4 gap-1"
      >
        {tabsConfig.map((tab) => (
          <button
            key={`tab-${tab.id}`}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={selectedIndex === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => handleClick(tab.id)}
            className="flex w-30 px-[0.8rem] py-2 items-center rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 aria-selected:border-b-2 aria-selected:rounded-t-lg aria-selected:rounded-b-none aria-selected:border-gray-500 tracking-wide"
          >
            <span className="pr-1">{tab.icon}</span>
            <span className="m-auto">{tab.label}</span>
          </button>
        ))}
      </nav>
      {tabsConfig.map((tab) => (
        <div
          key={`tabpanel-${tab.id}`}
          id={`tabpanel-${tab.id}`}
          hidden={selectedIndex !== tab.id}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          className="overflow-x-auto relative scrollbar dark:scrollbarDark"
        >
          {TabItem(selectedIndex, projectSection)}
        </div>
      ))}
    </section>
  );
};
