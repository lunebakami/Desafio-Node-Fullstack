import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import Welcome from "@/components/welcome";
import { Title02 } from "@/components/title";

import { MdFestival, MdLocalActivity } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
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
            <span className="text-base font-normal">Ver todos</span>
          </div>
          <Table className="striped mt-6">
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex-col w-full justify-between px-6 py-8 bg-surface text-surface-foreground rounded-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-normal">Últimos locais adicionados</h2>
            <span className="text-base font-normal">Ver todos</span>
          </div>
          <Table className="striped mt-6">
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
