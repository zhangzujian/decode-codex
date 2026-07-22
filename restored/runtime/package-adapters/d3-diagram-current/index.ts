// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty-DF12FUR9.js
// Thin npm-backed compatibility surface for the Mermaid 11.14 D3 aggregate.
import {
  deviation as d3Deviation,
  extent as d3Extent,
  max as d3Max,
  mean as d3Mean,
  min as d3Min,
  quantileSorted as d3QuantileSorted,
  sum as d3Sum,
  tickStep as d3TickStep,
} from "d3-array";
import { color as d3Color } from "d3-color";
import { format as d3Format, formatLocale as d3FormatLocale } from "d3-format";
import {
  interpolateHcl as d3InterpolateHcl,
  interpolateNumber as d3InterpolateNumber,
  interpolateRgb as d3InterpolateRgb,
  interpolateString as d3InterpolateString,
  interpolateTransformCss as d3InterpolateTransformCss,
  interpolateTransformSvg as d3InterpolateTransformSvg,
} from "d3-interpolate";
import {
  scaleBand as d3ScaleBand,
  scaleDiverging as d3ScaleDiverging,
  scaleDivergingLog as d3ScaleDivergingLog,
  scaleDivergingPow as d3ScaleDivergingPow,
  scaleDivergingSqrt as d3ScaleDivergingSqrt,
  scaleDivergingSymlog as d3ScaleDivergingSymlog,
  scaleIdentity as d3ScaleIdentity,
  scaleImplicit as d3ScaleImplicit,
  scaleLinear as d3ScaleLinear,
  scaleLog as d3ScaleLog,
  scaleOrdinal as d3ScaleOrdinal,
  scalePoint as d3ScalePoint,
  scalePow as d3ScalePow,
  scaleQuantile as d3ScaleQuantile,
  scaleQuantize as d3ScaleQuantize,
  scaleRadial as d3ScaleRadial,
  scaleSequential as d3ScaleSequential,
  scaleSequentialLog as d3ScaleSequentialLog,
  scaleSequentialPow as d3ScaleSequentialPow,
  scaleSequentialQuantile as d3ScaleSequentialQuantile,
  scaleSequentialSqrt as d3ScaleSequentialSqrt,
  scaleSequentialSymlog as d3ScaleSequentialSymlog,
  scaleSqrt as d3ScaleSqrt,
  scaleSymlog as d3ScaleSymlog,
  scaleThreshold as d3ScaleThreshold,
  scaleTime as d3ScaleTime,
  scaleUtc as d3ScaleUtc,
  tickFormat as d3TickFormat,
} from "d3-scale";
import {
  arc as d3Arc,
  curveBasis as d3CurveBasis,
  curveBasisClosed as d3CurveBasisClosed,
  curveBasisOpen as d3CurveBasisOpen,
  curveBumpX as d3CurveBumpX,
  curveBumpY as d3CurveBumpY,
  curveBundle as d3CurveBundle,
  curveCardinal as d3CurveCardinal,
  curveCardinalClosed as d3CurveCardinalClosed,
  curveCardinalOpen as d3CurveCardinalOpen,
  curveCatmullRom as d3CurveCatmullRom,
  curveCatmullRomClosed as d3CurveCatmullRomClosed,
  curveCatmullRomOpen as d3CurveCatmullRomOpen,
  curveLinear as d3CurveLinear,
  curveLinearClosed as d3CurveLinearClosed,
  curveMonotoneX as d3CurveMonotoneX,
  curveMonotoneY as d3CurveMonotoneY,
  curveNatural as d3CurveNatural,
  curveStep as d3CurveStep,
  curveStepAfter as d3CurveStepAfter,
  curveStepBefore as d3CurveStepBefore,
  line as d3Line,
  pie as d3Pie,
  stack as d3Stack,
  stackOffsetDiverging as d3StackOffsetDiverging,
  stackOffsetExpand as d3StackOffsetExpand,
  stackOffsetNone as d3StackOffsetNone,
  stackOffsetSilhouette as d3StackOffsetSilhouette,
  stackOffsetWiggle as d3StackOffsetWiggle,
  stackOrderNone as d3StackOrderNone,
  symbol as d3Symbol,
  symbolCircle as d3SymbolCircle,
  symbolCross as d3SymbolCross,
  symbolDiamond as d3SymbolDiamond,
  symbolSquare as d3SymbolSquare,
  symbolStar as d3SymbolStar,
  symbolTriangle as d3SymbolTriangle,
  symbolWye as d3SymbolWye,
} from "d3-shape";
import {
  timeDay as d3TimeDay,
  timeFriday as d3TimeFriday,
  timeHour as d3TimeHour,
  timeMillisecond as d3TimeMillisecond,
  timeMinute as d3TimeMinute,
  timeMonday as d3TimeMonday,
  timeMonth as d3TimeMonth,
  timeSaturday as d3TimeSaturday,
  timeSecond as d3TimeSecond,
  timeSunday as d3TimeSunday,
  timeThursday as d3TimeThursday,
  timeTuesday as d3TimeTuesday,
  timeWednesday as d3TimeWednesday,
} from "d3-time";
import { timeFormat as d3TimeFormat } from "d3-time-format";
function initializeD3CompatibilityRuntime(): void {}
export {
  initializeD3CompatibilityRuntime as initializeD3ScaleDivergingSymlogRuntime,
  // $
  initializeD3CompatibilityRuntime as initializeD3ArrayTickRuntime,
  // $n
  d3TimeWednesday,
  // $t
  initializeD3CompatibilityRuntime as initializeD3CurveCatmullRomRuntime,
  // A
  d3TickFormat,
  // An
  initializeD3CompatibilityRuntime as initializeD3ScaleLogRuntime,
  // At
  initializeD3CompatibilityRuntime as initializeD3PathCoreRuntime,
  // B
  initializeD3CompatibilityRuntime as initializeD3ArrayDeviationRuntime,
  // Bn
  initializeD3CompatibilityRuntime as initializeD3ScaleBandRuntime,
  // Bt
  d3CurveMonotoneX,
  // C
  initializeD3CompatibilityRuntime as initializeD3TimeSecondRuntime,
  // Cn
  d3ScaleDivergingLog,
  // Ct
  d3CurveCatmullRomOpen,
  // D
  initializeD3CompatibilityRuntime as initializeD3TimeIntervalCoreRuntime,
  // Dn
  initializeD3CompatibilityRuntime as initializeD3ScalePowerRuntime,
  // Dt
  d3CurveLinearClosed,
  // E
  initializeD3CompatibilityRuntime as initializeD3TimeMillisecondRuntime,
  // En
  d3ScaleDivergingSymlog,
  // Et
  d3CurveCardinalClosed,
  // F
  initializeD3CompatibilityRuntime as initializeD3ArraySumRuntime,
  // Fn
  d3ScaleSequentialSymlog,
  // Ft
  d3CurveBasis,
  // G
  d3Min,
  // Gn
  d3TimeMonth,
  // Gt
  initializeD3CompatibilityRuntime as initializeD3ScaleFactorySupportRuntime,
  // H
  initializeD3CompatibilityRuntime as initializeD3ArrayVarianceRuntime,
  // Hn
  d3TimeFormat,
  // Ht
  initializeD3CompatibilityRuntime as initializeD3ShapeCurveCoreRuntime,
  // I
  d3ScaleOrdinal,
  // In
  initializeD3CompatibilityRuntime as initializeD3ScaleLinearRuntime,
  // It
  initializeD3CompatibilityRuntime as initializeD3ScaleTimeRuntime,
  // J
  initializeD3CompatibilityRuntime as initializeD3ArrayQuantileRuntime,
  // Jn
  d3TimeMonday,
  // Jt
  initializeD3CompatibilityRuntime as initializeD3ScaleUtcRuntime,
  // K
  initializeD3CompatibilityRuntime as initializeD3ArrayQuickselectRuntime,
  // Kn
  initializeD3CompatibilityRuntime as initializeD3TimeScaleSupportRuntime,
  // Kt
  d3CurveCardinal,
  // L
  initializeD3CompatibilityRuntime as initializeD3ArrayMinMaxRuntime,
  // Ln
  d3ScaleUtc,
  // Lt
  initializeD3CompatibilityRuntime as initializeD3CurveCardinalRuntime,
  // M
  initializeD3CompatibilityRuntime as initializeD3ArrayMeanRuntime,
  // Mn
  d3ScaleSequentialLog,
  // Mt
  d3CurveCardinalOpen,
  // N
  d3ScalePoint,
  // Nn
  d3ScaleSequentialPow,
  // Nt
  initializeD3CompatibilityRuntime as initializeD3CurveMonotoneRuntime,
  // O
  d3ScaleLinear,
  // On
  initializeD3CompatibilityRuntime as initializeD3ScaleSymlogRuntime,
  // Ot
  initializeD3CompatibilityRuntime as initializeD3CurveBasisRuntime,
  // P
  d3ScaleImplicit,
  // Pn
  d3ScaleSequentialSqrt,
  // Pt
  d3SymbolTriangle,
  // Q
  d3Deviation,
  // Qn
  d3TimeTuesday,
  // Qt
  initializeD3CompatibilityRuntime as initializeD3PathBuilderRuntime,
  // R
  initializeD3CompatibilityRuntime as initializeD3ArrayExtentRuntime,
  // Rn
  initializeD3CompatibilityRuntime as initializeD3ScaleContinuousRuntime,
  // Rt
  initializeD3CompatibilityRuntime as initializeD3ArcRuntime,
  // S
  d3ScaleSymlog,
  // Sn
  d3ScaleDiverging,
  // St
  initializeD3CompatibilityRuntime as initializeD3CurveStepRuntime,
  // T
  d3ScaleIdentity,
  // Tn
  d3ScaleDivergingSqrt,
  // Tt
  d3CurveBasisClosed,
  // U
  d3QuantileSorted,
  // Un
  initializeD3CompatibilityRuntime as initializeD3InterpolationDispatchRuntime,
  // Ut
  d3CurveBasisOpen,
  // V
  d3Mean,
  // Vn
  initializeD3CompatibilityRuntime as initializeD3ScaleOrdinalRuntime,
  // Vt
  initializeD3CompatibilityRuntime as initializeD3ScaleTickRuntime,
  // W
  initializeD3CompatibilityRuntime as initializeD3ArrayStatisticsRuntime,
  // Wn
  initializeD3CompatibilityRuntime as initializeD3TimeRuntime,
  // Wt
  d3SymbolWye,
  // X
  d3Extent,
  // Xn
  d3TimeSunday,
  // Xt
  initializeD3CompatibilityRuntime as initializeD3ScaleRadialRuntime,
  // Y
  d3TickStep,
  // Yn
  d3TimeSaturday,
  // Yt
  initializeD3CompatibilityRuntime as initializeD3ScaleIdentityRuntime,
  // Z
  initializeD3CompatibilityRuntime as initializeD3ArrayRangeRuntime,
  // Zn
  d3TimeThursday,
  // Zt
  d3CurveStepAfter,
  // _
  d3ScaleRadial,
  // _n
  initializeD3CompatibilityRuntime as initializeD3FormatSpecifierRuntime,
  // _r
  d3CurveLinear,
  // _t
  d3StackOffsetSilhouette,
  // a
  d3TimeMinute,
  // an
  d3InterpolateTransformSvg,
  // ar
  d3SymbolCross,
  // at
  initializeD3CompatibilityRuntime as initializeD3LineRuntime,
  // b
  d3ScaleSqrt,
  // bn
  initializeD3CompatibilityRuntime as initializeD3ScaleQuantileRuntime,
  // bt
  d3StackOffsetExpand,
  // c
  initializeD3CompatibilityRuntime as initializeD3TimeUtcIntervalRuntime,
  // cn
  initializeD3CompatibilityRuntime as initializeD3InterpolationCollectionRuntime,
  // cr
  initializeD3CompatibilityRuntime as initializeD3ScaleSequentialQuantileRuntime,
  // ct
  d3Stack,
  // d
  d3ScaleThreshold,
  // dn
  d3InterpolateRgb,
  // dr
  initializeD3CompatibilityRuntime as initializeD3ScaleSequentialPowerRuntime,
  // dt
  initializeD3CompatibilityRuntime as initializeD3TimeFormatRenderingRuntime,
  // en
  initializeD3CompatibilityRuntime as initializeD3ArrayInterningRuntime,
  // er
  d3SymbolStar,
  // et
  initializeD3CompatibilityRuntime as initializeD3StackRuntime,
  // f
  initializeD3CompatibilityRuntime as initializeD3TimeMonthRuntime,
  // fn
  initializeD3CompatibilityRuntime as initializeD3InterpolationCoreRuntime,
  // fr
  initializeD3CompatibilityRuntime as initializeD3ScaleSequentialLogRuntime,
  // ft
  initializeD3CompatibilityRuntime as initializeD3PieRuntime,
  // g
  initializeD3CompatibilityRuntime as initializeD3TimeDayRuntime,
  // gn
  d3Format,
  // gr
  initializeD3CompatibilityRuntime as initializeD3ScaleThresholdRuntime,
  // gt
  d3StackOffsetNone,
  // h
  d3ScaleQuantile,
  // hn
  initializeD3CompatibilityRuntime as initializeD3ColorParsingRuntime,
  // hr
  d3Line,
  // ht
  initializeD3CompatibilityRuntime as initializeD3ShapeFactoryRuntime,
  // i
  initializeD3CompatibilityRuntime as initializeD3TimeFormatLocaleRuntime,
  // in
  d3InterpolateTransformCss,
  // ir
  initializeD3CompatibilityRuntime as initializeD3ScaleDivergingLogRuntime,
  // it
  d3CurveCatmullRom,
  // j
  d3ScaleBand,
  // jn
  d3ScaleSequential,
  // jt
  d3CurveCatmullRomClosed,
  // k
  initializeD3CompatibilityRuntime as initializeD3ArrayCountRuntime,
  // kn
  d3ScaleSequentialQuantile,
  // kt
  initializeD3CompatibilityRuntime as initializeD3StackOrderRuntime,
  // l
  d3TimeMillisecond,
  // ln
  d3InterpolateNumber,
  // lr
  d3CurveBumpX,
  // lt
  initializeD3CompatibilityRuntime as initializeD3SymbolRuntime,
  // m
  initializeD3CompatibilityRuntime as initializeD3TimeWeekRuntime,
  // mn
  initializeD3CompatibilityRuntime as initializeD3ColorConversionRuntime,
  // mr
  initializeD3CompatibilityRuntime as initializeD3ScaleSequentialRuntime,
  // mt
  initializeD3CompatibilityRuntime as initializeD3ShapeRuntime,
  // n
  initializeD3CompatibilityRuntime as initializeD3TimeFormatParsingRuntime,
  // nn
  initializeD3CompatibilityRuntime as initializeD3ArrayBisectorRuntime,
  // nr
  d3SymbolSquare,
  // nt
  d3StackOffsetDiverging,
  // o
  initializeD3CompatibilityRuntime as initializeD3TimeCalendarRuntime,
  // on
  initializeD3CompatibilityRuntime as initializeD3InterpolationTransformRuntime,
  // or
  initializeD3CompatibilityRuntime as initializeD3ScaleDivergingRuntime,
  // ot
  d3StackOrderNone,
  // p
  d3ScaleQuantize,
  // pn
  d3Color,
  // pr
  d3Pie,
  // pt
  d3Symbol,
  // q
  d3Max,
  // qn
  d3TimeFriday,
  // qt
  d3StackOffsetWiggle,
  // r
  d3TimeHour,
  // rn
  initializeD3CompatibilityRuntime as initializeD3ArrayOrderingRuntime,
  // rr
  d3SymbolDiamond,
  // rt
  initializeD3CompatibilityRuntime as initializeD3RadialShapeRuntime,
  // s
  d3TimeSecond,
  // sn
  d3InterpolateString,
  // sr
  d3SymbolCircle,
  // st
  initializeD3CompatibilityRuntime as initializeD3DiagramRuntime,
  // t
  d3TimeDay,
  // tn
  d3InterpolateHcl,
  // tr
  initializeD3CompatibilityRuntime as initializeD3ScaleDivergingPowerRuntime,
  // tt
  initializeD3CompatibilityRuntime as initializeD3StackOffsetRuntime,
  // u
  initializeD3CompatibilityRuntime as initializeD3TimeYearRuntime,
  // un
  initializeD3CompatibilityRuntime as initializeD3InterpolationColorRuntime,
  // ur
  d3CurveBumpY,
  // ut
  d3CurveStepBefore,
  // v
  initializeD3CompatibilityRuntime as initializeD3TimeHourRuntime,
  // vn
  initializeD3CompatibilityRuntime as initializeD3FormatLocaleRuntime,
  // vr
  d3Arc,
  // vt
  d3CurveMonotoneY,
  // w
  d3ScaleLog,
  // wn
  d3ScaleDivergingPow,
  // wt
  d3CurveNatural,
  // x
  initializeD3CompatibilityRuntime as initializeD3TimeMinuteRuntime,
  // xn
  initializeD3CompatibilityRuntime as initializeD3ScaleSqrtRuntime,
  // xt
  d3CurveStep,
  // y
  d3ScalePow,
  // yn
  d3FormatLocale,
  // yr
  initializeD3CompatibilityRuntime as initializeD3ScaleQuantizeRuntime,
  // yt
  d3CurveBundle,
  // z
  d3Sum,
  // zn
  d3ScaleTime, // zt
};
