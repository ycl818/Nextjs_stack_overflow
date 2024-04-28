import * as z from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(3).max(130),
  explaination: z.string().min(10),
  tags: z.array(z.string().min(1).max(25)).min(1).max(3),
});
