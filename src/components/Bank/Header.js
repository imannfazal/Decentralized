import Header from "./Header";

const Liquidations = ({isVisible, onClose}) => {
    if(!isVisible) return null;
  return (
    <>
    
   <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
    <div className="md:w-[400px] w-[350px] flex flex-col bg-whitebg border border-grey border-opacity-20 rounded">
      <button className="text-black text-xl place-self-end font-semibold pr-5 pt-2" onClick={()=>onClose()}>x</button>
      <div className="bg-whitebg md:p-2 rounded place-self-center md:text-xl text-sm font-normal mb-5">Participate in Liquidations</div>
      <div className="bg-whitebg p-2 rounded place-self-start md:text-sm text-xs font-medium ml-14 border border-grey border-opacity-20 rounded md:w-72 w-56 hover:bg-lighthover cursor-pointer mb-2"><a href="#">Lighthouse Defi</a></div>
      <div className="bg-whitebg p-2 rounded place-self-start md:text-sm text-xs font-medium ml-14 mb-2 border border-grey border-opacity-20 rounded md:w-72 w-56 hover:bg-lighthover cursor-pointer"><a href="#">Kujira</a></div>
      <div className="bg-whitebg p-2 rounded place-self-start md:text-sm text-xs font-medium ml-14 mb-9 border border-grey border-opacity-20 rounded md:w-72 w-56 hover:bg-lighthover cursor-pointer"><a href="#">Terra Toolbox</a></div>
    </div>
   </div>
  </>
  );
  }
  
  export default Liquidations;