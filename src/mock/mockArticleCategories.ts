interface IArticleCategory {
  code: string;
  imageUrl: string;
}

/**
 * TODO: Get rid of this by using i18n.
 */
interface IArticleCategoryWithLabel extends IArticleCategory {
  label: string;
}

export const mockArticleCategories: IArticleCategoryWithLabel[] = [
  { code: 'chat', imageUrl: 'https://i.imgur.com/cnGUSeYs.jpg', label: '聊天' },
  {
    code: 'animal',
    imageUrl: 'https://i.imgur.com/JR2xyV6s.jpg',
    label: '動物',
  },
  { code: 'food', imageUrl: 'https://i.imgur.com/VpthdjVs.jpg', label: '食物' },
  {
    code: 'travel',
    imageUrl: 'https://i.imgur.com/YZmNS4Ws.jpg',
    label: '旅遊',
  },
  {
    code: 'programming',
    imageUrl: 'https://i.imgur.com/xMqW5bps.jpg',
    label: '程式',
  },
  {
    code: 'sports',
    imageUrl: 'https://i.imgur.com/s4PDhtLs.jpg',
    label: '運動',
  },
];
