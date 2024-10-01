'use client'

import React, { useRef, useState } from 'react';

const ClickCounter = () => {
    
    const countRef = useRef(0);
    const [renderCount, setRenderCount] = useState(0);

    const handleClick = () => {
        countRef.current += 1; 
        setRenderCount(renderCount + 1); 
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-6 p-4">
            <h1 className="text-2xl font-bold">Penjelasan tentang useRef di React</h1>

            <div className="text-left space-y-4 max-w-lg">
                <p>
                    <strong>useRef</strong> adalah salah satu hook di React yang berguna untuk menyimpan referensi ke elemen DOM atau nilai yang tidak ingin memicu re-render saat diperbarui. Tidak seperti <strong>useState</strong>, perubahan pada <code>useRef</code> tidak menyebabkan komponen melakukan render ulang.
                </p>

                <p>
                    Pada contoh ini, <code>useRef</code> digunakan untuk menyimpan jumlah klik tombol tanpa memicu render ulang. Kamu bisa melihat jumlah klik di konsol setiap kali tombol diklik, namun elemen UI tidak akan di-render ulang untuk setiap klik kecuali jika kita secara eksplisit mengubah state menggunakan <code>useState</code>.
                </p>

                <p>
                    Berikut adalah contoh penerapan <code>useRef</code> untuk menghitung jumlah klik tanpa memicu re-render pada setiap klik.
                </p>
            </div>

            <p className="text-xl">Jumlah klik (di konsol): {countRef.current}</p>

            <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Klik saya
            </button>

            <div className="mt-6">
                <h2 className="text-lg font-semibold">Penjelasan Singkat:</h2>
                <ul className="list-disc list-inside">
                    <li>
                        <strong>useRef</strong> tidak memicu re-render saat nilai yang tersimpan di dalamnya berubah.
                    </li>
                    <li>
                        Perubahan nilai <code>countRef.current</code> hanya dapat dilihat di konsol, tetapi UI tidak berubah kecuali kita menggunakan <strong>useState</strong>.
                    </li>
                    <li>
                        <strong>useRef</strong> sering digunakan untuk referensi ke elemen DOM seperti input, form, atau elemen lain.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ClickCounter;
