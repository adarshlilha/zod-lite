import { z } from "zod";

const User = z.object({
    username: z.string(),
});

User.parse({ username: "Ludwig" });

type User1 = z.infer<typeof User>;

// ZOD Lite
type ZodType = ZodUnknown | ZodString | ZodNumber

interface ZodUnknown {type: 'unknown'}
interface ZodString {type: 'string'}
interface ZodNumber {type: 'number'}

type Infer<T extends ZodType> = T extends ZodUnknown ?
    unknown
    : T extends ZodString
    ? string
    : T extends ZodNumber
    ? number
    : 'Invalid type'

type result1 = Infer<ZodUnknown>
type result2 = Infer<ZodString>
type result3 = Infer<ZodNumber>
