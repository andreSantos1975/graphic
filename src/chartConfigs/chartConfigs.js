import { type } from "@testing-library/user-event/dist/type";

export const historyOptions = {
    lineHeighAnnotation: {
        always: true,
        hover: false,
        lineWeight: 1.5
    },
    animation: {
        duration: 2000
    },
    maintainAspectRation: false,
    responsive: true,
    scale: {
        xAxies:[
            {
            type: "time",
            distribution: "linear"
            }
        ],
    }
    
}