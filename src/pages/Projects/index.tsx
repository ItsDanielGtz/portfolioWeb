import CardProject from "@/components/CardProject";
import { arrayProjects } from "@/constants";

function Projects() {
  return (
    <section
      id="proyectos"
      className="py-12 md:py-20 px-4 md:px-6 bg-muted h-full "
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Mis Proyectos</h2>
        <CardProject projects={[...arrayProjects]}/>
      </div>
    </section>
  );
}

export default Projects;
