import { Codepen } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 font-semibold text-xl">
      <Codepen />
      <a
        id="title"
        href="#"
      >Autobot</a>
    </div>
  );
}
