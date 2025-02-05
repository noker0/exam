import React from 'react'
import Image from 'next/image'
import turu from '../public/turu.jpg'

const AboutUs = () => {
  return (
    <>
     <div className="mt-[150px] flex items-center justify-between">
        <div className="">

        <p className='text-[#1640d0] text-[40px] mb-[10px]'>Information!</p>
        <p className='text-[#1640d0] w-[600px]'>Суперма́ркет (supermarket с англ. — «сверхрынок») — крупный универса́м (универмаг самообслуживания) по продаже полного ассортимента пищевых продуктов и напитков, а также предметов домашнего хозяйства (товаров для детей, мыла, порошков для стирки, средств для мытья посуды, предметов санитарии и гигиены, бумажных изделий, книг в бумажных обложках, комнатных растений), товаров для домашних животных (собачьего и кошачьего кормов, предметов гигиены, игрушек и т. п.), автомобильных товаров, поздравительных открыток, косметики, посуды, лекарств (продающихся без рецепта), бытовой техники и т. п.</p>
        </div>
        <Image src={turu} className='w-[800px] h-[350px]'></Image>
     </div>
    </>
  )
}

export default AboutUs