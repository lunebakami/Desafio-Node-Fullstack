"use client";

import { Title02 } from "@/components/title";
import { getColumns, Event } from "./columns";
import { deleteEvent } from "@/lib/api/events";
import { DataTable } from "@/components/data-table";
import { getEvents } from "@/lib/api/events";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Events() {
  const [data, setData] = useState<Event[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    getEvents({}).then((res) => setData(res.data));
  }, []);

  const handleDelete = (id: string) => {
    deleteEvent(id).then((res) => {
      if (res.status === 200) {
          toast({
            variant: "success",
            title: "Sucesso",
            description: "um evento foi deletado",
          });
        setData((data) => {
          return data.filter((local) => local.id !== id);
        })
      }
    }).catch((error) => {
      toast({
        variant: "error",
        title: "Erro",
        description: "Houve um erro ao deletar o evento",
      });
    });
  };

  const pagination = ({
    page,
    quantity,
  }: {
    page: number;
    quantity: number;
  }) => {
    getEvents({ page, quantity }).then((res) => setData(res.data));
  };

  return (
    <div>
      <div className="mb-7">
        <Title02>Eventos</Title02>
        <span>Confira a lista de todos os eventos cadastrados!</span>
      </div>
      <div className="px-6 pt-9 bg-surface">
        <div className="w-full flex justify-between mb-6">
          <span> Search Input </span>
          <Button
            variant="outline"
            className="bg-on-support-blue text-secondary-foreground"
          >
            <Link href="/events/new">Adicionar Evento</Link>
          </Button>
        </div>
        <DataTable pagination={pagination} columns={getColumns(handleDelete)} data={data} />
      </div>
    </div>
  );
}
