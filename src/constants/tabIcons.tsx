import { SvgXml } from "react-native-svg";
import { getIcon, IconName } from "~/assets";

export const getTabBarIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number
) => {
  let iconName: IconName;

  switch (routeName) {
    case "Home":
      iconName = focused ? IconName.TabHomeFilled : IconName.TabHomeOutlined;
      break;
    case "Cart":
      iconName = focused ? IconName.TabHomeFilled : IconName.TabHomeOutlined;
      break;
    case "Profile":
      iconName = focused ? IconName.TabHomeFilled : IconName.TabHomeOutlined;
      break;
    case "Settings":
      iconName = focused ? IconName.TabHomeFilled : IconName.TabHomeOutlined;
      break;
    default:
      iconName = IconName.TabHomeOutlined;
      break;
  }

  return <SvgXml xml={getIcon(iconName, color, `${size}`)} />;
};
