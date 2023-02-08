const SHOP_DATA = [
  {
    title: "Kits",
    items: [
      {
        id: 1,
        name: "FCB Away",
        imageUrl: "https://i.ibb.co/hgZPQR2/fcb-away.webp",
        price: 25,
      },
      {
        id: 2,
        name: "AJAX Away",
        imageUrl: "https://i.ibb.co/ypypK3d/aj-away.webp",
        price: 18,
      },
      {
        id: 3,
        name: "FCB Home",
        imageUrl: "https://i.ibb.co/gdYkTr8/fcb-home.webp",
        price: 35,
      },
      {
        id: 4,
        name: "MUFC Away",
        imageUrl: "https://i.ibb.co/CP8cVLD/mu-away.webp",
        price: 25,
      },
      {
        id: 5,
        name: "MUFC Home",
        imageUrl: "https://i.ibb.co/fQDZKJY/mu-home.webp",
        price: 18,
      },
      {
        id: 6,
        name: "PSG Home",
        imageUrl: "https://i.ibb.co/XbtDdHK/psg-home.webp",
        price: 14,
      },
      {
        id: 7,
        name: "RMA Away",
        imageUrl: "https://i.ibb.co/kXN9j65/rma-away.webp",
        price: 18,
      },
      {
        id: 8,
        name: "RMA Home",
        imageUrl: "https://i.ibb.co/KVXqwGX/rma-home.webp",
        price: 14,
      },
      {
        id: 9,
        name: "Spurs Away",
        imageUrl: "https://i.ibb.co/g4Lx23j/spurs-away.webp",
        price: 16,
      },
    ],
  },
  {
    title: "Shoes",
    items: [
      {
        id: 10,
        name: "Adidas Ghosted",
        imageUrl: "https://i.ibb.co/98Jy5p1/adidas-ghost.webp",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Gold",
        imageUrl: "https://i.ibb.co/23MGCyr/adidas-gold.webp",
        price: 280,
      },
      {
        id: 12,
        name: "Adidas Predator",
        imageUrl: "https://i.ibb.co/RDRBw50/adidas-pred.webp",
        price: 110,
      },
      {
        id: 13,
        name: "Nike Mercurial",
        imageUrl: "https://i.ibb.co/ZWf194c/nike-mercurial9.webp",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Phantom",
        imageUrl: "https://i.ibb.co/y58VbsR/nike-phantom.webp",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Vapor",
        imageUrl: "https://i.ibb.co/yNWvPGR/nike-vapor.webp",
        price: 160,
      },
      {
        id: 16,
        name: "Nike Zoom",
        imageUrl: "https://i.ibb.co/mXxdDjM/nike-zoom.webp",
        price: 190,
      },
      {
        id: 17,
        name: "Puma",
        imageUrl: "https://i.ibb.co/7ncLrJp/puma-youth.webp",
        price: 200,
      },
    ],
  },
  {
    title: "Ball",
    items: [
      {
        id: 18,
        name: "FIFA Qatar",
        imageUrl: "https://i.ibb.co/C0k4Hzy/fifa-qatar.webp",
        price: 125,
      },
      {
        id: 19,
        name: "Nike PL",
        imageUrl: "https://i.ibb.co/DkH7GY9/nike-pl.webp",
        price: 90,
      },
      {
        id: 20,
        name: "Nie Training",
        imageUrl: "https://i.ibb.co/nD8R5QJ/nike-train.webp",
        price: 90,
      },
      {
        id: 21,
        name: "UEFA Berlin",
        imageUrl: "https://i.ibb.co/fNDNpSR/uefa-berlin.webp",
        price: 165,
      },
      {
        id: 22,
        name: "UEFA Final",
        imageUrl: "https://i.ibb.co/whXWk5C/uefa-final.webp",
        price: 185,
      },
    ],
  },
  {
    title: "Accessories",
    items: [
      {
        id: 23,
        name: "Glove",
        imageUrl: "https://i.ibb.co/jvb02sJ/glove.jpg",
        price: 25,
      },
      {
        id: 24,
        name: "Handpump",
        imageUrl: "https://i.ibb.co/rsqzMWd/pump.webp",
        price: 20,
      },
      {
        id: 25,
        name: "Bottle",
        imageUrl: "https://i.ibb.co/T4D1SM4/bottle.webp",
        price: 80,
      },
      {
        id: 26,
        name: "Bag",
        imageUrl: "https://i.ibb.co/Mh8Jfm6/bag.webp",
        price: 80,
      },
      {
        id: 27,
        name: "Shin Guard",
        imageUrl: "https://i.ibb.co/ssnTT08/shin.jpg",
        price: 45,
      },
      {
        id: 28,
        name: "Sling Bag",
        imageUrl: "https://i.ibb.co/Hdz6TWH/sling.webp",
        price: 135,
      },
      {
        id: 29,
        name: "Athletic Socks",
        imageUrl: "https://i.ibb.co/yV6jSbR/stockings.webp",
        price: 20,
      },
    ],
  },
  {
    title: "Training",
    items: [
      {
        id: 30,
        name: "Agility Ladder",
        imageUrl: "https://i.ibb.co/f851vjM/agility-ladder.webp",
        price: 325,
      },
      {
        id: 31,
        name: "Agility Handle",
        imageUrl: "https://i.ibb.co/B2d4QfT/agility-handle.jpg",
        price: 20,
      },
      {
        id: 32,
        name: "Agility Ring",
        imageUrl: "https://i.ibb.co/MhRSMZH/agility-ring.jpg",
        price: 25,
      },
      {
        id: 33,
        name: "Training Bib",
        imageUrl: "https://i.ibb.co/6R8HDC2/bib.jpg",
        price: 25,
      },
      {
        id: 34,
        name: "Cone",
        imageUrl: "https://i.ibb.co/wQb2nVW/cone.jpg",
        price: 40,
      },
      {
        id: 35,
        name: "Slalom Pole",
        imageUrl: "https://i.ibb.co/zPJwr7H/slalom-pole.webp",
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
