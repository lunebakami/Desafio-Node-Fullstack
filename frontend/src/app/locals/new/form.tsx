import { Button } from "@/components/ui/button";
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
import { getLocalTypes } from "@/lib/api/localTypes";
import { getStates } from "@/lib/api/states";
import { useEffect, useState } from "react";
import { createLocal } from "@/lib/api/local";
import { useToast } from "@/components/ui/use-toast";

type LocalType = {
  id: number;
  name: string;
};

type State = {
  id: number;
  nome: string;
  sigla: string;
};

export default function AddLocalForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const [localTypes, setLocalTypes] = useState<LocalType[]>([]);
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    getLocalTypes().then((response) => {
      setLocalTypes(response.data);
    });

    getStates().then((response) => {
      setStates(response.data);
    });
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { entries, turnstiles, ...data } = values;

    const entriesArray = entries.replaceAll(" ", "").split(",");
    const turnstilesArray = turnstiles.replaceAll(" ", "").split(",");

    const payload = {
      ...data,
      entries: entriesArray,
      turnstiles: turnstilesArray,
    };

    createLocal(payload)
      .then((res) => {
        if (res.status === 201) {
          form.reset();
          toast({
            variant: "success",
            title: "Sucesso",
            description: "Local adicionado com sucesso",
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
          description: "Ocorreu um erro ao adicionar um novo local",
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
                  <FormLabel>Nome do Local</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe o nome do local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apelido*</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe um apelido" {...field} />
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
              name="localTypeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selecione um tipo*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={`${field.value}`}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {localTypes.map((localType) => (
                        <SelectItem
                          key={localType.id}
                          value={`${localType.id}`}
                        >
                          {localType.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CNPJ*</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe o CNPJ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FormRow>

        <Separator />

        {/* Location */}
        <div>
          <FormLabel>Localização</FormLabel>
        </div>
        <FormRow>
          <div className="w-full">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade*</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe a Cidade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={`${field.value}`}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um estado" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state.id} value={`${state.id}`}>
                          {state.nome}
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
              name="cep"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP*</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe o CEP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço*</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe o Endereço" {...field} />
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
              name="complement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Complemento*</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe o complemento" {...field} />
                  </FormControl>
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

        {/* Entries and Turnstiles */}
        <div>
          <FormLabel>Cadastro de entradas e catracas</FormLabel>
        </div>
        <FormRow>
          <div className="w-full">
            <FormField
              control={form.control}
              name="entries"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cadastre as entradas*</FormLabel>
                  <FormControl>
                    <Input placeholder="A,B,C,D" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="turnstiles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cadastre as catracas*</FormLabel>
                  <FormControl>
                    <Input placeholder="1,2,3,4..." {...field} />
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
