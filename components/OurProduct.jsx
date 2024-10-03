    import React from 'react'
    import Image from 'next/image'
    import q from '../public/q.webp'
    import w from '../public/w.webp'
    import e from '../public/e.webp'
    import r from '../public/r.webp'
    import t from '../public/t.webp'
    import y from '../public/y.webp'
    import u from '../public/u.webp'
    import i from '../public/i.webp'
    import o from '../public/o.webp'
    import p from '../public/p.webp'
    import a from '../public/a.webp'
    import s from '../public/s.webp'

    const OurProduct = () => {
      return (
        <>
        <div className="mt-[150px]">
            <div className="flex justify-center gap-[100px] mb-[100px]">
                <div className="w-[300px]">
                    <Image src={q} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                <div className="w-[300px]">
                    <Image src={w} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                <div className="w-[300px]">
                    <Image src={e} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                
            </div>
            <div className="flex justify-center gap-[100px] mb-[100px]">
                <div className="w-[300px]">
                    <Image src={r} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                <div className="w-[300px]">
                    <Image src={t} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                <div className="w-[300px]">
                    <Image src={y} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                
            </div>
            <div className="flex justify-center gap-[100px] mb-[100px]">
                <div className="w-[300px]">
                    <Image src={u} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                <div className="w-[300px]">
                    <Image src={i} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                <div className="w-[300px]">
                    <Image src={o} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                
            </div>
            <div className="flex justify-center gap-[100px] mb-[100px]">
                <div className="w-[300px]">
                    <Image src={p} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                <div className="w-[300px]">
                    <Image src={a} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                <div className="w-[300px]">
                    <Image src={s} className='flex justify-center'></Image>
                    <p className='text-[#1640d0] text-[20px] flex justify-center'>Product</p>
                </div>
                
            </div>
        </div>
        </>
      )
    }
    
    export default OurProduct