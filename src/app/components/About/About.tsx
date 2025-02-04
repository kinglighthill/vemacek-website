import Circle from "../Helpers/Circle/Circle";
import ImageFallback from "../Helpers/ImageFallback/ImageFallback";

interface Work {
  id: number;
  title: string;
  content: string;
}

const works: Work[] = [
  {
    id: 1,
    title: "Engineering the Future of Education",
    content:
      "With years of experience in software development, our team is dedicated to building innovative solutions for educational institutions. From smart learning platforms to student management systems, we create technology that enhances learning experiences.",
  },
  {
    id: 2,
    title: "Designing User-Centric Experiences",
    content:
      "We believe that great design is at the heart of every successful digital product. Our approach combines creativity and functionality, ensuring intuitive user interfaces and seamless user experiences across all devices.",
  },
  {
    id: 3,
    title: "Innovative Product Development",
    content:
      "We specialize in designing and developing products that solve real-world challenges. From concept to deployment, we craft scalable solutions that drive efficiency and business growth.",
  },
  {
    id: 4,
    title: "Technology-Driven Business Solutions",
    content:
      "We leverage modern technologies to build robust digital products for various industries. Whether it's automation, system integration, or cloud computing, we create solutions tailored to business needs.",
  },
];

const About = () => {
  return (
    <div
      id="about-section"
      className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
          What We Do
        </h2>
        <p className="text-gray-700">
          We provide innovative solutions for your business needs.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {works.map((work, index) => (
          <div key={`work-${index}`} className="group relative">
            <div className="p-6 rounded-lg bg-white mentorShadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {work.title}
              </h3>
              <p className="text-gray-700">{work.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 items-center">
        <div className="relative">
          <ImageFallback
            fallback=""
            className="w-full rounded-2xl"
            src="assets/about/girl1.svg"
            width={425}
            height={487}
            alt=""
          />
          <Circle className="left-4 top-4 z-[-1]" width={85} height={85} />
          <Circle
            width={37}
            height={37}
            fill={false}
            className="right-10 top-20 z-[-1]"
          />
          <Circle className="right-12 top-1/2 -z-[1]" width={24} height={24} />
          <Circle className="bottom-6 right-6 z-[-1]" width={85} height={85} />
          <Circle className="left-12 top-1/2 z-[-1]" width={20} height={20} />
          <Circle
            className="bottom-12 left-8 z-[1]"
            width={47}
            height={47}
            fill={false}
          />
        </div>
        <div className="px-4">
          <p className="text-purple font-medium">OUR MISSION</p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 my-4">
            Driving Innovation Through Technology
          </h2>

          <p className="text-gray-700 mt-4 mb-8">
            Our mission is to design, develop, and deploy cutting-edge software
            solutions that solve real-world challenges across industries. We are
            committed to leveraging modern technologies to enhance efficiency,
            drive digital transformation, and empower businesses and individuals
            with innovative tools. Through research, consulting, and tailored
            application development, we strive to create meaningful impact in
            education, healthcare, finance, logistics, and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About
