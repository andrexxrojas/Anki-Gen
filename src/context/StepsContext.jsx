import { createContext, useContext, useState } from "react";

const StepsContext = createContext();

export const StepsProvider = ({ children }) => {
    const [stepProgress, setStepProgress] = useState({
        stepOneComplete: false,
        stepTwoComplete: false,
        stepThreeComplete: false,
    });

    const markStepComplete = (step) => {
        setStepProgress((prev) => ({...prev, [step]: true}));
    };

    return (
        <StepsContext.Provider value={{ stepProgress, markStepComplete }}>
            {children}
        </StepsContext.Provider>
    );
};

export const useSteps = () => useContext(StepsContext);