import {
  ArrowUpRightIcon,
  BinocularsIcon,
  CogIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { LogoCloud } from "./logo-cloud";

const plusPoints = [
  {
    icon: ShieldCheckIcon,
    title: "Rapidez",
    description:
      "Trabajamos las 24 horas del dia, para darte la respuesta mas rapida",
  },
  {
    icon: CogIcon,
    title: "Sencillo de adquirir",
    description: "Contactarnos es facil, y adquirir es sencilloS",
  },
  {
    icon: BinocularsIcon,
    title: "Alcanza tus objetivos",
    description: "Con un asistente inteligente, puedes alcanzar tus objetivos mas rapido",
  },
];

export function WhyChooseUs() {
  return (
    <div
      id="why-choose-us"
      className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24"
    >
      <strong className="font-semibold text-muted-foreground">
        ¿Por qué escogernos?
      </strong>
      <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
        Experimenta la mejora en tu contenido, y creece sin esfuerzo
      </h2>
      <p className="mt-5 text-lg text-muted-foreground">
        Somos líderes en asistentes inteligentes y granjas automatizadas
      </p>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        {plusPoints.map((plusPoint) => (
          <div
            key={plusPoint.title}
            className="relative overflow-hidden border rounded-lg px-6 py-10 w-full sm:max-w-xs flex flex-col items-center gap-2  bg-gradient-to-b from-transparent "
          >
            <BackgroundPattern />

            <plusPoint.icon className="size-14 stroke-[1.5px] text-primary" />
            <h3 className="mt-6 text-xl font-semibold">{plusPoint.title}</h3>
            <p className="text-muted-foreground text-balance">
              {plusPoint.description}
            </p>
            <Button className="mt-6">
              Learn More <ArrowUpRightIcon />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-32 space-y-12">
        <p className="text-3xl font-medium tracking-tight">
          Trabajamos en mas de 20 redes sociales activas para trabajar
        </p>
        <LogoCloud />
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div
      className="absolute inset-0 -top-px -left-px -z-1"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
