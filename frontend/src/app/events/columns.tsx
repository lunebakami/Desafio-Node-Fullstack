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

export type Event = {
  id: string;
  name: string;
  date: string; // Assuming ISO 8601 date format (YYYY-MM-DDTHH:mm:ss.sssZ)
  localId: string; // Can be more specific if you know the format (e.g., UUID)
  local: {
    name: string;
    entries: string;
  } | null;
  eventTypeId: number;
  eventType: {
    name: string;
  } | null;
  email: string;
  phone: string;
};

export const getColumns = (
  handleDelete: (id: string) => void,
): ColumnDef<Event>[] => {
  const columns: ColumnDef<Event>[] = [
    {
      accessorKey: "name",
      header: "Nome do Evento",
    },
    {
      accessorKey: "localId",
      header: "Local",
      cell: ({ row }) => {
        const event = row.original;

        if (event.local) {
          return <div>{event.local.name}</div>;
        }

        return <div>Local não encontrado</div>;
      },
    },
    {
      accessorKey: "eventTypeId",
      header: "Tipo",
      cell: ({ row }) => {
        const event = row.original;

        if (event.eventType) {
          return <div>{event.eventType.name}</div>;
        }

        return <div>Tipo não encontrado</div>;
      },
    },
    {
      accessorKey: "local.entries",
      header: "Portões cadastrados",
      cell: ({ row }) => {
        const event = row.original;

        if (event.local) {
          return <div>{event.local.entries}</div>;
        }

        return <div>Portões não encontrados</div>;
      },
    },
    {
      accessorKey: "date",
      header: "Data",
      cell: ({ row }) => {
        const event = row.original;

        return <div>{new Date(event.date).toLocaleDateString("pt-BR")}</div>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const event = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => console.log("Edit", event.id)}>
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  handleDelete(event.id);
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
