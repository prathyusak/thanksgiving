
import './ScanImage.css'


function ScanImage({url,link}) {
  return (
     <div className='griddisplay'>
     {
     	url.map((item,i)=> {
     		return (<a href={link} >
     			<img className='scanimage' alt='scanimage' src={item} />
     			</a>
     			) 
     	})
     }
    </div>
  );
}

export default ScanImage;
