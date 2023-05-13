import { cva } from 'class-variance-authority'

export const sectionContainer = cva(`
  w-full relative 
  even:bg-gray-50 odd:bg-gray-100 
  flex justify-center items-center 
  px-32 py-8
`)

export const sectionContent = cva(`
  h-full flex justify-between items-center 
  w-full max-w-[1400px] gap-16
`)

export const sectionInfo = cva(`
  w-[36.375rem]
`)

export const sectionInfoHeader = cva(`
  flex justify-between items-center mb-4
`)

export const orgName = cva(`
  font-semibold text-5xl text-gray-900
`)

export const orgDescription = cva(`
  text-3xl text-gray-700
`)

export const orgImage = cva(`
  h-[28.875rem] object-contain rounded-[128px]
`)

export const imageContainer = cva(`
  h-[28.875rem] w-[28.875rem] relative rounded-[128px] overflow-hidden
  after:absolute after:top-0 after:left-0 
  after:bg-pink-200 after:opacity-20 after:z-10 
  after:h-[28.875rem] after:w-[28.875rem] after:block
`)
