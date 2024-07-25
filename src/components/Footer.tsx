import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "" },
    { name: "About Us", href: "" },
    { name: "Services", href: "" },
    { name: "Book Appointment", href: "" },
    { name: "Contact Us", href: "" },
  ],
  support: [
    { name: "FAQs", href: "" },
    { name: "Patient Resources", href: "" },
    { name: "Support", href: "" },
  ],
  company: [
    { name: "Blog", href: "" },
    { name: "Careers", href: "" },
    { name: "Privacy Policy", href: "" },
  ],
  legal: [
    { name: "Terms", href: "" },
    { name: "Privacy", href: "" },
    { name: "Sitemap", href: "" },
  ],
  social: [
    {
      name: "Twitter",
      href: "",
      target: "_blank",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="..."></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "",
      target: "_blank",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="..."></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "",
      target: "_blank",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="..."></path>
        </svg>
      ),
    },
  ],

};

export function Footer() {
  return (
    <footer className="relative z-50">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <FooterList title="Product" items={navigation.main} />
            </div>
            <div className="mt-10 md:mt-0">
              <FooterList title="Support" items={navigation.support} />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <FooterList title="Company" items={navigation.company} />
            </div>
            <div className="mt-10 md:mt-0">
              <FooterList title="Legal" items={navigation.legal} />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Sharda Ent Hospital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterList(props: {
  title: string;
  items: { name: string; href: string; target?: string }[];
}) {
  return (
    <>
      <h3 className="text-sm font-semibold leading-6 text-gray-900">
        {props.title}
      </h3>
      <ul role="list" className="mt-6 space-y-4">
        {props.items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              target={item.target}
              prefetch={item.target !== "_blank"}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
