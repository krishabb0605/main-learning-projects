import React from 'react'

// For page page.tsx file and for layout => layout.tsx file
const ProductLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            <div>
                <h2>Featured products section</h2>
            </div>
        </div>
    )
}

export default ProductLayout