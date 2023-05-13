import { cva } from 'class-variance-authority'

export const footerContainer = cva(`
  px-32 py-32 bg-gray-100 flex flex-col items-center
`)

export const footerContent = cva(`
  max-w-[56.25rem] flex flex-col items-center  m-auto
`)

export const footerTitle = cva(`
  font-bold text-7xl text-gray-900 text-center mb-12 w-full max-w-[860px]
`)

export const footerText = cva(`
  text-3xl text-gray-700 text-center mb-12 w-full max-w-[460px]
`)
