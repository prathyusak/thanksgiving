import './App.css';
import ScanImage from './ScanImage';
import {useState,useEffect} from 'react';
import Navig from './Navig';
import {target,macys,walmart,jcpenny,costco,ashley,lowes,staples,homedepot} from './Urlinfo';

function App() {
  const [url,seturl] =useState(macys)  
  const [link,setlink] =useState('')
  const handleClick = (x) => {
     switch(x) {
      case 'walmart':
        seturl(walmart)
        setlink('')
        break;
      case 'macys':
        seturl(macys)
        setlink('')
        break;
      case 'target':
        seturl(target)
        setlink('')
        break;
      case 'jcpenny':
        seturl(jcpenny)
        setlink('')
        break;
      case 'costco':
        seturl(costco)
        setlink('')
        break;
            case 'ashley':
        seturl(ashley)
        setlink('https://www.ashleyfurniture.com/c/deals/black-friday/')
        break;
            case 'lowes':
        seturl(lowes)
        setlink('https://www.lowes.com/l/black-friday-deals.html')
        break;
            case 'staples':
        seturl(staples)
        setlink('')
        break;
        case 'homedepot':
        seturl(homedepot)
        setlink('')
        break;
        default:
    // code block
      }
  }
  useEffect (() =>{ },[url])
  return (
    <div className="App">
        <Navig handleClick={handleClick} />
        <ScanImage url={url} link={link}/>
    </div>
  );

}

export default App;