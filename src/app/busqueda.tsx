"use client";

import { useState } from "react";
import citiesJson from "./cities.json";
import citiesByUbigeoJson from "./cities-by-ubigeo.json";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ICity } from "@/shared/types/types";

const cities: ICity[] = citiesJson;
const citiesByUbigeo: Record<string, ICity> = citiesByUbigeoJson;

const ubigeos = cities.map((city) => city.ubigeo);

// Verificar si hay repetidos en el array de ubigeos

// const hasDuplicates = (array: string[]) => {
//   return new Set(array).size !== array.length;
// };

// console.log(hasDuplicates(ubigeos)); // false

function quitarTildes(cadena: string) {
  return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function Busqueda() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [label, setLabel] = useState("");

  const cityByLabel = cities.find(
    (city) =>
      quitarTildes(city.label.toLowerCase()) ===
      quitarTildes(label).toLowerCase(),
  );

  return (
    <>
      {/* <p className="text-4xl">{inputValue}</p>
      <p className="text-4xl">{label}</p> */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="h-11 w-[400px] justify-between text-xl md:h-full"
          >
            {cityByLabel?.distrito ? cityByLabel.distrito : "Ciudad..."}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0">
          <Command>
            <CommandInput
              placeholder="Buscar ciudad..."
              className="h-9"
              value={inputValue}
              onValueChange={setInputValue}
            />
            <CommandGroup>
              {/* {inputValue.length >= 3 && ( */}
              {inputValue.length >= 3 &&
                cities
                  .filter((city) =>
                    quitarTildes(city.label)
                      .toLowerCase()
                      .includes(quitarTildes(inputValue.toLowerCase())),
                  )
                  .map((city) => (
                    <CommandItem
                      key={city.ubigeo}
                      value={city.label} //Este es el valor que se usa como clave en la busqueda
                      onSelect={(currentValue) => {
                        setLabel(currentValue);
                        // setInputValue(citiesByUbigeo[currentValue].label);
                        setOpen(false);
                      }}
                    >
                      {city.label}
                    </CommandItem>
                  ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
