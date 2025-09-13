import SwitchFileButton from "./SwitchFileButton";

export default function FileNameInput() {
return(
    <div className="flex flex-col items-center justify-center">
        <label htmlFor="fileName">
            Nome do arquivo
        </label>
      <input type="text" id="fileName" className="" />


    {/*Botão do Switch*/}
   <SwitchFileButton/>
    </div>
  )  
}






