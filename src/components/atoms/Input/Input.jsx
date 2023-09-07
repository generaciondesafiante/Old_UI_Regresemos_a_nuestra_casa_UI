import './Input.css'

export const Input = ({name,value,onChange,type,placeholder,label,id, htmlForm, labelColor, isRequire}) => {
  const labelStyle = {
    color: labelColor || 'var(--white)', 
  };
  return (
    <div className="form-input-container_inLa">
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required={isRequire}
      placeholder={placeholder}
      className="form-input-input"
      style={labelStyle}

    />
    <label htmlFor={htmlForm} className="form-input-label" style={labelStyle}>
      {label}
    </label>
  </div>
  )
}

