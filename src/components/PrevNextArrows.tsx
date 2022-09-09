import React from 'react'

export const PrevNextArrows = ({ previousHandler, nextHandler }) => (
  <div className="flex flex-row align-middle rounded-md shadow-sm bg-nord5 dark:bg-nord1">
    <button
      type="button"
      className="inline-flex items-center p-1 leading-none rounded-md cursor-pointer focus:outline-none focus:ring-3 focus:ring-purple-11 focus:ring-opacity-50 hover:ring-3 hover:ring-purple-11 hover:ring-opacity-50"
      onClick={previousHandler}
    >
      <svg
        className="inline-flex w-4 h-4 leading-none"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      type="button"
      className="inline-flex items-center p-1 leading-none rounded-md cursor-pointer focus:outline-none focus:ring-3 focus:ring-purple-11 focus:ring-opacity-50 hover:ring-3 hover:ring-purple-11 hover:ring-opacity-50"
      onClick={nextHandler}
    >
      <svg
        className="inline-flex w-4 h-4 leading-none"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
)
