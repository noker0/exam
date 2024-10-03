import React from 'react'
import Image from 'next/image'
import star from '../public/star.jpg'
import pchel from '../public/pchel.jpg'

const Otz = () => {
  return (
    <>
          <p className='text-[#1640d0] mt-[100px] flex justify-center text-[30px]'>Otzivi</p>
          <div className="flex justify-center mt-[50px] items-center gap-[50px] h-[400px]">
            <p className='text-[#1640d0] mt-[100px] flex justify-center text-[30px] cursor-pointer'>прошлый отзыв</p>
                <div className="bg-[white] border-[2px] border-[black] rounded-[15px] h-[400px] w-[800px]">
                    <div className="flex justify-center mt-[20px]">
                    <Image src={pchel} className='h-[100px] w-[100px] rounded-[50px] '/>
                    </div>
                    <p className='flex justify-center mt-[10px]'>Mr. Fyedr Yacubovich</p>
                    <div className="flex justify-center gap-[10px]">
                        <Image src={star} className='h-[30px] w-[30px] ' />
                        <Image src={star} className='h-[30px] w-[30px] ' />
                        <Image src={star} className='h-[30px] w-[30px] ' />
                        <Image src={star} className='h-[30px] w-[30px] ' />
                        <Image src={star} className='h-[30px] w-[30px] ' />
                    </div>
                    <p className='text-[#1640d0] text-center mt-[30px]'>«Трое Фрязинцев однажды,
Свой бюджет прикинув дважды,
Встрепянулись, поднялись, в путь-дорогу собрались….

Долго ль, коротко летели…
Солнышко, поля да ели одним мигом пронеслись.
И чуть свет мы добрались…

Не до Острова Буяна,
Не до Царствия Салтана…
Что бы чуточку вздремнуть и обмозговать свой путь.
Мы проехали весь Питер!
И, минуя цепь событий,
Пробок, улиц перекрытий,
Сквозь преграды прорвались,

В дом Матисов добрались!!!

(Николаю админу гранд Мерси)
(Павлу админу заботливому за Доброту)

Боги! Что же перед нами…
Замок с чудными дворами!!!
Дорогие колесницы на стоянке,
Словно птицы притаились на покой…


</p>
                </div>
            <p className='text-[#1640d0] mt-[100px] flex justify-center text-[30px] cursor-pointer'>следующий отзыв</p>
          </div>
    </>
  )
}

export default Otz