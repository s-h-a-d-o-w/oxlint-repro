import { type FormEvent, useRef } from "react";

let bla = 'asdf' as unknown as FormEvent<HTMLFormElement>;
// oxlint-disable-next-line no-console
console.log(bla, useRef);
