'use client'

import React, { useRef } from 'react'

const UseRef = () => {
    const listRef = useRef<HTMLUListElement | null>(null);

    function scrollToIndex(index: number) {
        const listNode = listRef.current;
        if (listNode) {
            const imgNode = listNode.querySelectorAll('li > img')[index];
            if (imgNode) {
                imgNode.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }

    return (
        <>
            <nav className="flex justify-center space-x-4 mb-4">
                <button
                    onClick={() => scrollToIndex(0)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Neo
                </button>
                <button
                    onClick={() => scrollToIndex(1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Millie
                </button>
                <button
                    onClick={() => scrollToIndex(2)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Bella
                </button>
            </nav>
            <div className="overflow-x-auto">
                <ul ref={listRef} className="flex space-x-4">
                    <li className="min-w-[300px]">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Neo"
                            className="rounded-lg shadow-lg"
                        />
                    </li>
                    <li className="min-w-[200px]">
                        <img
                            src="https://placekitten.com/200/200"
                            alt="Millie"
                            className="rounded-lg shadow-lg"
                        />
                    </li>
                    <li className="min-w-[200px]">
                        <img
                            src="https://placekitten.com/199/200"
                            alt="Bella"
                            className="rounded-lg shadow-lg"
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default UseRef
