import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative z-10  p-8">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center">
          <span className="border-b border-gray-300 w-16"></span>
          <Link href="https://www.instagram.com/growwdas/" target="_blank" rel="nofollow noopener" className="mx-4">
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.25 13.75H4.75C2.5 13.75 1 12.625 1 10V4.75C1 2.125 2.5 1 4.75 1L12.25 1C14.5 1 16 2.125 16 4.75V10C16 12.625 14.5 13.75 12.25 13.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.25 5.12488L9.9025 6.99988C9.13 7.61488 7.8625 7.61488 7.09 6.99988L4.75 5.12488" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-2xl">Website Expert & Digital Marketing</p>
        <p className="text-2xl">Website Expert & Digital Marketing</p>
      </div>

      <div className="flex flex-col lg:flex-row items-end">
        <div className="lg:w-7/12">
          <div className="relative z-10">
            <span className="block mb-4">Hello There!</span>
            <h2 className="text-4xl font-bold">
              I am Shekhar <br />
              <span className="text-3xl">
                <b className="text-blue-500">Web</b>
                <b className="text-blue-500 hidden">WP</b>
                <b className="text-blue-500 hidden">PHP</b>
              </span>
              developer
            </h2>
            <p className="mt-4 text-lg">
              The combination of my passion for design, code & interaction web design world.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded">
              Get In Touch
              <svg width="12" height="12" viewBox="0 0 12 12" className="ml-2">
                <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.98874 1.01725L10.9991 1L10.9826 9.01105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="mt-6">
              <span className="block border-t border-gray-300 py-2 cursor-pointer">Scroll Down</span>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 text-center lg:text-right">
          <img src="https://growwdas.com/wp-content/uploads/2023/11/hero-shape-1.png" alt="" className="mb-4" />
          <img src="https://growwdas.com/wp-content/uploads/2023/11/hero-shape-2.png" alt="" className="hidden lg:block mb-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
