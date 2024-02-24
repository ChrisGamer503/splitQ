import HeaderComponent from "../../components/HeaderComponent"
import TituloColor from "../../components/TituloColor"

function UserIndex() {

  return (
    <>
      <HeaderComponent/>
      <TituloColor texto={"Recarga, Compra y disfruta"}/>
      <p className=" font-black p-2 text-center text-[#828282] xs:text-lg">Descubre una nueva manera de comprar con SplitQ - Una novedosa logistica que facilita tus compras</p>
      <div className="w-full flex justify-center">
        <div className="bg-gradient-to-t from-[#A297E5] via-[#A29FE5] to-[#A4BDE5] p-[3px] rounded-md xs:w-2/5 text-center">
          <button className=" bg-white rounded-md w-full font-black px-5 py-1">Empieza Ya!</button>
        </div>
      </div>      

    </>
  )
}



export default UserIndex
