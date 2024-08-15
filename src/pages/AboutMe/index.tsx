import {
  BriefcaseIcon,
  CalendarDaysIcon,
  CheckIcon,
} from "lucide-react";

function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="py-12 md:py-24 lg:py-32 bg-muted overflow-hidden h-[calc(100vh-64px)] bg-yellow-300 flex items-center"
    >
      <div className="container max-w-5xl px-4 md:px-6 relative z-10 space-y-8">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Sobre mí
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Soy un desarrollador frontend apasionado por crear experiencias web
            modernas y accesibles. Con 2 años de experiencia, he trabajado en
            una variedad de proyectos, desde sitios web estáticos hasta
            aplicaciones web complejas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-2">Habilidades</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                HTML, CSS, JavaScript, TypeScript
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                React, Node.js
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                Tailwind CSS
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                Git, GitHub
              </li>
            </ul>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-2">Experiencia</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <CalendarDaysIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                2 años como desarrollador frontend
              </li>
              <li>
                <BriefcaseIcon className="w-4 h-4 mr-2 inline-block text-primary" />
                Trabajé en proyectos para empresas de diversos sectores
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
