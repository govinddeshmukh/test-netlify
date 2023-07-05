import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Summary() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="p-10 border w-full h-screen">
      <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Similique laborum id porro molestias ut eveniet
            quisquam odio, corrupti, enim, dolorem quidem aut culpa accusantium
            iusto cum? Vel amet, a maxime, dolore impedit itaque veniam atque
            nulla facere quae alias temporibus assumenda tenetur modi dolor nisi
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eos facilis omnis, et aut placeat fugit voluptatum aperiam quidem
            sunt temporibus perspiciatis, porro nemo? Voluptate, quasi provident
            voluptatem deserunt totam quam at rerum rem reprehenderit unde
            laudantium exercitationem ipsum sunt explicabo cupiditate ea beatae
            nulla?
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
          We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Similique laborum id porro molestias ut eveniet
            quisquam odio, corrupti, enim, dolorem quidem aut culpa accusantium
            iusto cum? Vel amet, a maxime, dolore impedit itaque veniam atque
            nulla facere quae alias temporibus assumenda tenetur modi dolor nisi
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eos facilis omnis, et aut placeat fugit voluptatum aperiam quidem
            sunt temporibus perspiciatis, porro nemo? Voluptate, quasi provident
            voluptatem deserunt totam quam at rerum rem reprehenderit unde
            laudantium exercitationem ipsum sunt explicabo cupiditate ea beatae
            nulla?
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
          We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Similique laborum id porro molestias ut eveniet
            quisquam odio, corrupti, enim, dolorem quidem aut culpa accusantium
            iusto cum? Vel amet, a maxime, dolore impedit itaque veniam atque
            nulla facere quae alias temporibus assumenda tenetur modi dolor nisi
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eos facilis omnis, et aut placeat fugit voluptatum aperiam quidem
            sunt temporibus perspiciatis, porro nemo? Voluptate, quasi provident
            voluptatem deserunt totam quam at rerum rem reprehenderit unde
            laudantium exercitationem ipsum sunt explicabo cupiditate ea beatae
            nulla?
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
