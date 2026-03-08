import { type FormEvent } from "react";

let bla = 'asdf' as unknown as FormEvent<HTMLFormElement>;
// oxlint-disable-next-line no-console
console.log(bla);
