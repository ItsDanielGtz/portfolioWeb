import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";
import { CarouselProjects } from "../CarrouselProjects";
interface CardProject {
  id: number;
  title: string;
  preDescription: string;
  description: string;
  image: string;
  technologies: string[];
  images: string[];
  link: string
}

export default function CardProject({projects}: {projects:CardProject[]} ) {
  const [selectedProject, setSelectedProject] = useState<CardProject | null>(
    null
  );
  const handleProjectClick = (project: CardProject) => {
    setSelectedProject(project);
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  console.log(projects);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-background rounded-lg shadow-lg overflow-hidden flex flex-col"
        >
          <img
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4 ">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-muted-foreground">{project.preDescription}</p>
            <div className="flex gap-6 justify-end items-end">
              <Button
                onClick={() => handleProjectClick(project)}
                className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Ver más
              </Button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-primary-foreground px-4 py-2 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-secondary/55 text-black "
              >
                Ir al sitio web
              </a>
            </div>
          </div>
          {selectedProject?.id === project.id && (
            <Dialog open onOpenChange={handleCloseModal}>
              <DialogContent className="bg-background p-6 rounded-lg shadow-lg max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="w-full">
                      <CarouselProjects images={project.images} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CodeIcon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Tecnologías:
                        </span>
                      </div>
                      <p>{project.technologies.join(", ")}</p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleCloseModal}>Cerrar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      ))}
    </div>
  );
}
