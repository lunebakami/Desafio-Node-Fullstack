import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormRow from "./form-row";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z.string().nonempty(), // Name is required and must not be empty
  nickname: z.string().optional(), // Nickname is optional
  cnpj: z.string().length(14), // CNPJ must be 14 characters long
  city: z.string().nonempty(), // City is required and must not be empty
  state: z.string().length(2), // State must be 2 characters long
  cep: z.string().length(8), // CEP must be 8 characters long
  address: z.string().nonempty(), // Address is required and must not be empty
  complement: z.string().optional(), // Complement is optional
  email: z.string().email(), // Email must be a valid email address
  phone: z.string().optional(), // Phone is optional
  localTypeId: z.number().positive(), // Local type ID must be a positive number
  entries: z.array(z.string()), // Entries is an array of strings
  turnstiles: z.array(z.string()), // Turnstiles is an array of strings
});

export default function AddLocalForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      nickname: "",
      cnpj: "",
      city: "",
      state: "",
      cep: "",
      address: "",
      complement: "",
      email: "",
      phone: "",
      localTypeId: 0,
      entries: [],
      turnstiles: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                  <FormControl>
                    <Input placeholder="Selecione um tipo" {...field} />
                  </FormControl>
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
                  <FormLabel>CNPJ*</FormLabel>
                  <FormControl>
                    <Input placeholder="Selecione um estado" {...field} />
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
                    <Input placeholder="Insira as entradas" {...field} />
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
                    <Input placeholder="Insira as catracas" {...field} />
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
