const menu = [
  {
    groupName: 'Account',
    menuItems: [
      {
        name: '데이터 백업 / 복원',
        icon: 'sync',
        routeTo: 'DataSyncScreen',
      },
      {
        name: '잠금 설정',
        icon: 'lock',
        routeTo: 'LockScreen',
      },
      {
        name: '테마 설정',
        icon: 'palette',
        routeTo: 'ThemeScreen',
      },
    ],
  },
  {
    groupName: 'Feedback',
    menuItems: [
      {
        name: '의견 보내기',
        icon: 'feedback',
        routeTo: 'FeedbackScreen',
      },
    ],
  },
  {
    groupName: 'Information',
    menuItems: [
      {
        name: '버전',
        icon: 'info-outline',
        routeTo: null,
      },
    ],
  },
];

export default menu;