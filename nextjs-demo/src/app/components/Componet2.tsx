import React from 'react'

export const Componet2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>Componet2</div>
  )
}
