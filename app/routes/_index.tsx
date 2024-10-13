import { Flex, Heading } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "remix-dev-tools" },
    {
      name: "description",
      content: "playing with remix devtools",
    },
  ];
};

export default function Index() {
  return (
    <Flex
      align="center"
      justify="center"
      className="font-sans bg-neutral-950 text-zinc-100 flex w-full h-screen"
    >
      <Heading size="9">Blueprint</Heading>
    </Flex>
  );
}
