import { Suspense } from "react";
import { Componet1 } from "../components/Componet1";
import { Componet2 } from "../components/Componet2";

// using Suspense it show msg when component is not properly render.
export default function ProductReviews() {
    return (
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<p>Loading component1 ...</p>}>
                <Componet1 />
            </Suspense>
            <Suspense fallback={<p>Loading component2 ...</p>}>
                <Componet2 />
            </Suspense>
        </div>
    )
}