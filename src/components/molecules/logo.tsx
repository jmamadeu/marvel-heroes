import { LogoSVG } from "~/assets/images/logo";

export const Logo = () => (
  <div className="flex items-center">
    <LogoSVG />
    <span className="text-white font-bold text-4xl ml-6">Marvel Heroes</span>
  </div>
);
