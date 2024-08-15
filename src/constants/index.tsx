import snapgram from "@/assets/snapgram.png";
import corporativoKm from "@/assets/Corporativo-km.png";
import kmCarousel1 from "@/assets/kmCarousel1.png";
import kmCarousel2 from "@/assets/kmCarousel2.png";
import kmCarousel3 from "@/assets/kmCarousel3.png";
import kmCarousel4 from "@/assets/kmCarousel4.png";
import snapgramCarousel1 from "@/assets/snapgramCarousel1.png";
import snapgramCarousel2 from "@/assets/snapgramCarousel2.png";
import snapgramCarousel3 from "@/assets/snapgramCarousel3.png";
import snapgramCarousel4 from "@/assets/snapgramCarousel4.png";
import snapgramCarousel5 from "@/assets/snapgramCarousel5.png";

export const arrayProjects = [
  {
    id: 1,
    title: "Corporativo Integral K&M del Bajío - Sitio Web",
    preDescription:
      "Sitio web de la empresa Corporativo integral K&M del Bajío, diseñada para mostrar los servicios principales e información de la empresa.",
    description:
      "Desarrollé y diseñé el sitio web para Corporativo KM. El sitio está optimizado para ofrecer una experiencia de usuario fluida y responsiva, destacando la identidad de la marca y sus servicios principales. Implementé tecnologías como React, TypeScript, Tailwind CSS, Shadcn, React Router Dom, i18n para la internacionalización de la pagina, para asegurar un rendimiento eficiente y un diseño atractivo.",
    image: corporativoKm,
    technologies: ["React", "Tailwind CSS", "ShadCN", "i18n"],
    images: [corporativoKm, kmCarousel1, kmCarousel2, kmCarousel3, kmCarousel4],
    link: "https://corporativokm.com",
  },
  {
    id: 2,
    title: "Snapgram - Red Social",
    preDescription:
      "Red social diseñada para conectar personas y facilitar la interacción en linea",
    description:
      "Desarrollé Snapgram, una red social diseñada para conectar personas y facilitar la interacción en línea. Utilicé tecnologías modernas como React.js, TypeScript, Tailwind CSS, Shadcn, y React Query en el frontend para crear una interfaz de usuario dinámica y responsiva. En el backend, implementé Appwrite para manejar la autenticación, la base de datos y la gestión de usuarios, asegurando una experiencia segura y escalable.",
    image: snapgram,
    technologies: [
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "React Router Dom",
      "AppWrite",
    ],
    images: [
      snapgram,
      snapgramCarousel1,
      snapgramCarousel2,
      snapgramCarousel3,
      snapgramCarousel4,
      snapgramCarousel5,
    ],
    link: "https://snapgram-ldm.vercel.app/sign-in",
  },
];
