import SwitchFileButton from "./SwitchFileButton";

export default function FileNameInput() {
return(
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-3">
        <label htmlFor="fileName"
        className="block tex-[20px] font-semibold text-[#243D5A]">
            Nome do arquivo
        </label>
      <input type="text" 
      id="fileName" 
      className="w-half' rounded-md border border-zinc-300" />


    {/*Botão do Switch*/}
   <SwitchFileButton/>
      </div>
    </div>
  )  
}






