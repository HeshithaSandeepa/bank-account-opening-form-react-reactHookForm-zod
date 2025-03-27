import { z } from "zod";

// Function to check if user is 18 or older
const isAdult = (dateString: string) => {
  const birthDate = new Date(dateString);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  return age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));
};

// Export the schema
export const dateSchema = z.object({
  date_0f_birth: z
    .string()
    .refine(isAdult, { message: "You must be at least 18 years old." })
});
