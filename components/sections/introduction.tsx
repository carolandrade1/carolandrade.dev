import Image from "next/image";
import { DescriptionIcon, MessageIcon } from "@/lib/icons";
import { ButtonBg } from "@/components/miscellaneous/buttons/buttonBg";
import { ButtonColor, Contacts, Introduction } from "@/types/types";

export function IntroductionSection({data}: any) {
const introductionSection: Introduction = data.introductionSection;

  return (
    <section className="mb-16 md:mb-20">
        <div className="mb-5">
            <Image
                priority
                src={data.photoUrl}
                alt={data.photoAlt}
                width={80}
                height={80}
                className="rounded-lg" />
        </div>
        <div>
            <h1 className="leading-8 text-2xl md:text-3xl font-bold">{introductionSection.h1}</h1>
            <h2 className="mb-6 md:mb-10 text-lg dark:text-gray-300">{introductionSection.role}</h2>
            <div className="flex flex-col mb-6 md:mb-8 md:flex-row md:items-start">
                <h3 className="flex items-center gap-2 mb-1 text-sm text-gray-600 dark:text-gray-400 md:w-32">
                    <DescriptionIcon />
                    About
                </h3>
                <p className="max-w-xl dark:text-gray-300">{introductionSection.description}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start">
                <h3 className="flex items-center gap-2 mb-1 text-sm text-gray-600 dark:text-gray-400 md:w-32">
                    <MessageIcon />
                    Contact
                </h3>
                <div className="flex flex-wrap gap-4">
                    {introductionSection.contact.map((item: Contacts) => {
                        return (
                            <ButtonBg key={item.contactId} href={item.url} color={ButtonColor.indigo} text={item.name} />
                            )   
                        }
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}