import React, { createContext, useState, ReactNode, useContext } from "react";


interface LoadingContextProps {
    isLoading: boolean;
    progress: number;
    setIsLoading: (isLoading: boolean) => void;
    setProgress: (progress: number | ((prevProgress: number) => number)) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const LoadingProvider: React.FC<{children: ReactNode}> = ({children}) => { 

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const value = {
        isLoading,
        progress,
        setIsLoading,
        setProgress
    }

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider")
    }

    return context
}