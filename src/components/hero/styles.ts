import { cva } from 'class-variance-authority'

export const heroContainer = cva(`
  w-full bg-gray-100
  px-32 py-16 gap-32
  flex justify-center items-center
`)

export const heroContent = cva(`
  flex gap-16 w-full max-w-[1400px]
  justify-between items-center
`)

export const heroLeftSection = cva(`
  flex items-center flex-col gap-8 text-center 
`)

export const heroTitle = cva(`
  font-bold text-5xl text-gray-900 leading-snug w-full max-w-[473px]
`)
