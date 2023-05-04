import { cva } from 'class-variance-authority'

export const inputContainer = cva(
  `flex gap-3 items-center justify-between 
  px-4 py-2 rounded-xl 
  bg-gray-50 border-2 border-gray-300 
  w-[433px] cursor-text focus-within:border-magenta-500`,
)

export const input = cva(`
  bg-transparent w-full outline-0 
  text-gray-900 placeholder:text-gray-500 
  autofill:shadow-[inset_0_0_0px_1000px_rgb(253,247,252)]
`)
