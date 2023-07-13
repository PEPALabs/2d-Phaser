import { useState } from "react";
import { useWindowEvent } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import GameManager from "../../../GameManager";

const useGameEvent = () => {
    const [gameManager] = useState(() => GameManager.getInstance());

    const navigate = useNavigate();

    useWindowEvent("keydown", event => {
        if (event.key === "Escape") {
            navigate("/home");
            gameManager.values["shopText"] = false;
            gameManager.values["shopOpen"] = false;
        }
    });
};

export default useGameEvent;
