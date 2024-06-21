'use client'
import { ICharacter } from "@/interface/Interface";
import { FetchAllCharacter } from "@/utils/DataService";
import Image from "next/image";
import { useEffect, useState } from "react";
import ModalComponent from "./Components/ModalComponent";
import logo from '@/Assets/harrypotterlogo.png'

export default function Home() {

  const [fullCharacterObj, setFullCharacterObj] = useState<ICharacter[]>()
  const [hideOpenModal, setHideOpenModal] = useState<string>("hidden ")
  const [clickedCharacter, setClickedCharacter] = useState<ICharacter>();
  const [fullCharacterObj25, setFullCharacterObj25] = useState<ICharacter[]>();





  useEffect(() => {
    const LoadAll = async () => {
      let allCharacters = await FetchAllCharacter();
      // setFullCharacterObj(await allCharacters.sort((a: ICharacter, b: ICharacter) => {
      //   if (a.name < b.name) {
      //     return -1;
      //   }
      //   if (a.name > b.name) {
      //     return 1;
      //   }
      //   return 0;
      // }))
      setFullCharacterObj(await allCharacters)





    }
    LoadAll()
  }, [])

  return (
    <div className="">
      <div className={`fixed ${hideOpenModal}`}>
        <ModalComponent characterInfo={clickedCharacter} setHideOpenModal={setHideOpenModal}></ModalComponent>
      </div>


      <div className=" pl-5 h-[80px] bg-black ">
        <Image className="h-[60px] w-auto" src={logo} alt="hp logo" />
      </div>


      <p className="text-[50px] text-white ml-5">Popular Characters</p>
      <div className=" hideBar  overflow-x-auto flex decoration-0">
        {fullCharacterObj && fullCharacterObj.slice(0, 25).map((ele: ICharacter, idx: number) => {
          return (
            <div
              onClick={() => { setHideOpenModal("block"), setClickedCharacter(ele) }}
              className=" hover:ring-2  bg-black  ring-[#ECBF77] cursor-pointer my-4 mx-4 min-w-[200px] h-full">
              <img className=" object-cover object-top w-[200px] h-[300px]" src={ele.image} alt="Wizards" />
              <p className="text-[20px] text-[#ECBF77]">{ele.name}</p>

            </div>
          )
        })}

      </div>


      <div className=" grid grid-cols-5">
        {
          fullCharacterObj && fullCharacterObj.map((ele: any, idx: number) => {
            return (
              <p className="text-white p-[20px]"
                onClick={() => { setHideOpenModal("block"), setClickedCharacter(ele) }}
                key={idx}>{ele.name}</p>
            )
          })
        }
      </div>
    </div>

  );
}
