import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Title02 } from "@/components/title";
import Welcome from "@/components/welcome";

import { MdFestival, MdLocalActivity } from "react-icons/md";

import Link from "next/link";
import { getLocals } from "@/lib/api/local";
import { getEvents } from "@/lib/api/events";
import { Local } from "./locals/columns";
import { Event } from "./events/columns";
import { format } from "date-fns";

export default async function Home() {
  const { data: locals } = await getLocals({ page: 1, quantity: 3 });
  const { data: events } = await getEvents({ page: 1, quantity: 3 });

  return (
    <div className="mx-24 bg-cover bg-no-repeat bg-fixed bg-opacity-20">
      <Welcome />
      <div className="flex justify-between gap-6">
        <Card className="bg-success-support text-success-support-foreground p-6 min-h-24 w-full">
          <CardContent className="p-0 flex items-center justify-between">
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <MdFestival className="w-5 h-5 m-1" />
                <Title02>Locais</Title02>
              </div>
              <span className="text-base font-normal">
                Confira todos os locais cadastrados!
              </span>
            </div>
            <div>
              <Button
                variant="outline"
                className="bg-on-support-blue text-secondary-foreground"
              >
                <Link href="/locals">Conferir Locais</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 min-h-24 w-full bg-error-support text-error-support-foreground">
          <CardContent className="p-0 flex items-center justify-between">
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <MdLocalActivity className="w-5 h-5 m-1" />
                <Title02>Eventos</Title02>
              </div>
              <span className="text-base font-normal">
                Confira todos os eventos cadastrados!
              </span>
            </div>
            <div>
              <Button
                variant="outline"
                className="bg-on-support-blue text-secondary-foreground"
              >
                <Link href="/events">Conferir Eventos</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-6 mt-8 mb-14">
        <div className="flex-col w-full justify-between px-6 py-8 bg-surface text-surface-foreground rounded-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-normal">Últimos locais adicionados</h2>
            <span className="text-base font-normal">
              <Link href="/locals">
                <Button variant="outline">Ver todos</Button>
              </Link>
            </span>
          </div>
          <Table className="striped mt-6">
            <TableBody>
              {locals.map((local: Local) => (
                <TableRow key={local.id}>
                  <TableCell className="font-medium">{local.name}</TableCell>
                  <TableCell>{local.address}</TableCell>
                  <TableCell>{local.city}</TableCell>
                  <TableCell className="text-right">{local.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex-col w-full justify-between px-6 py-8 bg-surface text-surface-foreground rounded-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-normal">Últimos locais adicionados</h2>
            <span className="text-base font-normal">
              <Link href="/events">
                <Button variant="outline">Ver todos</Button>
              </Link>
            </span>
          </div>
          <Table className="striped mt-6">
            <TableBody>
              {events.map((event: Event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell>{format(event.date, "dd/MM/yy")}</TableCell>
                  <TableCell className="text-right">
                    {event.local?.name || "Local não definido"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
