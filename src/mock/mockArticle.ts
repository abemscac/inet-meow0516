export type Article = {
  id: number;
  category: ArticleCategory;
  author: Author;
  coverImageUrl: string;
  title: string;
  body: string;
  views: number;
  likes: null | number;
  likeId: null | number;
  createdAt: Date;
  lastModifiedAt: null | Date;
};
export type ArticleCategory = {
  code: string;
  imageUrl: string;
};
export type Author = {
  id: number;
  username: string;
  name: string;
  avatarUrl: string;
  createdAt: Date;
};

export const mockArticles: Array<Article> = [
  {
    id: 1,
    category: {
      code: 'animal',
      imageUrl: 'https://i.imgur.com/JR2xyV6s.jpg',
    },
    author: {
      id: 1,
      username: 'user0',
      name: '人類一號',
      avatarUrl: 'https://i.imgur.com/1yJEtrqs.jpeg',
      createdAt: new Date('2022-06-27T06:32:36.929Z'),
    },
    coverImageUrl: 'https://i.imgur.com/bqgW6JXh.jpeg',
    title:
      'Hello worlddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    views: 123,
    likes: 45,
    likeId: 1,
    createdAt: new Date('2022-06-27T06:32:38.231Z'),
    lastModifiedAt: null,
  },
  {
    id: 2,
    category: {
      code: 'sports',
      imageUrl: 'https://i.imgur.com/s4PDhtLs.jpg',
    },
    author: {
      id: 1,
      username: 'user0',
      name: '人類123456789754132154851321354879855111132135468876542312135484687號',
      avatarUrl: 'https://i.imgur.com/1yJEtrqs.jpeg',
      createdAt: new Date('2022-06-27T06:32:36.929Z'),
    },
    coverImageUrl: 'https://i.imgur.com/bqgW6JXh.jpeg',
    title: 'Hello world 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    views: 12,
    likes: 3,
    likeId: null,
    createdAt: new Date('2022-06-27T06:32:38.231Z'),
    lastModifiedAt: new Date('2022-06-27T06:32:38.231Z'),
  },
  {
    id: 3,
    category: {
      code: 'sports',
      imageUrl: 'https://i.imgur.com/s4PDhtLs.jpg',
    },
    author: {
      id: 1,
      username: 'user0',
      name: '人類一號',
      avatarUrl: 'https://i.imgur.com/1yJEtrqs.jpeg',
      createdAt: new Date('2022-06-27T06:32:36.929Z'),
    },
    coverImageUrl: 'https://i.imgur.com/bqgW6JXh.jpeg',
    title: 'Hello world 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    views: 12,
    likes: 3,
    likeId: null,
    createdAt: new Date('2022-06-27T06:32:38.231Z'),
    lastModifiedAt: new Date('2022-06-27T06:32:38.231Z'),
  },
  {
    id: 4,
    category: {
      code: 'sports',
      imageUrl: 'https://i.imgur.com/s4PDhtLs.jpg',
    },
    author: {
      id: 1,
      username: 'user0',
      name: '人類一號',
      avatarUrl: 'https://i.imgur.com/1yJEtrqs.jpeg',
      createdAt: new Date('2022-06-27T06:32:36.929Z'),
    },
    coverImageUrl: 'https://i.imgur.com/bqgW6JXh.jpeg',
    title: 'Hello world 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    views: 12,
    likes: 3,
    likeId: null,
    createdAt: new Date('2022-06-27T06:32:38.231Z'),
    lastModifiedAt: new Date('2022-06-27T06:32:38.231Z'),
  },
  {
    id: 5,
    category: {
      code: 'sports',
      imageUrl: 'https://i.imgur.com/s4PDhtLs.jpg',
    },
    author: {
      id: 1,
      username: 'user0',
      name: '人類一號',
      avatarUrl: 'https://i.imgur.com/1yJEtrqs.jpeg',
      createdAt: new Date('2022-06-27T06:32:36.929Z'),
    },
    coverImageUrl:
      'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    title: 'Hello world 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    views: 12,
    likes: 3,
    likeId: null,
    createdAt: new Date('2022-06-27T06:32:38.231Z'),
    lastModifiedAt: new Date('2022-06-27T06:32:38.231Z'),
  },

  {
    id: 6,
    category: {
      code: 'sports',
      imageUrl: 'https://i.imgur.com/s4PDhtLs.jpg',
    },
    author: {
      id: 1,
      username: 'user0',
      name: '人類一號',
      avatarUrl: 'https://i.imgur.com/1yJEtrqs.jpeg',
      createdAt: new Date('2022-06-27T06:32:36.929Z'),
    },
    coverImageUrl:
      'https://images.pexels.com/photos/12921134/pexels-photo-12921134.jpeg',
    title: 'Hello world 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    views: 12,
    likes: 3,
    likeId: null,
    createdAt: new Date('2022-06-27T06:32:38.231Z'),
    lastModifiedAt: new Date('2022-06-27T06:32:38.231Z'),
  },
  {
    id: 7,
    category: {
      code: 'sports',
      imageUrl: 'https://i.imgur.com/s4PDhtLs.jpg',
    },
    author: {
      id: 1,
      username: 'user0',
      name: '人類一號',
      avatarUrl: 'https://i.imgur.com/1yJEtrqs.jpeg',
      createdAt: new Date('2022-06-27T06:32:36.929Z'),
    },
    coverImageUrl:
      'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
    title: 'Hello world 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    views: 12,
    likes: 3,
    likeId: null,
    createdAt: new Date('2022-06-27T06:32:38.231Z'),
    lastModifiedAt: new Date('2022-06-27T06:32:38.231Z'),
  },
];
