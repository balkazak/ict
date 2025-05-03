type NavItemSubItem = {
  title: string;
  href: string;
  innerItems?: NavItem[];
};

type NavItem = {
  title: string;
  href: string;
  subItems?: NavItemSubItem[];
};

export const NavItems: NavItem[] = [
  {
    title: "Решения",
    href: "/solutions",
  },
  {
    title: "Устойчивое развитие",
    href: "/development",
  },
  {
    title: "Углеродные проекты",
    href: "/projects",
  },
  {
    title: "О нас",
    href: "/about",
  },
  {
    title: "Мониторинг окружающей среды",
    href: "/monitoring",
    subItems: [
      {
        title: "Вода",
        href: "/monitoring/water",
        innerItems: [
          { title: "Качество", href: "/monitoring/water/quality" },
          { title: "Уровень", href: "/monitoring/water/level" },
        ],
      },
      {
        title: "Воздух",
        href: "/monitoring/air",
      },
      {
        title: "Земля",
        href: "/monitoring/soil",
      },
      {
        title: "Растение",
        href: "/monitoring/plant",
      },
    ],
  },
];
