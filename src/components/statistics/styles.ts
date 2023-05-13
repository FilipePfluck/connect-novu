import { cva } from 'class-variance-authority'

export const statisticsContainer = cva(`
  px-32 py-32 gap-16 bg-white flex items-center justify-center
`)

export const statisticContent = cva(`
  w-full max-w-[1400px]
  flex items-center justify-between
`)

export const statistic = cva(`
  flex flex-col items-center
`)

export const number = cva(`
  text-9xl text-gray-900
`)

export const magnitude = cva(`
  font-semibold text-7xl text-gray-900 mb-8
`)

export const info = cva(`
  text-3xl text-gray-900 text-center max-w-[250px]
`)
