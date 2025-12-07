import HeroBlock from "@/components/hero/HeroBlock";
import TabletBlock from "@/components/section-tablet/TabletBlock";
import FeatureBlock from "@/components/features/featureBlock";
import Diferencial2 from "@/components/diferencial2"; 
import Final1 from "@/components/final1";
import Final2 from "@/components/final2";
import Diferencial1 from "@/components/diferencial1";


export default function HomePage() {
  return (
    <>
      <HeroBlock />
      <TabletBlock />
      <FeatureBlock />
      <Diferencial1 />
      <Diferencial2 />
      <Final1 />
      <Final2 />
    </>
  );
}
