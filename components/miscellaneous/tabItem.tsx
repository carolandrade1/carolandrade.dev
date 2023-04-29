import { Button3d } from "@/components/miscellaneous/button3D";
import { ExternalLink, GithubIcon } from "@/lib/icons";
import { Project, Projects } from "@/types/types";

export default function TabItem(
  selectedIndex: number,
  projectSection: Projects
) {
  if (selectedIndex === 1) {
    return (
      <ul className="grid gap-8 md:grid-cols-2 md:grid-rows-2">
        {projectSection.gridProject.map((item: Project) => (
          <li
            key={item.cardId}
            className="group relative flex flex-col justify-between border border-gray-200 dark:border-gray-400 rounded-md p-4 group hover:bg-gray-50 dark:hover:bg-gray-800 transition ease-out duration-300"
          >
            <div className="absolute shadow-sm bg-white dark:bg-gray-900 opacity-1 sm:opacity-0 overflow-hidden border-gray-300 border group-hover:opacity-100 flex transition ease-out duration-500 right-4 justify-between rounded-lg">
              <a
                href={item.linkCode}
                aria-label="View code on Github"
                title="View code on Github"
                target="_blank"
                rel="noopener noreferrer"
                className="px-[6px] py-1 hover:bg-gray-100 border-r border-gray-300 dark:border-gray-400 dark:hover:bg-gray-700"
              >
                <GithubIcon />
              </a>
              <a
                href={item.link}
                aria-label="View code live"
                title="View code live"
                target="_blank"
                rel="noopener noreferrer"
                className="px-[6px] py-1 hover:bg-gray-100 border-l border-gray-300 dark:border-gray-400 dark:hover:bg-gray-700"
              >
                <ExternalLink />
              </a>
            </div>
            <h3 className="mt-12 mb-2 text-lg font-medium">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm dark:text-gray-400">{item.description}</p>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <table className="min-w-[750px] table-auto w-full border-collapse border-y border-spacing-2 border-gray-300 dark:border-gray-600 text-sm md:text-base mb-4">
      <thead className="border-b border-gray-300 dark:border-gray-600 text-left">
        <tr className="text-gray-600">
          <th className="leading-8 min-w-[70px]">
            <span aria-hidden="true" className="grayscale text-xs">
              🖋
            </span>
            <span className="font-normal text-sm pl-1">Name</span>
          </th>
          <th className="leading-8 min-w-[70px]">
            <span aria-hidden="true" className="grayscale text-xs">
              📄
            </span>
            <span className="font-normal text-sm pl-1">Description</span>
          </th>
          <th className="leading-8 min-w-[70px] text-center">
            <span aria-hidden="true" className="grayscale text-xs">
              📎
            </span>
            <span className="font-normal text-sm pl-1">Link</span>
          </th>
          <th className="leading-8 min-w-[70px] text-center">
            <span aria-hidden="true" className="grayscale text-xs">
              💻
            </span>
            <span className="font-normal text-sm pl-1">Code</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {projectSection.gridProject.map((item: Project) => (
          <tr
            key={item.cardId}
            className="border-b border-gray-300 dark:border-gray-600"
          >
            <td className="py-2">{item.title}</td>
            <td className="py-2 text-sm">{item.description}</td>
            <td className="py-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title="View code live"
                className="flex justify-center w-full bg-gray-100 dark:bg-gray-800 rounded-lg px-1 py-[2px] border border-transparent hover:border-gray-400"
              >
                {item.buttonText}
              </a>
            </td>
            <td className="flex justify-center py-2 min-h-[50px] h-full">
              <a
                href={item.linkCode}
                aria-label="View code on Github"
                title="View code on Github"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <GithubIcon />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
