export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/thyago608.png",
      name: "Thyago Ribeiro",
      role: "Developer Frontend",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return.",
      },
      {
        type: "link",
        content: "thyago.developer/doctor",
      },
    ],
    publishedAt: new Date("2022-10-24 15:27:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/thyago608.png",
      name: "Rafael Ribeiro",
      role: "Developer Frontend",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return.",
      },
      {
        type: "link",
        content: "rafa.developer/doctor",
      },
    ],
    publishedAt: new Date("2022-10-24 15:00:00"),
  },
];
