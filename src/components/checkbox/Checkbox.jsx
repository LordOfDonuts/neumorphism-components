import { useState } from 'react';
import './Checkbox.css'

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`checkbox-container ${isChecked && 'checked'}`}>
      <div className="toggle">
        <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
      </div>
      <span></span>
    </div>
  )
}

export default Checkbox