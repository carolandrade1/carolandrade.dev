import Image from 'next/image';
import { BubbleTalkIcon, DescriptionIcon, MessageIcon } from '@/lib/icons';
import { ButtonBg } from '@/components/miscellaneous/buttonBg';
import AnimatedTextTyping from '@/components/miscellaneous/animatedTextTyping';
import { ButtonColor, Contacts, Introduction } from '@/types/types';

export function IntroductionSection({ data }: any) {
  const introductionSection: Introduction = data.introductionSection;

  return (
    <section className='mb-16 md:mb-28'>
      <div className='mb-2 md:mb-5 w-fit relative'>
        <div className='absolute -right-16 -top-14 w-24 h-20'>
          <div className='relative w-24 h-20'>
            <BubbleTalkIcon addClassName='dark:text-white' />
            <AnimatedTextTyping
              delay={1}
              addStyle='absolute top-2 left-8'
              textColor='text-black dark:text-white'
            />
          </div>
        </div>
        <Image
          priority
          src={data.photoUrl}
          alt={data.photoAlt}
          width={100}
          height={100}
          className='rounded-lg w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
        />
      </div>
      <div>
        <div className='mb-6 md:mb-10'>
          <h1 className='leading-8 text-3xl md:text-5xl font-bold dark:text-white'>
            {introductionSection.h1}
          </h1>
          <h2 className='text-lg dark:text-gray-300'>
            {introductionSection.role}
          </h2>
        </div>
        <div className='flex flex-col mb-6 md:mb-8 md:flex-row md:items-start'>
          <h3 className='flex items-center gap-2 mb-1 text-sm text-gray-600 dark:text-gray-400 md:min-w-[128px]'>
            <DescriptionIcon />
            About
          </h3>
          <p className='dark:text-gray-300'>
            {introductionSection.description}
          </p>
        </div>
        <div className='flex flex-col md:flex-row md:items-start'>
          <h3 className='flex items-center gap-2 mb-1 text-sm text-gray-600 dark:text-gray-400 md:min-w-[128px]'>
            <MessageIcon />
            Contact
          </h3>
          <div className='flex flex-wrap gap-4'>
            {introductionSection.contact.map((item: Contacts) => {
              return (
                <ButtonBg
                  key={item.contactId}
                  href={item.url}
                  color={ButtonColor.default}
                  text={item.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
