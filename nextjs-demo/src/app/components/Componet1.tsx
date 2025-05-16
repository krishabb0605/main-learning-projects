import React from 'react'

export const Componet1 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>Componet1</div>
  )
}