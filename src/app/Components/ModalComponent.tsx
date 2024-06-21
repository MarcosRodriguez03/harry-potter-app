import React from 'react'
import CloseModalImg from '@/Assets/CloseModal.png'
import Image from 'next/image'

const ModalComponent = (
    props: {
        setHideOpenModal: (value: string) => void
        characterInfo: any
    }
) => {
    return (
        <div className=' absolute inset-0 z-50 w-screen h-screen bg-[#0000005e] flex justify-center items-center '>
            <div className='w-[700px] h-[full] rounded-lg border-[#ECBF77] border-[2px]  bg-black py-5 px-5' >

                <div className=' flex justify-end '>
                    <Image
                        onClick={() => props.setHideOpenModal("hidden")}
                        className=' mb-5 w-[30px] h-[30px] '
                        src={CloseModalImg} alt="Close" />
                </div>


                <div className='grid grid-cols-2 mb-5'>
                    <div className=' flex items-center justify-center flex-col '>

                        <img className='w-[300px] h-[400px] border-[#ECBF77] border-[2px] rounded-lg  object-cover object-top ' src={props.characterInfo?.image || "/emptyuser.png"} alt="Photo of character" />
                    </div>

                    <div>
                        {props.characterInfo?.name && <p className=' mx-5 text-white text-[20px]'> Name: {props.characterInfo?.name}</p>}
                        {props.characterInfo?.house && <p className=' mx-5 text-white text-[20px]'>House: {props.characterInfo?.house}</p>}
                        {props.characterInfo?.ancestry && <p className=' mx-5 text-white text-[20px]'>Ancestry: {props.characterInfo?.ancestry}</p>}
                        {props.characterInfo?.actor && <p className=' mx-5 text-white text-[20px]'>Actor: {props.characterInfo?.actor}</p>}

                        <p className=' mx-5 text-white text-[20px]'>{props.characterInfo?.wand?.wood && "Wand"}</p>
                        {
                            props.characterInfo?.wand?.wood && <>
                                <li className=' mx-5 text-white text-[20px]'> Wood: {props.characterInfo?.wand.wood}</li>
                                <li className=' mx-5 text-white text-[20px]'> Core: {props.characterInfo?.wand.core}</li>
                                <li className=' mx-5 text-white text-[20px]'> Length: {props.characterInfo?.wand.length}</li>
                            </>
                        }
                    </div>
                </div>












            </div>
        </div>
    )
}

export default ModalComponent
