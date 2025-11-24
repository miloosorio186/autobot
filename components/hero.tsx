
import { Button } from "./ui/button";
import { RainbowText } from "./ui/RainbowText";


export function Hero() {
  return (
    <div className="min-h-[calc(100svh-4rem)] py-16 max-w-(--breakpoint-xl) mx-auto mt-20 text-center px-6">
      <RainbowText>
        Impulsa tu negocio con tecnología avanzada
      </RainbowText>
      <h1 className="mt-5 max-w-3xl mx-auto text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-semibold tracking-tighter text-balance">
        Escala tu marca con automatización avanzada
      </h1>
      <div className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
        <p>
          Potencia tu presencia online con sistemas automatizados de interacción, análisis y despliegue masivo. Una infraestructura diseñada para escalar,
          optimizar y transformar tus resultados digitales de forma eficiente y segura
        </p>
      </div>
      <div className="mt-12 flex gap-4 justify-center ">
        <Button
          asChild
          size="lg"
          className="
    bg-[rgb(227,132,255)]
    hover:bg-[rgb(134,93,255)]
    hover:text-white
    hover:scale-105
    transition-all
    duration-200
    shadow-lg
    hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]
  "
        >
          <a href="https://tu-link-aqui.com">
            Solicitar Demo
          </a>
        </Button>



        <Button
          size="lg"
          className=" bg-[rgb(134,93,255)]
      hover:[rgb(227,132,255)]
      hover:text-white 
      hover:scale-105 
      transition-all 
      duration-200
      shadow-xl
      hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]
    "
        >
          <a href="https://tu-link-aqui.com">
            Ver Servicios
          </a>
        </Button>
      </div>



      <div className="mt-20 aspect-video shadow-[0_0_40px_rgba(0,0,0,0.5)] border rounded-lg bg-muted p-2">
        <div className="bg-backgrounda  h-full w-full rounded border relative">
          <img
            src="/hero.jpg"
            className="w-full h-full object-cover rounded"
          />
          <div
            className="absolute inset-0 z-0"
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
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
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
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
        </div>
      </div>
    </div>
  );
}
