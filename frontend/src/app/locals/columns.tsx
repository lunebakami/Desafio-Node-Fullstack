"use client";

import { MoreVertical } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Local = {
  id: string;
  name: string;
  nickname: string;
  cnpj: string;
  city: string;
  state: string;
  cep: string;
  address: string;
  complement?: string;
  email: string;
  phone: string;
  localTypeId: number;
  entries: string; // Assuming this is a property related to the local type
  turnstiles: string; // Assuming this is a property related to the local type
};

export const getColumns = (
  handleDelete: (id: string) => void,
): ColumnDef<Local>[] => {
  const columns: ColumnDef<Local>[] = [
    {
      accessorKey: "name",
      header: "Nome do Local",
    },
    {
      accessorKey: "address",
      header: "Endereço",
    },
    {
      accessorKey: "city",
      header: "Cidade e Estado",
      cell: ({ row }) => {
        const local = row.original;
        const { city, state } = local;

        return (
          <div className="text-start font-medium">
            {city}/{state}
          </div>
        );
      },
    },
    {
      accessorKey: "entries",
      header: "Portões cadastrados",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const local = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => console.log("Edit", local.id)}>
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  handleDelete(local.id);
                }}
              >
                Apagar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return columns;
};
