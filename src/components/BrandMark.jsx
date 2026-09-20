export default function BrandMark({ compact = false }) {
  return (
    <div className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} aria-label="شعار مشاوي أبو عمر">
      <div className="mark-ring" role="img" aria-label="شعار مشاوي أبو عمر" />
      {!compact && (
        <div className="mark-copy">
          <strong>مشاوي أبو عمر</strong>
          <span>طعم أصيل على الفحم</span>
        </div>
      )}
    </div>
  )
}
