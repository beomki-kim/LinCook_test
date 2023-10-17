import React from 'react'

export default function Pagination() {
    return (
        <ol className="flex justify-center gap-2 text-xs font-medium">
            <li>
                <a
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="block h-8 w-8 rounded border-green-500 bg-green-500 text-center leading-8 text-white"
                >
                    1
                </a>
            </li>

            <li
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
                2
            </li>

            <li>
                <a
                    href="#"
                    className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                    3
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                    4
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </li>
        </ol>
    )
}