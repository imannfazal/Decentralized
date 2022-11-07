
const Modal3 = ({isVisible, onClose}) => {
    if(!isVisible) return null;
  return (
    <>
   <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
    <div className="md:w-[500px] w-[300px] flex flex-col bg-whitebg border border-grey border-opacity-20 rounded">
      <button className="text-black text-xl place-self-end font-semibold pr-5 pt-2" onClick={()=>onClose()}>x</button>
      <div className="bg-whitebg p-2 rounded place-self-center md:text-lg text-sm font-normal">Buy iUSD+</div>
      <div className="bg-whitebg p-2 rounded place-self-start md:text-xs text-[10px] font-normal text-grey pl-12">UST Peg</div>
      <div className="bg-whitebg p-2 rounded place-self-start md:text-lg text-sm font-normal ml-12 border border-grey border-opacity-20 rounded md:w-96 w-48 hover:bg-lighthover cursor-pointer"><a href="#">Unslashed</a></div>
      <div className="p-2 rounded place-self-start md:text-xs text-[10px] font-normal text-grey pl-12"><a>Smart Contracts</a></div>
      <div className="bg-whitebg p-2 rounded place-self-start md:text-lg text-sm font-normal mx-12 mb-2 border border-grey border-opacity-20 rounded md:w-96 w-48 hover:bg-lighthover cursor-pointer"><a href="#">Nexus Mutual</a></div>
      <div className="bg-whitebg p-2 rounded place-self-start md:text-lg text-sm font-normal ml-12 mb-2 border border-grey border-opacity-20 rounded md:w-96 w-48 hover:bg-lighthover cursor-pointer"><a href="#">IsurAce</a></div>
      <div className="bg-whitebg p-2 rounded place-self-start md:text-lg text-sm font-normal ml-12 mb-9 border border-grey border-opacity-20 rounded md:w-96 w-48 hover:bg-lighthover cursor-pointer"><a href="#">Bridge Mutual</a></div>
    </div>
   </div>
  </>
  );
  }
  
  export default Modal3;