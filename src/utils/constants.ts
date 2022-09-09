export enum AUTH_STATES {
  AUTHENTICATED = 'AUTHENTICATED',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  EMAIL_UNVERIFIED = 'EMAIL_UNVERIFIED',
  UNSET = 'UNSET',
}

export const MINIMUM_NUMBER_OF_RIDERS_STG: number = 4

export const COOKIES = {
  AUTH: {
    ACCESS_TOKEN: 'skrrrt.auth.access_token',
    REFRESH_TOKEN: 'skrrrt.auth.refresh_token',
  },
  THEME: 'skrrrt.theme',
}

export enum STG_SET_CARD_VIEW_TYPES {
  MESSAGES = 'messages',
  SUBMISSIONS = 'submissions',
}

export enum SUBMISSION_CARD_VIEW_TYPES {
  MESSAGES = 'messages',
  SET = 'set',
}

export enum STG_SET_DISPLAY_TYPES {
  CARD = 'card',
  TABLE = 'table',
}

export enum STG_DIFFICULTIES {
  BEGINNER = 'beginner',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
}

export enum GAME_TYPES {
  STG = 'stg',
}

export enum STG_STATUSES {
  PREVIOUS = 'previous',
  ACTIVE = 'active',
  UPCOMING = 'upcoming',
}

export enum MEDIA_TYPES {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export const COLORS = {
  CHIP: {
    light: {
      background: '#CECECe',
    },
    dark: {
      background: '#414141',
    },
  },
}

export const LOCAL_STORAGE = {
  AUTH: {
    TOKEN: 'skrrrt.auth.token',
  },
}

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
}

export const BREAKPOINTS = {
  MOBILE: 768,
}

export const CSV_SEPARATOR = ','
export const CSV_SEPARATOR_SPACE = ', '
export const SKELETON_LOAD_TIMEOUT = 0

export const LOCATION_TYPES = {
  HOMETOWN: 'hometown',
  CURRENT_LOCATION: 'current_location',
}

export const REGEX = {
  URL: /^https?:\/\//i,
  NO_WHITESPACES: /^\S*$/,
}

export const LIGHT_MAP = [
  { elementType: 'geometry', stylers: [{ color: '#eceff4' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#eceff4' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8fbcbb' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#88c0d0' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#88c0d0' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#e5e9f0' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#E3E5E9' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#BBC5D3' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#BBC5D3' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#d8dee9' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#d8dee9' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#8fbcbb' }],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#8fbcbb' }],
  },
]

export const DARK_MAP = [
  { elementType: 'geometry', stylers: [{ color: '#2e3440' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#2e3440' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8fbcbb' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#88c0d0' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#88c0d0' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#88c0d0' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#434c5e' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#8fbcbb' }],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#8fbcbb' }],
  },
]

export const META_DEFAULTS = {
  OG_IMAGE: 'https://skrrrt.io/landing.png',
  DESCRIPTION:
    "Join a tight-knit community of unicyclists from around the world! Whether you want to chat with other riders, create posts, join games, or browse the user directory, skrrrt has what you're looking for!",
}
