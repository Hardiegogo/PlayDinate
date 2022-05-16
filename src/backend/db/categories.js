import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "eSports",
    description:
      "Get to know all about the ongoing eSports tournaments around the world",
  },
  {
    _id: uuid(),
    categoryName: "entertainment",
    description:
      "Want to enjoy watching others play? This section is for you",
  },
  {
    _id: uuid(),
    categoryName: "tutorials",
    description:
      "Improve your gaming skills by watching videos in this section and grinding.",
  },
];
