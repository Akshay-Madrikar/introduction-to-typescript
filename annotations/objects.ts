const label = {
    name: 'BTown',
    foundedOn: 2020,
    location: {
        latitude: 0,
        longitude: 0
    },
    setFoundedOn( foundedOn: number ): void {
        this.foundedOn = foundedOn;
    }
};

const { foundedOn }: { foundedOn: number } = label;
const { 
    location: { latitude, longitude } 
}: { location: { latitude: number, longitude: number } } = label;