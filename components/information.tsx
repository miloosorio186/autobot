import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";

export function Information() {
    return (
        <div
            className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
                <div className="my-auto">
                    <Badge
                        variant="secondary"
                        className="rounded-full py-1 border-border"
                        asChild
                    >
                        <Link href="#">
                            Infraestructura optimizada · v1.0.0 <ArrowUpRight className="ml-1 size-4" />
                        </Link>
                    </Badge>
                    <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
                        Scalable Automation for Massive Digital Workloads
                    </h1>
                    <p className="mt-6 max-w-[60ch] text-lg text-foreground/80">
                        Soluciones potentes para ejecutar, monitorear y escalar procesos digitales de alto volumen, con configuraciones personalizadas y máxima estabilidad.
                    </p>
                    <div className="mt-12 flex items-center gap-4">
                        <Button size="lg" className="rounded-full text-base">
                            Get Started <ArrowUpRight className="h-5! w-5!" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full text-base shadow-none"
                        >
                            <CirclePlay className="h-5! w-5!" /> Watch Demo
                        </Button>
                    </div>
                </div>
                <div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-accent rounded-xl shadow-[0_0_40px_0_rgba(0,0,0,0.1)] lg:rounded-none">
                    <img src="/hero.jpg" alt="" className="w-full h-full object-cover shadow-[0_0_40px_0_rgba(0,0,0,0.1)]" />
                </div>
            </div>
        </div>
    );
}
