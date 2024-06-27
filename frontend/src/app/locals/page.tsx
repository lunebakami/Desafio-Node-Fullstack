"use client";

import { Title02 } from "@/components/title";
import { columns, Local } from "./columns";
import { DataTable } from "@/components/data-table";
import { getLocals } from "../../lib/api/local";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Locals() {
  const [data, setData] = useState<Local[]>([]);

  useEffect(() => {
    getLocals({}).then((res) => setData(res.data));
  }, []);

  const pagination = ({
    page,
    quantity,
  }: {
    page: number;
    quantity: number;
  }) => {
    getLocals({ page, quantity }).then((res) => setData(res.data));
  };

  return (
    <div>
      <div className="mb-7">
        <Title02>Locais</Title02>
        <span>Confira a lista de todos os locais cadastrados!</span>
      </div>
      <div className="px-6 pt-9 bg-surface">
        <div className="w-full flex justify-between mb-6">
          <span> Search Input </span>
          <Button
            variant="outline"
            className="bg-on-support-blue text-secondary-foreground"
          >
            <Link href="/locals/new">Adicionar Local</Link>
          </Button>
        </div>
        <DataTable pagination={pagination} columns={columns} data={data} />
      </div>
    </div>
  );
}
