// Images

import Monet from "../images/monet.jpg";
const Artists = ["Renoir", "Monet", "Degas", "Mondrian"];

const Questions = [
  {
    impressionism: {
      title: "Impressionism",
      questions: {
        image: Monet,
        options: [
          {
            name: "Monet",
            right: false,
          },
          {
            name: "Monet",
            right: true,
          },
          {
            name: "Monet",
            right: false,
          },
          {
            name: "Monet",
            right: false,
          },
        ],
      },
    },
  },
];

export { Questions, Artists };
