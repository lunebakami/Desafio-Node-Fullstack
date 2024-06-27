import { z } from "zod";

export const formSchema = z.object({
  name: z.string().nonempty(), // Name is required and must not be empty
  date: z.date(), // Validate date in ISO 8601 format
  hour: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/), // Validate hour in HH:mm format
  localId: z.string().uuid(), // Assume localId is a UUID
  eventTypeId: z.preprocess((val) => {
    if (typeof val === "string") {
      return parseInt(val)
    }

    return val;
  }, z.number().positive()), // LocalTypeId must be a positive number
  email: z.string().email(), // Email must be a valid email address
  phone: z.string(), // Phone is optional
});

export const defaultValues = {
  name: "",
  hour: "",
  localId: "",
  eventTypeId: 0,
  email: "",
  phone: "",
};
