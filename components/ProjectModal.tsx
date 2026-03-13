// components/ProjectModal.tsx
import { Project } from "@/data/projects";
import Badge from "./badges";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-2 border-bgblue rounded-xl p-6 shadow-2xl no-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-pixel text-2xl hover:text-bgblue"
        >
          [X]
        </button>

        <h2 className="text-3xl font-pixel mb-4 text-bgblue">
          {project.title}
        </h2>

        <div className="space-y-6 font-sans">
          <section>
            <h3 className="font-bold text-lg border-b border-bgblue/30 mb-2">
              Background
            </h3>
            <p className="opacity-80">
              {project.background || "Information coming soon..."}
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section>
              <h3 className="font-bold text-lg border-b border-bgblue/30 mb-2">
                Methods
              </h3>
              <p className="opacity-80 text-sm">{project.methods}</p>
            </section>
            <section>
              <h3 className="font-bold text-lg border-b border-bgblue/30 mb-2">
                Results
              </h3>
              <p className="opacity-80 text-sm">{project.results}</p>
            </section>
          </div>

          <section>
            <h3 className="font-bold text-lg border-b border-bgblue/30 mb-2">
              My Responsibility
            </h3>
            <p className="opacity-80 italic">{project.responsibility}</p>
          </section>

          <div className="flex flex-wrap gap-2">
            {project.techstack.map((tech, i) => (
              <Badge key={i} text={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
