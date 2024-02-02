export const company = {
  name: "N1 Website Agency",
  email: "none.websites@gmail.com",
  phone: "+61 402 704 033",
};

export const highlights = [
  {
    title: "Tailored Solutions",
    description:
      "We specialize in creating websites specifically tailored to the unique needs and goals of small businesses, ensuring a personalized online presence.",
  },
  {
    title: "Affordable Excellence",
    description:
      "As a small web agency, we offer cost-effective solutions without compromising on the quality of design, functionality, and user experience.",
  },
  {
    title: "Responsive Design",
    description:
      "Our websites are crafted to be responsive, providing an optimal viewing and interaction experience across a wide range of devices, enhancing accessibility for your audience.",
  },
  {
    title: "Support and Maintenance",
    description:
      "Beyond the launch, we provide ongoing support and maintenance to ensure your website stays up-to-date, secure, and continues to meet your evolving business needs.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Planning",
    steps: [
      "Briefing",
      "Consultation",
    ],
  },
  {
    step: "02",
    title: "Development",
    steps: ["Design", "Prototyping", "Feedback session"],
  },
  {
    step: "03",
    title: "Launch",
    steps: ["Support", "Maintenance"],
  },
] as const;

export const portfolio = [
  {
    title: "Hair Studio",
    link: "https://astudiolarnaca.com/",
    image: "/portfolio-image-one.webp",
  },
  {
    title: "Conference Business",
    link: "https://icsconferences.org",
    image: "/portfolio-image-two.webp",
  },
  {
    title: "Yoga Blog",
    link: "",
    image: "/portfolio-image-three.webp",
  },
] as const;

export const pricing = [
  {
    title: "/Landing Page",
    description: [
      "Single page website",
    ],
    price: "AU$250",
  },
  {
    title: "/Multi Page",
    description: [
      "Multiple page website",
    ],
    price: "AU$500",
  },
  {
    title: "/Express Design",
    description: [
      "One page website designed in 3 days",
    ],
    price: "AU$600",
  },
  {
    title: "/Brand Identity",
    description: [
      "Brand Development",
    ],
    price: "AU$200",
  },
  {
    title: "/Dynamic Content",
    description: [
      "Dynamic Content via Contentful",
    ],
    price: "AU$1500",
  },
] as const;
