'use client'

import styles from './previewColor.module.css'
import SofaIcon from '../../../../../../../components/icons/SofaIcon'
import BaseboardIcon from '../../../../../../../components/icons/BaseboardIcon'
import WallIcon from '../../../../../../../components/icons/WallIcon'
import CarpetIcon from '../../../../../../../components/icons/CarpetIcon'
import CeilingIcon from '../../../../../../../components/icons/CeilingIcon'
import CurtainIcon from '../../../../../../../components/icons/CurtainIcon'
import ShadowIcon from '../../../../../../../components/icons/ShadowIcon'
import CushionIcon from '../../../../../../../components/icons/CushionIcon'
import DoorIcon from '../../../../../../../components/icons/DoorIcon'
import HandleIcon from '../../../../../../../components/icons/HandleIcon'
import FloorIcon from '../../../../../../../components/icons/FloorIcon'
import PaintingIcon from '../../../../../../../components/icons/PaintingIcon'
import SpotlightIcon from '../../../../../../../components/icons/SpotlightIcon'
import BracketIcon from '../../../../../../../components/icons/BracketIcon'

export default function PreviewColor({
  neutralShades,
  secondaryShades,
  highlightShades,
}) {
  // ✅ fallback افتراضي لما الأب (Page.jsx) لسه ما بعتش قيم
  const baseShades = neutralShades || ['#CABCAC', '#DED5CB', '#AD967D'];       // المحايد
  const secondary = secondaryShades || ['#DCCDBD', '#C2A78B', '#A88159'];      // الثانوي
  const accentShades = highlightShades || ['#CCCCA5', '#B0B174', '#8A8B4E'];   // التمييزي

  return (
    <>
      <h2 className={styles.title}>🎨 رابعا : توزيع الألوان في الغرفة</h2>
      <p className={styles.par}>
        <strong>اللون المحايد:</strong> يُستخدم للحائط، السقف، والأرضية لإعطاء شعور بالاتساع والهدوء.
      </p>
      <p className={styles.par}>
        <strong>اللون الثانوي:</strong> يُستخدم في الكنب، الستائر، والسجاد لإضافة دفء بصري.
      </p>
      <p className={styles.par}>
        <strong>اللون التمييزي:</strong> يُستخدم في اللوحات، الإكسسوارات، والإنارة لإبراز التفاصيل.
      </p>

      {/* نموذج الغرفة */}
      <div className={styles.room}>
        {/* عناصر الخلفية */}
        <CeilingIcon color={"#eee"} className={styles.ceiling} />
        <WallIcon color={baseShades[1]} className={styles.wall} />
        <BaseboardIcon color={baseShades[2]} className={styles.baseboard} />
        <FloorIcon color={baseShades[1]} className={styles.floor} />

        {/* العناصر الثانوية */}
        <CurtainIcon color={secondary[2]} className={styles.curtain} />
        <SofaIcon color={secondary[1]} className={styles.sofa} />
        <CarpetIcon color={secondary[2]} className={styles.carpet} />

        {/* وسائد */}
        <CushionIcon color={secondary[0]} className={styles.cushion} />
        <CushionIcon color={secondary[0]} className={styles.cushion2} />

        {/* ديكور */}
        <PaintingIcon color={accentShades[2]} className={styles.painting} />
        <SpotlightIcon color={accentShades[1]} className={styles.spotlight} />
        <BracketIcon color={'#333'} className={styles.bracket} />

        {/* الباب */}
        <DoorIcon color={"#eee"} className={styles.door} />
        <HandleIcon color={'#222'} className={styles.handle} />

        {/* ظل خفيف */}
        <ShadowIcon color={'rgba(0,0,0,0.35)'} className={styles.shadow} />
      </div>
    </>
  )
}
