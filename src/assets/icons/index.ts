import { eye } from "./eye";
import { eyeSlash } from "./eye-slash";
import { facebook } from "./facebook";
import { google } from "./google";
import { tabHomeFilled } from "./tab-home-filled";
import { tabHomeOutlined } from "./tab-home-outlined";

export enum IconName {
  Eye = "eye",
  EyeSlash = "eyeSlash",
  Facebook = "facebook",
  Google = "google",
  TabHomeFilled = "tabHomeFilled",
  TabHomeOutlined = "tabHomeOutlined",
}

type IconMap = Record<IconName, () => string>;

export const getIcon = (
  name: IconName,
  color?: string,
  size?: string
): string => {
  const iconMap: IconMap = {
    [IconName.Eye]: () => eye(color, size),
    [IconName.EyeSlash]: () => eyeSlash(color, size),
    [IconName.Facebook]: () => facebook(color, size),
    [IconName.Google]: () => google(color, size),
    [IconName.TabHomeFilled]: () => tabHomeFilled(color, size),
    [IconName.TabHomeOutlined]: () => tabHomeOutlined(color, size),
  };

  return iconMap[name]();
};
