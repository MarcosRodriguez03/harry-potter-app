'use client'
import { ICharacter } from "@/interface/Interface";
import { FetchAllCharacter } from "@/utils/DataService";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalComponent from "./Components/ModalComponent";
import logo from '@/Assets/harrypotterlogo.png'
import headerImg from '@/Assets/fede7019a5c7ef79125010cc86d64faa.jpg'

export default function Home() {

  const [fullCharacterObj, setFullCharacterObj] = useState<ICharacter[]>()
  const [hideOpenModal, setHideOpenModal] = useState<string>("hidden ")
  const [clickedCharacter, setClickedCharacter] = useState<ICharacter>();
  const [search, setSearch] = useState<string>("")


  useEffect(() => {
    const LoadAll = async () => {
      let allCharacters = await FetchAllCharacter();
      setFullCharacterObj(allCharacters);
    }
    LoadAll()
  }, [])

  return (
    <div className="hideBar min-h-screen">
      <div className={`fixed ${hideOpenModal}`}>
        <ModalComponent characterInfo={clickedCharacter} setHideOpenModal={setHideOpenModal}></ModalComponent>
      </div>


      <div className=" px-5 h-[80px] bg-black flex justify-between items-center ">
        <Image className="h-[60px] w-auto" src={logo} alt="hp logo" />

        <input
          onChange={(e) => setSearch(e.target.value)}
          className=" w-[400px] pl-5 h-[50px] rounded-lg text-20px" placeholder="Search" type="text" />
      </div>

      <div className="relative mb-10">
        <Image src={headerImg} alt="Header" className="w-full h-[400px] object-cover" />
        <p className="text-[80px] text-center absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
          Harry Potter Directory
        </p>
      </div>


      <div className=" w-[80%] mx-auto grid grid-cols-5 gap-10">
        {
          fullCharacterObj && fullCharacterObj.map((ele: any, idx: number) => {

            if (ele.name.includes(search)) {
              return (
                <div
                  key={idx}
                  onClick={() => { setHideOpenModal("block"), setClickedCharacter(ele) }}
                  className=" hover:ring-2  bg-black  ring-[#ECBF77] cursor-pointer my-4 mx-4 min-w-[200px] h-full">
                  <img className=" object-cover object-top w-full h-[300px]" src={ele.image || "emptyuser.png"} alt="Wizards" />
                  <p className=" pl-3 text-[20px] text-[#ECBF77]">{ele.name}</p>

                </div>
              )
            } else {
              return null
            }




          })
        }
      </div>
    </div>

  );
}
