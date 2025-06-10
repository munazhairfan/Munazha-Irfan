import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="max-w-3xl mx-auto p-4" id="about">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="md:text-[18px] text-center text-gray-700">
          Hi! I&apos;m Munazha Irfan, a passionate Full-Stack Developer and creative
          Digital Artist based in Pakistan. I specialize in building responsive,
          user-focused web applications using modern technologies like Next.js,
          TypeScript, and Tailwind CSS—and I love blending functionality with
          aesthetics. Whether it&apos;s crafting secure tools with Streamlit and
          Python, deploying dynamic frontends, or creating engaging user
          interfaces, I approach every project with curiosity, precision, and
          care. Outside of coding, I find joy in painting and using tools like
          Figma and Canva to bring ideas to life visually. I believe creativity
          is just as important in development as it is on the canvas. Let&apos;s
          create something meaningful—code that solves problems and design that
          sparks joy.
        </p>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto bg-gradient-to-b from-gray-300 to-white">
        <h3 className="text-4xl font-medium text-center mb-10 text-gray-800">
          Beyond Code
        </h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Beyond the structured world of coding lies a place where logic fades and creativity speaks. 
          Through painting, I explore emotions and
          ideas that words and logic cannot fully express. This creative
          practice fuels my passion and brings balance, inspiring fresh
          perspectives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          <Image
            src="/paintings/p1.jpeg"
            alt="Painting 1"
            className="rounded-xl shadow-md lg:h-96"
          />
          <Image
            src="/paintings/p2.jpeg"
            alt="Painting 2"
            className="rounded-xl shadow-md lg:h-96"
          />
          <Image
            src="/paintings/p3.jpeg"
            alt="Painting 3"
            className="rounded-xl shadow-md lg:h-96"
          />
          <Image
            src="/paintings/p4.jpeg"
            alt="Painting 4"
            className="rounded-xl shadow-md lg:h-96"
          />
          <Image
            src="/paintings/p5.jpeg"
            alt="Painting 5"
            className="rounded-xl shadow-md lg:h-96"
          />
        </div>
      </section>
    </>
  );
}
