import React, { useCallback, useState } from 'react'
import { TimeRange } from "./interfaces";
import './index.css'
import ScrollContext from "./components/ScrollContext";

interface TimeRangeSelectorProps {
  /** 当前滑动条的高度 */
  height?: number;
  /** 当前滑动条刻度的宽度 */
  width?: number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 时间范围 */
  timeRange?: TimeRange;
  /** 禁用的时间范围 */
  disabledTimeRanges?: TimeRange[];
  /** 修改 */
  onChange?: (value: TimeRange | null) => void;
  /** 每次移动时候跳针的宽度 */
  snap?: number;
  /** 点击时候添加时间块 */
  addByClick?: boolean;
  /** 具有双击去除 */
  removeByDbClick?: boolean;
}

function TimeRangeSelector(props: TimeRangeSelectorProps) {
  const {
    height = 80,
    disabled = false,
    disabledTimeRanges = [[0, 9], [20, 24]],
    onChange,
    removeByDbClick = false
  } = props

  const [timeRange, setTimeRange] = useState<TimeRange | null>([0,10])

  const handleChange = useCallback((value: TimeRange | null) => {
    if (disabled) {
      return
    }
    setTimeRange(value)
    onChange && onChange(value)
  }, [])


  return (
    <div style={{
      borderTop: '1px solid rgba(0,0,0,.08)',
      borderBottom: '1px solid rgba(0,0,0,.08)'
    }}>
      <ScrollContext
        disabled={disabled}
        value={timeRange}
        height={height}
        disabledTimeRanges={disabledTimeRanges}
        removeByDbClick={removeByDbClick}
        onChange={handleChange}
      />
    </div>
  )
}

export default TimeRangeSelector
