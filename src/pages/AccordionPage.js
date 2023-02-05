import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "randomString1051",
      label: "Using React",
      content: "So nice to use React",
    },
    {
      id: "randomString1052",
      label: "Using javascript",
      content: "Javascript is great",
    },
    {
      id: "randomString1053",
      label: "Using CSS",
      content: "CSS looking so nice !",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
