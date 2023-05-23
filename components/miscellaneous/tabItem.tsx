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
            className="group relative flex flex-col justify-between border border-gray-200 rounded-md p-4 group hover:bg-gray-50 transition ease-out duration-300"
          >
            <div className="absolute flex transition ease-out duration-500 right-4 justify-between rounded-lg">
              <a
                href={item.linkCode}
                aria-label={item.buttonAriaTextCode}
                title={item.buttonAriaTextCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-[6px] py-1 shadow-sm bg-white hover:bg-gray-100 border-r border-gray-300 border opacity-100 sm:opacity-0 group-hover:opacity-100 rounded-l-lg focus:opacity-100"
              >
                <GithubIcon />
              </a>
              <a
                href={item.link}
                aria-label={item.buttonAriaText}
                title={item.buttonAriaText}
                target="_blank"
                rel="noopener noreferrer"
                className="px-[6px] py-1 shadow-sm bg-white hover:bg-gray-100 border-r border-gray-300 border opacity-100 sm:opacity-0 group-hover:opacity-100 rounded-r-lg focus:opacity-100"
              >
                <ExternalLink />
              </a>
            </div>
            <h3 className="mt-12 mb-2 text-lg font-medium">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <table className="min-w-[650px] table-auto w-full border-collapse border-y border-spacing-2 border-gray-300 text-sm md:text-base mb-4">
      <thead className="border-b border-gray-300 text-left">
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
          <th className="leading-8 min-w-[80px] text-center">
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
            className="border-b border-gray-300"
          >
            <td className="py-2 pr-1">{item.title}</td>
            <td className="py-2 pr-1 text-sm">{item.description}</td>
            <td className="py-2">
              <a
                href={item.link}
                target="_blank"
                rel={item.buttonAriaText}
                title={item.buttonAriaText}
                aria-label={item.buttonAriaText}
                className="flex justify-center text-center items-center w-full bg-gray-100 rounded-lg px-1 py-[2px] border border-transparent hover:border-gray-400"
              >
                {item.buttonText}
              </a>
            </td>
            <td className="flex justify-center py-2 min-h-[50px] h-full">
              <a
                href={item.linkCode}
                aria-label={item.buttonAriaTextCode}
                title={item.buttonAriaTextCode}
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
