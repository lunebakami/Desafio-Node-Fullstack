import { z } from "zod";

export const formSchema = z.object({
  name: z.string().nonempty(), // Name is required and must not be empty
  nickname: z.string(), // Nickname is optional
  cnpj: z.string().length(14), // CNPJ must be 14 characters long
  city: z.string().nonempty(), // City is required and must not be empty
  state: z.string().length(2), // State must be 2 characters long
  cep: z.string().length(8), // CEP must be 8 characters long
  address: z.string().nonempty(), // Address is required and must not be empty
  complement: z.string().optional(), // Complement is optional
  email: z.string().email(), // Email must be a valid email address
  phone: z.string(), // Phone is optional
  localTypeId: z.preprocess((val) => {
    if (typeof val === "string") {
      return parseInt(val)
    }

    return val;
  }, z.number().positive()), // LocalTypeId must be a positive number
  entries: z.string(), // Entries is an array of strings
  turnstiles: z.string(), // Turnstiles is an array of strings

  // entries: z.array(z.string()), // Entries is an array of strings
  // turnstiles: z.array(z.string()), // Turnstiles is an array of strings
});

export const defaultValues = {
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
  entries: "",
  turnstiles: "",
};
