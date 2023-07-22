export interface DetailGame {
    id: number;
    title: string;
    thumbnail: string;
    status: string;
    short_description: string;
    description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
    minimum_system_requirements: SystemRequirements;
    screenshots: Screenshot[];
}

interface SystemRequirements {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
}

interface Screenshot {
    id: number;
    image: string;
}