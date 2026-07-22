// Restored from ref/webview/assets/index-eq1Q1wHr-B5eOXH6-.js
// Kakao-specific artifact icon registry used by the document renderer.
import type { ReactNode, SVGProps } from "react";
import KakaoBell from "./bell";
import KakaoCard from "./card";
import KakaoChampionshipCup from "./championship-cup";
import KakaoChristmas from "./christmas";
import KakaoFire from "./fire";
import KakaoGardenExpo from "./garden-expo";
import KakaoGlobe from "./globe";
import KakaoJordy from "./jordy";
import KakaoLoudSpeaker from "./loud-speaker";
import KakaoNationalMuseum from "./national-museum";
import KakaoShareIcon from "./share-icon";
import KakaoSoccerBall from "./soccer-ball";
import KakaoSouthKoreaFlag from "./south-korea-flag";
import KakaoWreath from "./wreath";
import KakaoKomi from "./komi";
import type { VendorIconProps } from "./types";
const kakaoIcons = {
  Bell: KakaoBell,
  Card: KakaoCard,
  ChampionshipCup: KakaoChampionshipCup,
  Christmas: KakaoChristmas,
  Fire: KakaoFire,
  GardenExpo: KakaoGardenExpo,
  Globe: KakaoGlobe,
  Jordy: KakaoJordy,
  LoudSpeaker: KakaoLoudSpeaker,
  NationalMuseum: KakaoNationalMuseum,
  ShareIcon: KakaoShareIcon,
  SoccerBall: KakaoSoccerBall,
  SouthKoreaFlag: KakaoSouthKoreaFlag,
  Wreath: KakaoWreath,
} as const;
const FallbackIcon = (props: SVGProps<SVGSVGElement>): ReactNode => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} />
);
const KakaoIcon = ({ name, ...props }: VendorIconProps): ReactNode => {
  if (name === "Komi") return <KakaoKomi {...props} />;
  const Icon = kakaoIcons[name as keyof typeof kakaoIcons] ?? FallbackIcon;
  return <Icon {...props} />;
};
KakaoIcon.displayName = "KakaoIcon";
export default KakaoIcon;
