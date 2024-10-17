export type LocalizedTimePartials = {
    listOfHours: {
        value: number;
        label: string;
    }[];
    listOfMinutes: {
        value: number;
        label: string;
    }[];
    listOfSeconds: {
        value: number;
        label: string;
    }[];
    hour12: boolean;
};
