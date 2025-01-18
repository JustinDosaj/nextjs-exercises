import React, { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import { Container } from "@/components/Container";
import { Title } from "@/components/Title";

const LoadingBar: React.FC = () => {
    
    const { isLoading, progress, setProgress, setIsLoading } = useLoading();
    const [ btnText, setBtnText ] = useState<string>("Start");
    const [ speed, setSpeed ] = useState<number>(5);
    
    useEffect(() => {

      if (isLoading) {

        let start: number | null = null;
  
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const elapsed = (timestamp - start) / 1000; // Convert to seconds
          const percentage = Math.min((elapsed / speed) * 100, 100);
  
          setProgress(percentage);
  
          if (percentage < 100) {
            requestAnimationFrame(step);
          } else {
            // Loading Complete
            // Set progress to show max loading bar
            setIsLoading(false);
            setProgress(100)
            setBtnText("Restart") 
          }
        };
  
        requestAnimationFrame(step);
      }
    }, [isLoading, speed, setProgress, setIsLoading ]);
    
    const onLoaderStart = () => {
        setProgress(0)
        setBtnText("Loading...")

        setTimeout(() => {
            setIsLoading(true)
        }, 50)
    }

    return (
      <Container className="text-center">

        <Title title="Loading Bar"/>

        <div className="relative h-[8px] w-full bg-gray-200 rounded-full overflow-hidden">
            <div
            className="absolute h-full bg-blue-500"
            style={{
                width: `${progress}%`,
            }}
            />
        </div>
        <div className="">
            <div>
                <label className="">Speed (seconds): </label>
                <input
                    type="number" 
                    value={speed}
                    onChange={(e) => setSpeed(e.target.valueAsNumber || 1)}
                    className="border w-10 text-center"
                    disabled={isLoading}
                />
            </div>
            <button
            className="bg-blue-400 hover:bg-blue-600 px-4 py-2 text-white rounded mt-4"
            onClick={onLoaderStart}
            disabled={isLoading}
            >
                {btnText}
            </button>
        </div>
      </Container>
    );
  };

export default LoadingBar;