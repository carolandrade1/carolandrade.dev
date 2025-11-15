import Image from 'next/image';
import Link from 'next/link';

export default async function QrCode() {
  return (
    <section className='w-full max-w-sm mx-auto p-16 pt-24 bg-white border-gray-100 dark:bg-gray-100 dark:border-gray-700 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(213,202,255,0.15)] rounded-lg relative transform -translate-y-20'>
      <div className='mb-2 md:mb-5 w-fit relative'>
        <Image
          priority
          src='/profilePhoto.jpeg'
          alt='Picture of Carol Santos'
          width={100}
          height={100}
          className='rounded-lg w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
        />
      </div>
      <h1 className='leading-8 text-xl md:text-1xl font-bold'>
        Carol Andrade Santos
      </h1>
      <h2 className='mb-12 text-md'>Developer</h2>
      <Link href='/greetingcard'>
        <Image
          priority
          src='/qrcode.svg'
          alt='qr code to Greetings Card Page'
          width={100}
          height={100}
          className='w-full'
        />
      </Link>
    </section>
  );
}
