import Image from "next/image";
import Navbar from "../shared/components/navbar/navbar";
import TypographyH1 from "@/shared/components/typography/typography-h1";
import { Busqueda } from "./busqueda";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="">
        <div className="gap flex h-96 w-full flex-col items-center justify-center gap-y-6">
          <TypographyH1>
            Encuentra tu habitación perfecta para alquilar hoy!
          </TypographyH1>
          <div className="flex h-12 flex-col items-center gap-4 md:flex-row">
            <Busqueda />
            <Button className="h-full w-full bg-primary text-xl md:w-fit">
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
