export const competitionDetails = {
  startDate: 1690828200000,
  endDate: 1693420200000,
};

export const apiURLs = {
  getUser: "https://xwb-api.superglu.cloud/api/v1/playersync", //Gmail Header
  getAllPlayers: "https://xwb-api.superglu.cloud/api/v1/leaderboard/topplayers",
  getAnyPlayer: "https://xwb-api.superglu.cloud/api/v1/leaderboard/topplayers/",
  getFemalePlayers:
    "https://xwb-api.superglu.cloud/api/v1/leaderboard/topfemaleplayers",
  getMalePlayers:
    "https://xwb-api.superglu.cloud/api/v1/leaderboard/topmaleplayers",
  getTeams: "https://xwb-api.superglu.cloud/api/v1/leaderboard/topteams",
  getTeam: "https://xwb-api.superglu.cloud/api/v1/leaderboard/topteams/",

  syncSteps: "https://xwb-api.superglu.cloud/api/v1/sync", //Gmail Header, Steps Body
};

export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/leaderboard-icon.png",
    route: "/leaderboard/teams",
    label: "Leaderboard",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Activity",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Test",
  },
  // {
  //   imgURL: "/assets/community.svg",
  //   route: "/communities",
  //   label: "Communities",
  // },
  // {
  //   imgURL: "/assets/user.svg",
  //   route: "/profile",
  //   label: "Profile",
  // },
];

export const leaderboardTabs = [
  //{ route: "/female-leaderboard", label: "Female", icon: "/assets/female-icon.png" },
  { route: "/leaderboard/teams", label: "Teams", icon: "/assets/teams-icon.png" },
  { route: "/leaderboard/individual", label: "Individual", icon: "/assets/male-icon.png" },
]

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
