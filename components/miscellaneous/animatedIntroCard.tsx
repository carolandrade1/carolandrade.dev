import { AnimatedDuration } from '@/components/miscellaneous/animatedDuration';
import { AnimatedTextContainer } from '@/components/miscellaneous/animatedText';
import { HappyFaceIcon, StarsIcon } from '@/lib/icons';

export default function AnimatedIntroCard() {
  return (
    <AnimatedDuration>
      <div className='grid place-items-center absolute inset-0 max-w-sm m-auto p-16 bg-white border-gray-100 dark:bg-white dark:border-gray-700 dark:shadow-slate-500 rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <div className='absolute inset-0 grid grid-cols-2 grid-rows-2 p-8'>
          <div>
            <HappyFaceIcon />
          </div>
          <div className='flex justify-end'>
            <StarsIcon />
          </div>
          <div className='flex items-end'>
            <StarsIcon />
          </div>
          <div className='flex items-end justify-end'>
            <HappyFaceIcon />
          </div>
        </div>
        <AnimatedTextContainer
          text={['NICE', 'TO', 'MEET', 'YOU']}
          className={'text-6xl text-center font-black drop-shadow-lg'}
        />
      </div>
    </AnimatedDuration>
  );
}
