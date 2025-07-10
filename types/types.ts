 export default interface Pets {
    id: number;
    name: string;
    species: string;
    breed: string;
    age: number;
    gender: string;
    size: string;
    description: string | null;
    image_url: string | null;
    adopted: boolean;
    created_at: string;
    characteristics: string;
    adoption_fee: number;
    health: string;
    house_trained: boolean;
    long_description: string;
}
