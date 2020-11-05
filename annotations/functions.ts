const add = (a: number, b: number): number => {
    return a+b;
}

// When our function will return nothing, we''ll use never return type
const errorFunc = (message: string): never => {
    throw new Error();
}

// Passing objects to funtions
const todayWeather = {
    date: new Date(),
    type: 'sunny'
}

const forecast = ({ date, type }: { date: Date, type: string }): void => {
    console.log(date);
    console.log(type);
}

forecast(todayWeather);