import '@testing-library/jest-dom'; // For matchers like toHaveTextContent
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Card } from '../Card';

describe('Card Component', () => {
    test('renders the card with movie details', () => {

        // Arrange
        const movie = {
            adult: false,
            backdrop_path: "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
            budget: 150000000,
            homepage: "https://www.minecraft-movie.com",
            id: 950387,
            imdb_id: "tt3566834",
            original_language: "en",
            original_title: "A Minecraft Movie",
            overview: "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
            popularity: 956.0781,
            poster_path: "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
            release_date: "2025-03-31",
            revenue: 323380122,
            runtime: 101,
            status: "Released",
            tagline: "Be there and be square.",
            title: "A Minecraft Movie",
            video: false,
            vote_average: 6.066,
            vote_count: 393
        };

        // Act
        render(<MemoryRouter><Card key={movie.id} movie={movie}></Card></MemoryRouter>);

        // Assert
        const containerElement = screen.getByTestId('container');
        const overviewElement = containerElement.querySelector('.movie-overview');
        const titleElement = containerElement.querySelector('.movie-title');

        expect(overviewElement).toHaveTextContent(movie.overview);
        expect(titleElement).toHaveTextContent(movie.title);
    });
});