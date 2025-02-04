import Link from "next/link";

interface LinkType {
  title: string;
  link: string;
}

interface ProductType {
  id: number;
  section: string;
  link: LinkType[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: [
      {
        title: "Products",
        link: "#products-section",
      },
      {
        title: "About us",
        link: "#about-section",
      },
      {
        title: "Prepmate App",
        link: "https://www.scholarly.africa/",
      },
    ],
  },
  {
    id: 2,
    section: "Support",
    link: [
      {
        title: "Terms of service",
        link: "/",
      },
      {
        title: "Privacy Policy",
        link: "/",
      },
      {
        title: "Legal",
        link: "/",
      },
    ],
  },
];

const footer = () => {
  return (
    <div className="bg-bgpurple mt-24" id="footer-section">
      <div className="mx-auto max-w-2xl pt-24 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className="col-span-5">
            <img src={"/assets/logo/Logo2.svg"} alt="logo" className="pb-4" />
            <h3 className="text-white text-lg font-medium leading-9 mb-4 lg:mb-20">
              {" "}
              Accelerate your digital transformation <br /> journey with
              scalable, secure, and <br /> future-ready technology solutions.{" "}
            </h3>
            <div className="flex gap-4">
              <Link href="https://wa.me/+2347083424754" target="_blank">
                <img
                  src={"/assets/footer/whatsapp.svg"}
                  alt="whatsapp"
                  className="footer-icons"
                />
              </Link>
              <Link href="mailto:info@veracone.com?subject=Subject&body=Body" target="_blank">
                <img
                  src={"/assets/footer/email.svg"}
                  alt="email"
                  className="footer-icons"
                />
              </Link>
            </div>
          </div>

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-3">
              <p className="text-white text-xl font-semibold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: LinkType, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={link.link.startsWith('#') ? link.link : `${link.link}`} target={link.link.startsWith('#') ? '_self' : '_blank'}
                      className="text-offwhite text-sm font-normal mb-6 space-links"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="pb-24 px-4">
        <h3 className="text-center text-offwhite">
          @2025 - All Rights Reserved by{" "}
          <Link href="https://veracone.com/" target="_blank">
            {" "}
            Veracone Technologies Ltd
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default footer;
