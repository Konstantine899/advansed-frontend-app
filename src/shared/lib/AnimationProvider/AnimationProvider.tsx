// shared/AnimationProvider/AnimationProvider.tsx

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

interface AnimationContextPayload {
    Gesture?: GestureType; // библиотека @react-spring/web
    Spring?: SpringType; // библиотека @use-gesture/react
    isLoaded?: boolean; // true когда библиотеки под грузились, и в false состоянии когда не под грузились
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Обе либы зависят друг от друга
const getAsyncAnimationModules = async () => Promise.all([import("@react-spring/web"), import("@use-gesture/react")]);

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;
export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded]
    );

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
