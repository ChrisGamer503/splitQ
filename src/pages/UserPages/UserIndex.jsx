import HeaderComponent from "../../components/HeaderComponent"
import TituloColor from "../../components/TituloColor"

function UserIndex() {

  return (
    <>
      <HeaderComponent/>
      <TituloColor texto={"Recarga, Compra y disfruta"}/>
      <p className=" font-black p-2 text-center text-[#828282] xs:text-lg">Descubre una nueva manera de comprar con SplitQ - Una novedosa logistica que facilita tus compras</p>
      <div className="flex justify-center"> 
          <button className="border border-gradient rounded-md w-fit font-black px-12 py-2">Empieza Ya!</button>
      </div>      

    </>
  )
}



export default UserIndex
