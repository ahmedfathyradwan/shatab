'use client'

import styles from './previewColor.module.css'
import SofaIcon from '@/app/components/icons/SofaIcon'
import BaseboardIcon from '@/app/components/icons/BaseboardIcon'
import WallIcon from '@/app/components/icons/WallIcon'
import CarpetIcon from '@/app/components/icons/CarpetIcon'
import CeilingIcon from '@/app/components/icons/CeilingIcon'
import CurtainIcon from '@/app/components/icons/CurtainIcon'
import ShadowIcon from '@/app/components/icons/ShadowIcon'
import CushionIcon from '@/app/components/icons/CushionIcon'
import DoorIcon from '@/app/components/icons/DoorIcon'
import HandleIcon from '@/app/components/icons/HandleIcon'
import FloorIcon from '@/app/components/icons/FloorIcon'
import PaintingIcon from '@/app/components/icons/PaintingIcon'
import SpotlightIcon from '@/app/components/icons/SpotlightIcon'
import BracketIcon from '@/app/components/icons/BracketIcon'

export default function PreviewColor({ neutralShades, secondaryShades, highlightShades }) {

  // قيم افتراضية لتجنب أي crash لو المصفوفات undefined
  neutralShades = neutralShades || ['#FFFFFF', '#EFE5DA', '#C7BDB2']
  secondaryShades = secondaryShades || ['#DEB282', '#B68A5A', '#8E6232']
  highlightShades = highlightShades || ['#719DCD', '#4975A5', '#214D7D']

  return (
    <>
      <h2 className={styles.title}>ثالثا : توزيع الألوان</h2>
      <p className={styles.par}>اللون المحايد : سيستخدم مع معظم الحوائط والسقف والأرضيات.</p>
      <p className={styles.par}>اللون الثانوي : سيستخدم مع الأثاث والستائر والسجاد.</p>
      <p className={styles.par}>اللون التمييز : سيستخدم مع العناصر الصغيرة مثل الوسائد واللوحات والإكسسوارات.</p>

      <div className={styles.room}>
        <CeilingIcon color={neutralShades[0]} className={styles.ceiling} />
        <BaseboardIcon color={neutralShades[0]} className={styles.baseboard} />
        <WallIcon color={neutralShades[1]} className={styles.wall} />
        <FloorIcon color={neutralShades[2]} className={styles.floor} />

        <CurtainIcon color={secondaryShades[0]} className={styles.curtain} />
        <SofaIcon color={secondaryShades[1]} className={styles.sofa} />
        <CarpetIcon color={secondaryShades[2]} className={styles.carpet} />
        <CushionIcon color={secondaryShades[0]} className={styles.cushion} />
        <CushionIcon color={secondaryShades[0]} className={styles.cushion2} />

        <PaintingIcon color={highlightShades[1]} className={styles.painting} />
        <SpotlightIcon color={highlightShades[1]} className={styles.spotlight} />
        
        <DoorIcon color={"gray"} className={styles.door} />
        <HandleIcon color={"black"} className={styles.handle} />
        <ShadowIcon color={"black"} className={styles.shadow} />
        <BracketIcon color={"black"} className={styles.bracket} />
      </div>
    </>
  )
}
