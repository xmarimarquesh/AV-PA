import Image from "next/image";

import img_react from "../assets/react.png";
import img_vue from "../assets/vue.png";
import img_next from "../assets/next.webp";
import img_jquery from "../assets/jquery.png";

export default function Home() {
  const data: {titulo: string; descricao: string, href: string}[] = [
    {
      titulo: "React",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "#react"
    },
    {
      titulo: "Tailwind",
      descricao: "O Tailwind é um framework do CSS que nos fornece classes utilitárias de propósito único que são, em sua maioria, opinativas e que nos ajudam a projetar nossas páginas da web diretamente de dentro de nossos arquivos de marcação ou . js/. jsx/. ts/.",
      href: "#vue"
    },
    {
      titulo: "Next",
      descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      href: "#next"
    },
    {
      titulo: "JQuery",
      descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      href: "#jquery"
    }
  ]

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[2em] font-bold w-full flex items-center justify-center text-azul mt-5 mb-5">Cards - ROTA 1</h1>
      <div className="flex flex-col items-center lg:flex-row m-5 w-[80%] mt-24 mb-24">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-between w-4/5 min-h-[500px] m-2 border border-gray">
            <h1 className="text-[1.5em] bg-gradient-to-r from-azul via-blue-800 to-azul w-full h-[100px] flex items-center justify-center text-white">{item.titulo}</h1>
            <p className="flex flex-col text-center items-center justify-center p-4">{item.descricao}</p>
            <a href={item.href} className=" bg-gradient-to-r from-azul via to-blue-800 text-white p-2 m-2">Read more</a>
          </div>
        ))}
      </div>
      <section className="m-5 md:w-[80%] lg:w-[50%]">
        <div id="react" className="flex flex-col items-center">
          <Image className="p-5" src={img_react} alt="Imagem REACT" width={150} height={150} />
          <p className="bg-azul text-white lg:p-20 sm:p-4 md:p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div id="vue" className="flex flex-col items-center">
          <Image className="p-5" src={img_vue} alt="Imagem VUE" width={150} height={150} />
          <p className="bg-azul text-white lg:p-20 sm:p-4 md:p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div id="next" className="flex flex-col items-center">
          <Image className="p-5" src={img_next} alt="Imagem NEXT" width={150} height={150} />
          <p className="bg-azul text-white lg:p-20 sm:p-4 md:p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div id="jquery" className="flex flex-col items-center">
          <Image className="p-5" src={img_jquery} alt="Imagem JQUERY" width={150} height={150} />
          <p className="bg-azul text-white lg:p-20 sm:p-4 md:p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>
    </div>
  );
}
