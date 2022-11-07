import { Tooltip, Button } from 'antd';
import './Tip.css';

const Tip =() => {
const text = <span>prompt text</span>;

const buttonWidth = 70;

return(
    <>
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
    </div>
    
  </div>
  </>
 
);

}

export default Tip;