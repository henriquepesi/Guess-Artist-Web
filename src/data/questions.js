// Icons

import PopArt from "../images/icons/pop-art.svg";
import Surrealism from "../images/icons/surrealism.svg";
import Cubism from "../images/icons/cubism.svg";
import Impressionism from "../images/icons/impressionism.svg";

// Impressionism

import AlfredSisley from "../images/alfred-sisley.jpg";
import BertheMorisot from "../images/berthe-morisot.jpg";
import BertheMorisot2 from "../images/berthe-morisot-2.jpg";
import EdgardDegas from "../images/edgard-degas.jpg";
import EdgardDegas2 from "../images/edgard-degas-2.jpg";
import EdouardManet from "../images/edouard-manet.jpg";
import EdouardManet2 from "../images/edouard-manet-2.jpg";
import FredericBazille from "../images/frederic-bazille.jpg";
import Monet from "../images/monet.jpg";
import PaulSezanne from "../images/paul-sezanne.jpg";
import ToulouseLautrec from "../images/toulouse-lautrec.jpg";
import ToulouseLautrec2 from "../images/toulouse-lautrec-2.jpg";
import VanGogh from "../images/van-gogh.jpg";
import VanGogh2 from "../images/van-gogh-2.jpg";

// Surrealism
import FridaKahlo from "../images/frida-kahlo.jpg";
import JoanMiro from "../images/joan-miro.jpg";
import JoanMiro2 from "../images/joan-miro-2.jpg";
import MaxErnst from "../images/max-ernst.jpg";
import PaulDelvaux from "../images/paul-delvaux.jpg";

import PaulDelvaux2 from "../images/paul-delvaux-2.jpg";
import RemediosVaro from "../images/remedios-varo.jpg";
import RemediosVaro2 from "../images/remedios-varo-2.jpg";
import ReneMagritte from "../images/rene-magritte.jpg";
import SalvadorDali from "../images/salvador-dali.jpg";

// Salvador Dalí
// René Magritte
// Frida Kahlo
// Joan Miró
// Max Ernst
// Paul Delvaux
// Remedios Varo
// Leonor Fini
// Alberto Giacometti
// Vito Campanella

const Questions = {
  impressionism: {
    title: "Impressionism",
    questions: [
      {
        image: AlfredSisley,
        options: [
          {
            name: "Vincent van Gogh",
            right: false,
          },
          {
            name: "Alfred Sisley",
            right: true,
          },
          {
            name: "Edouard Manet",
            right: false,
          },
          {
            name: "Paul Cézanne",
            right: false,
          },
        ],
      },
      {
        image: BertheMorisot,
        options: [
          {
            name: "Berthe Morisot",
            right: true,
          },
          {
            name: "Claude Monet",
            right: true,
          },
          {
            name: "rédéric Bazille",
            right: false,
          },
          {
            name: "Edouard Manet",
            right: false,
          },
        ],
      },
      {
        image: BertheMorisot2,
        options: [
          {
            name: "Paul Cézanne",
            right: false,
          },
          {
            name: "Frédéric Bazille",
            right: false,
          },
          {
            name: "Berthe Morisot",
            right: true,
          },
          {
            name: "Toulouse Lautrec",
            right: false,
          },
        ],
      },
      {
        image: EdgardDegas,
        options: [
          {
            name: "Eva Gonzalès",
            right: false,
          },
          {
            name: "Frédéric Bazille",
            right: false,
          },
          {
            name: "Alfred Sisley",
            right: false,
          },
          {
            name: "Edgar Degas",
            right: true,
          },
        ],
      },
      {
        image: EdgardDegas2,
        options: [
          {
            name: "Auguste Renoir",
            right: false,
          },
          {
            name: "Edgar Degas",
            right: true,
          },
          {
            name: "EAuguste Renoir",
            right: false,
          },
          {
            name: "Claude Monet",
            right: false,
          },
        ],
      },
      {
        image: EdouardManet,
        options: [
          {
            name: "Lilla Cabot Perry",
            right: false,
          },
          {
            name: "Claude Monet",
            right: false,
          },
          {
            name: "Vincent van Gogh",
            right: false,
          },
          {
            name: "Edouard Manet",
            right: true,
          },
        ],
      },
      {
        image: EdouardManet2,
        options: [
          {
            name: "Vincent van Gogh",
            right: false,
          },
          {
            name: "Edouard Manet",
            right: true,
          },
          {
            name: "Mary Cassatt",
            right: false,
          },
          {
            name: "Paul Cézanne",
            right: false,
          },
        ],
      },
      {
        image: FredericBazille,
        options: [
          {
            name: "Frédéric Bazille",
            right: true,
          },
          {
            name: "Claude Monet",
            right: false,
          },
          {
            name: "Lilla Cabot Perry",
            right: false,
          },
          {
            name: "Toulouse Lautrec",
            right: false,
          },
        ],
      },
      {
        image: Monet,
        options: [
          {
            name: "Paul Cézanne",
            right: false,
          },
          {
            name: "Vincent van Gogh",
            right: false,
          },
          {
            name: "Edouard Manet",
            right: true,
          },
          {
            name: "Camille Pissarro",
            right: false,
          },
        ],
      },
      {
        image: PaulSezanne,
        options: [
          {
            name: "Frédéric Bazille",
            right: false,
          },
          {
            name: "Auguste Renoir",
            right: false,
          },
          {
            name: "Camille Pissarro",
            right: false,
          },
          {
            name: "EPaul Cézanne",
            right: true,
          },
        ],
      },
      {
        image: ToulouseLautrec,
        options: [
          {
            name: "Toulouse Lautrec",
            right: true,
          },
          {
            name: "Lilla Cabot Perry",
            right: false,
          },
          {
            name: "Auguste Renoir",
            right: false,
          },
          {
            name: "Edgar Degas",
            right: false,
          },
        ],
      },
      {
        image: ToulouseLautrec2,
        options: [
          {
            name: "Lilla Cabot Perry",
            right: false,
          },
          {
            name: "Alfred Sisley",
            right: false,
          },
          {
            name: "Toulouse Lautrec",
            right: true,
          },
          {
            name: "Edouard Manet",
            right: false,
          },
        ],
      },
      {
        image: VanGogh,
        options: [
          {
            name: "Vincent van Gogh",
            right: true,
          },
          {
            name: "Camille Pissarro",
            right: false,
          },
          {
            name: "Auguste Renoir",
            right: false,
          },
          {
            name: "Frédéric Bazille",
            right: false,
          },
        ],
      },
      {
        image: VanGogh2,
        options: [
          {
            name: "Paul Cézanne",
            right: false,
          },
          {
            name: "Vincent van Gogh",
            right: true,
          },
          {
            name: "Berthe Morisot",
            right: false,
          },
          {
            name: "Frédéric Bazille",
            right: false,
          },
        ],
      },
    ],
  },
  surrealism: {
    title: "Surrealism",
    questions: [
      {
        image: FridaKahlo,
        options: [
          {
            name: "Frida Kahlo",
            right: true,
          },
          {
            name: "Vito Campanella",
            right: false,
          },
          {
            name: "Paul Delvaux",
            right: false,
          },
          {
            name: "Max Ernst",
            right: false,
          },
        ],
      },
      {
        image: JoanMiro,
        options: [
          {
            name: "Joan Miró",
            right: true,
          },
          {
            name: "Salvador Dalí",
            right: false,
          },
          {
            name: "Remedios Varo",
            right: false,
          },
          {
            name: "Vito Campanella",
            right: false,
          },
        ],
      },
      {
        image: JoanMiro2,
        options: [
          {
            name: "Mary Cassatt",
            right: false,
          },
          {
            name: "Joan Miró",
            right: true,
          },
          {
            name: "René Magritte",
            right: false,
          },
          {
            name: "Leonor Fini",
            right: false,
          },
        ],
      },
      {
        image: MaxErnst,
        options: [
          {
            name: "Salvador Dalí",
            right: false,
          },
          {
            name: "Max Ernst",
            right: true,
          },
          {
            name: "René Magritte",
            right: false,
          },
          {
            name: "Vito Campanella",
            right: false,
          },
        ],
      },
      {
        image: PaulDelvaux,
        options: [
          {
            name: "Joan Miró",
            right: false,
          },
          {
            name: "Max Ernst",
            right: false,
          },
          {
            name: "Vito Campanella",
            right: false,
          },
          {
            name: "Paul Delvaux",
            right: true,
          },
        ],
      },
      {
        image: PaulDelvaux2,
        options: [
          {
            name: "Paul Delvaux",
            right: true,
          },
          {
            name: "Max Ernst",
            right: false,
          },
          {
            name: "Frida Kahlo",
            right: false,
          },
          {
            name: "Salvador Dalí",
            right: false,
          },
        ],
      },
      {
        image: RemediosVaro,
        options: [
          {
            name: "Remedios Varo",
            right: true,
          },
          {
            name: "Vito Campanella",
            right: false,
          },
          {
            name: "Max Ernst",
            right: false,
          },
          {
            name: "Paul Delvaux",
            right: false,
          },
        ],
      },
      {
        image: RemediosVaro2,
        options: [
          {
            name: "Max Ernst",
            right: false,
          },
          {
            name: "Joan Miró",
            right: false,
          },
          {
            name: "Remedios Varo",
            right: true,
          },
          {
            name: "Paul Delvaux",
            right: false,
          },
        ],
      },
      {
        image: ReneMagritte,
        options: [
          {
            name: "René Magritte",
            right: true,
          },
          {
            name: "Remedios Varo",
            right: false,
          },
          {
            name: "Alberto Giacometti",
            right: false,
          },
          {
            name: "Leonor Fini",
            right: false,
          },
        ],
      },
      {
        image: SalvadorDali,
        options: [
          {
            name: "Joan Miró",
            right: false,
          },
          {
            name: "Salvador Dalí",
            right: true,
          },
          {
            name: "Vito Campanella",
            right: false,
          },
          {
            name: "Remedios Varo",
            right: false,
          },
        ],
      },
    ],
  },
};

const Themes = [
  {
    slug: "impressionism",
    title: "impressionism",
    img: Impressionism,
  },
  {
    slug: "cubism",
    title: "cubism",
    img: Cubism,
  },
  {
    slug: "pop-art",
    title: "Pop Art",
    img: PopArt,
  },
  {
    slug: "surrealism",
    title: "Surrealism",
    img: Surrealism,
  },
];

export { Questions, Themes };
