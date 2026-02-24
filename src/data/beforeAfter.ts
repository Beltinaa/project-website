export type BeforeAfterPair = {
  before: string;
  after: string;
  caption: string;
  mirrorBefore?: boolean;
};

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    before: "/images/rendering01.webp",
    after: "/images/rendering06.webp",
    caption: "Full exterior silicone render — Barking, East London",
  },
  {
    before: "/images/rendering02.webp",
    after: "/images/rendering07.webp",
    caption: "K Rend façade upgrade — Luton, Bedfordshire",
    mirrorBefore: true,
  },
];
