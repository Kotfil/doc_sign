export  interface FontTheme {
  interMedium20: FontThemePart
  interMedium16: FontThemePart
  interRegular16: FontThemePart
  interRegular14: FontThemePart
  interRegular12: FontThemePart
  interRegular10: FontThemePart
  interBold12: FontThemePart
  interLight12: FontThemePart
  nunitoBold18: FontThemePart
  nunitoBold14: FontThemePart
  nunitoMedium16: FontThemePart
  nunitoMedium18: FontThemePart
  robotoRegular12: FontThemePart
  robotoRegular14: FontThemePart
  robotoRegular10: FontThemePart
  montserratSemiBold18: FontThemePart
  montserratMedium10: FontThemePart
  syncopateRegular24: FontThemePart
  syncopateBold18: FontThemePart
}
interface FontThemePart {
  fontFamily?: string
  fontWeight?: number
  fontSize?: number
  lineHeight?: string
  letterSpacing?: string

}

