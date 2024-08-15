import snapgram from "@/assets/snapgram.png"
import corporativoKm from "@/assets/Corporativo-km.png"

export const arrayProjects = [
  {
    id: 1,
    title: "Corporativo KM",
    preDescription: "Sitio web de la empresa Corporativo integral K&M del Bajío, diseñada para mostrar los servicios principales e información de la empresa.",
    description: "Desarrollé y diseñé el sitio web para Corporativo KM. El sitio está optimizado para ofrecer una experiencia de usuario fluida y responsiva, destacando la identidad de la marca y sus servicios principales. Implementé tecnologías como React, TypeScript, Tailwind CSS, Shadcn, React Router Dom, i18n para la internacionalización de la pagina, para asegurar un rendimiento eficiente y un diseño atractivo.",
    image: corporativoKm,
    technologies: ["React", "Tailwind CSS", "ShadCN", "i18n"],
    images: [snapgram, corporativoKm],
    link: "https://corporativokm.com"
  },
  {
    id: 2,
    title: "snapgram",
    preDescription: "Red social diseñada para conectar personas y facilitar la interacción en linea",
    description: "Desarrollé Snapgram, una red social diseñada para conectar personas y facilitar la interacción en línea. Utilicé tecnologías modernas como React.js, TypeScript, Tailwind CSS, Shadcn, y React Query en el frontend para crear una interfaz de usuario dinámica y responsiva. En el backend, implementé Appwrite para manejar la autenticación, la base de datos y la gestión de usuarios, asegurando una experiencia segura y escalable.",
    image: snapgram,
    technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "ShadCN", "React Router Dom", "AppWrite"],
    images: [snapgram, corporativoKm],
    link: "https://snapgram-ldm.vercel.app/sign-in"
  },
]