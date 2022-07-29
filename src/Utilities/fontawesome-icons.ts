import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faBars,
  faGear,
  faMagnifyingGlass,
  faUserPlus,
  faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons';

import {
  faBookmark,
  faClock,
  faPenToSquare,
  faUser,
  faHeart,
  faEye,
} from '@fortawesome/free-regular-svg-icons';

library.add(
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faBars,
  faBookmark,
  faClock,
  faGear,
  faMagnifyingGlass,
  faPenToSquare,
  faUser,
  faUserPlus,
  faEye,
  faHeartSolid,
  faHeart
);

export default FontAwesomeIcon;
