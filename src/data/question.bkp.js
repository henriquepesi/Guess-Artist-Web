// Images

import Monet from "../images/monet.jpg";
import Degas from "../images/degas.jpg";
import Cassatt from "../images/cassatt.jpg";

const Artists = ["Renoir", "Monet", "Degas", "Mondrian"];

const Questions = [
  {
    impressionism: {
      title: "Impressionism",
      // INICIO QUESTOES
      questions: [
        {
          image: Monet,
          options: [
            {
              name: "Monet 1",
              right: false,
            },
            {
              name: "Monet 2",
              right: true,
            },
            {
              name: "Monet 3",
              right: false,
            },
            {
              name: "Monet 4",
              right: false,
            },
          ],
        },
        {
          image: Degas,
          options: [
            {
              name: "Edgard Degas 1",
              right: false,
            },
            {
              name: "Edgard Degas 2",
              right: true,
            },
            {
              name: "Edgard Degas 3",
              right: false,
            },
            {
              name: "Edgard Degas 4",
              right: false,
            },
          ],
        },
        {
          image: Cassatt,
          options: [
            {
              name: "Mary Cassatt",
              right: false,
            },
            {
              name: "Mary Cassatt",
              right: true,
            },
            {
              name: "Mary Cassatt",
              right: false,
            },
            {
              name: "Mary Cassatt",
              right: false,
            },
          ],
        },
        {
          image: Degas,
          options: [
            {
              name: "Edgard Degas 1",
              right: false,
            },
            {
              name: "Edgard Degas 2",
              right: true,
            },
            {
              name: "Edgard Degas 3",
              right: false,
            },
            {
              name: "Edgard Degas 4",
              right: false,
            },
          ],
        },
      ],
      // FIM QUESTOES
    },
  },
];

export { Questions, Artists };
