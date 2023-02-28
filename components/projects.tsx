'use client'

// https://amanexplains.com/how-to-create-an-accessible-tabs-component-in-react/

import { SetStateAction, useState } from "react";
import { Button3d } from "./button3D";
import { GalleryIcon, GithubIcon, TableIcon } from "./icons";


const tabsConfig = [
    {
        label: "Gallery view",
        icon: GalleryIcon()
    },
    {
        label: "Table view",
        icon: TableIcon()
    }
];

export const ProjectSection = ({data}: any) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleClick = (index: SetStateAction<number>) => setSelectedIndex(index);
  
    return (
      <section className="mb-28">
        <h2 className="text-xl font-bold mb-1">{data.projectSection.h2}</h2>
        <p className="mb-5 dark:text-gray-300">{data.projectSection.description}</p>
        <div role="tablist" className="flex mb-4 gap-1">
          {tabsConfig.map((tab, index) => (
            <button 
              key={`tab-${index}`}
              onClick={() => handleClick(index)}
              role="tab"
              aria-controls={`panel-id-${index}`}
              aria-selected={selectedIndex === index}
              id={`tab-id-${index}`}
              className="flex w-30 px-[0.8rem] py-2 items-center rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 aria-selected:border-b-2 aria-selected:rounded-t-lg aria-selected:rounded-b-none aria-selected:border-gray-500 tracking-wide"
              >
              <span className="pr-1">{tab.icon}</span>
              <span className="m-auto">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="tabpanel-wrapper">
          {tabsConfig.map((tab, index) => (
            <div
              key={`tabpanel-${index}`}
              hidden={selectedIndex !== index}
              role="tabpanel"
              aria-labelledby={`tab-id${index}`}
              id={`panel-id-${index}`}
              className="overflow-x-auto relative"
            >
              {TabItem(selectedIndex, data)}
            </div>
          ))}
        </div>
      </section>
    );
}

function TabItem(selectedIndex:number, data:any) {
    if (selectedIndex === 0) {
      return (
        <ul className="grid gap-8 md:grid-cols-2 md:grid-rows-2 ">
            {data.projectSection.gridProject.map((item:any) => (
                <li key={item.cardId} className="border border-gray-300 dark:border-gray-600 rounded-md p-4">
                    <div className="flex justify-between">
                      <h3 className="mb-4 text-lg font-medium">{item.title}</h3>
                      <div>
                        <a href={item.linkCode} aria-label="View code on Github" title="View code on Github" target="_blank" rel="noopener noreferrer">
                          <GithubIcon />
                        </a>
                      </div>
                    </div>
                    <p className="mb-4 dark:text-gray-300">{item.description}</p>
                    <Button3d href={item.link} text={item.buttonText} />
                </li>
            ))}
        </ul>
      )
    }
    return (
        <table className="min-w-[600px] table-auto md:table-auto w-full border-collapse border-y border-spacing-2 border-gray-300 dark:border-gray-600 text-sm md:text-base mb-4">
            <thead className="border-b border-gray-300 dark:border-gray-600 text-left">
                <tr>
                  <th className="leading-8">
                    <span aria-hidden="true" className="pr-2">🖋</span>
                    <span>Name</span>
                  </th>
                  <th>
                    <span aria-hidden="true" className="pr-2">📄</span>
                    <span>Description</span>
                  </th>
                  <th>
                    <span aria-hidden="true" className="pr-2">📎</span>
                    <span>Link</span>
                  </th>
                  <th>
                    <span aria-hidden="true" className="pr-2">💻</span>
                    <span>Code</span>
                  </th>
                </tr>
            </thead>
            <tbody>
            {data.projectSection.gridProject.map((item:any) => (
                <tr key={item.cardId} className="border-b border-gray-300  dark:border-gray-600 ">
                    <td className="py-6 font-medium">{item.title}</td>
                    <td className="py-6">{item.description}</td>
                    <td className="py-4">
                      <Button3d href={item.link} text={item.buttonText} />
                    </td>
                    <td className="flex justify-center py-6">
                      <a href={item.linkCode} aria-label="View code on Github" title="View code on Github" target="_blank" rel="noopener noreferrer">
                          <GithubIcon />
                      </a>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
