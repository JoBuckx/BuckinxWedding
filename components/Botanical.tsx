import {embeddedAssets} from '@/content/embeddedAssets';

export function Botanical({small=false}:{small?:boolean}) {
 return <img
  className={small?'botanical botanical-small':'botanical'}
  src={embeddedAssets.botanicalBranch}
  alt="Botanical decorative eucalyptus illustration"
 />;
}
