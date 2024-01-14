import AnimatedIntroCard from '@/components/miscellaneous/animatedIntroCard';
import AnimatedTextTyping from '@/components/miscellaneous/animatedTextTyping';
import { Button3d } from '@/components/miscellaneous/button3D';
import { BubbleTalkIcon } from '@/lib/icons';
import Image from 'next/image';

export default async function Card() {
  return (
    <section className='w-full max-w-sm mx-auto p-16 pt-24 bg-white border-gray-100 dark:bg-gray-100 dark:border-gray-700 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(213,202,255,0.15)] rounded-lg relative'>
      <div className='mb-2 md:mb-5 w-fit relative'>
        <div className='absolute -right-16 -top-14 w-24 h-20'>
          <div className='relative w-24 h-20'>
            <BubbleTalkIcon addClassName='dark:text-black' />
            <AnimatedTextTyping
              delay={1}
              addStyle='absolute top-2 left-8'
              textColor='text-black'
            />
          </div>
        </div>
        <Image
          priority
          src='/profilePhoto.jpeg'
          alt='text'
          width={100}
          height={100}
          className='rounded-lg w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
        />
      </div>
      <h1 className='leading-8 text-xl md:text-1xl font-bold'>
        Carol Andrade Santos
      </h1>
      <h2 className='mb-12 text-md'>Developer</h2>
      <div className='flex gap-4 flex-col m-auto'>
        <Button3d href='/' text='Portfolio' />
        <Button3d
          href='https://www.linkedin.com/in/carolandrade1/'
          text='LinkedIn'
        />
        <Button3d href='https://github.com/carolandrade1' text='Github' />
        <Button3d href='mailto:carolandrades11@gmail.com' text='Email' />
      </div>

      <AnimatedIntroCard />
    </section>
  );
}
