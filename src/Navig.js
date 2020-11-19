import './Navig.css'


function Navig({handleClick}) {
  return (
  	<div>
       <nav style={{display:'flex', justifyContent:'center'}}>
          <p  onClick={() => handleClick('target')} className="buttondisp"> Target </p>
          <p  onClick={() => handleClick('macys')} className="buttondisp"> Macys </p>
          <p  onClick={() => handleClick('walmart')} className="buttondisp"> Walmart </p>
          <p  onClick={() => handleClick('jcpenny')} className="buttondisp"> JcPenny </p>
          <p  onClick={() => handleClick('costco')} className="buttondisp"> Costco </p>
          <p  onClick={() => handleClick('ashley')} className="buttondisp"> Ashley </p>
          <p  onClick={() => handleClick('lowes')} className="buttondisp"> Lowes </p>
          <p  onClick={() => handleClick('staples')} className="buttondisp"> Staples </p>
          <p  onClick={() => handleClick('homedepot')} className="buttondisp"> HomeDepot </p>
       </nav>
    </div>
  );
}

export default Navig;