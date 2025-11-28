import React, { Suspense } from "react";
import Loader from '../assets/loaders/loader.gif'

const LazyWrapper = ({ children }) => {
    return (
        <Suspense fallback={<Loader />}>
            {children}
        </Suspense>
    )
}

export default LazyWrapper;