/**
 * PROBLEM NAME: Toggle Switch
 * 
 * DESCRIPTION: Created a toggle switch that takes in 2 props - enable and setEnable, allowing users to track the state of the switch
 * by passing in their own state variable and function
 * 
 */

import { Container } from "@/components/Container";

interface ToggleSwitchProps {
    enable: boolean;
    setEnable: (checked: boolean) => void;
}

export function ToggleSwitch(props: ToggleSwitchProps) {

    const { enable, setEnable } = props;

    return(
        <Container>
            <label className="toggle-switch">
                <input type="checkbox" 
                    className="sr-only" 
                    checked={enable} 
                    onChange={() => setEnable(!enable)}
                />
                <div className={`track`}/>
                <div className={`thumb ${enable ? 'thumb-on' : 'thumb-off'}`}/>
            </label>
        </Container>
    )
}