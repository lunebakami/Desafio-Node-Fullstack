import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormRow from "./form-row";
import { Separator } from "@/components/ui/separator";
import { formSchema, defaultValues } from "./form-schemas";
import { getEventTypes } from "@/lib/api/eventTypes";
import { useEffect, useState } from "react";
import { getAllLocals } from "@/lib/api/local";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { createEvent } from "@/lib/api/events";
import { useToast } from "@/components/ui/use-toast";

type EventType = {
  id: number;
  name: string;
};

type Local = {
  id: string;
  name: string;
};

export default function AddEventForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [locals, setLocals] = useState<Local[]>([]);

  useEffect(() => {
    getEventTypes().then((response) => {
      setEventTypes(response.data);
    });

    getAllLocals().then((response) => {
      setLocals(response.data);
    });
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { date, hour, ...data } = values;
    const hourNumber = parseInt(hour.split(":")[0]); // Parse the hour as an integer
    const minutes = parseInt(hour.split(":")[1]); // Extract and parse the minutes

    // Create a new date object with the combined date and time
    const datetime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hourNumber,
      minutes,
    );

    // Format the datetime as a string
    const datetimeString = datetime.toISOString(); // Use toLocaleString() for a localized format

    const payload = {
      ...data,
      date: datetimeString,
    };

    createEvent(payload)
      .then((res) => {
        if (res.status === 201) {
          form.reset();
          toast({
            variant: "success",
            title: "Sucesso",
            description: "um novo evento foi adicionado",
          });
        }
      })
      .catch((error) => {
        if (error?.response?.status === 400 && error.response.data?.message) {
          return toast({
            variant: "error",
            title: "Erro",
            description: error.response.data.message,
          });
        }

        toast({
          variant: "error",
          title: "Erro",
          description: "Ocorreu um erro ao adicionar um novo evento",
        });
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        {/* Basic Info */}
        <div>
          <FormLabel>Informações Básicas</FormLabel>
        </div>
        <FormRow>
          <div className="w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Evento</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe o nome do evento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="eventTypeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selecione um tipo*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={`${field.value}`}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {eventTypes.map((eventType) => (
                        <SelectItem
                          key={eventType.id}
                          value={`${eventType.id}`}
                        >
                          {eventType.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormRow>

        <FormRow>
          <div className="w-full">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data do Evento*</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="hour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horario do Evento*</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe a hora" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormRow>

        <FormRow>
          <div className="w-full">
            <FormField
              control={form.control}
              name="localId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selecione um local*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={`${field.value}`}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um local" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {locals.map((local) => (
                        <SelectItem key={local.id} value={`${local.id}`}>
                          {local.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormRow>

        <Separator />

        {/*  Contact */}
        <div>
          <FormLabel>Contato</FormLabel>
        </div>
        <FormRow>
          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail*</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe um e-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone*</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe um telefone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormRow>

        <Separator />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
