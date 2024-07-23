import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/global';

function Sidebar() {
    const { popularAnime } = useGlobalContext();

    const sorted = popularAnime?.sort((a, b) => b.score - a.score);

    return (
        <SidebarStyled>
            <h3>Top 5 Popular</h3>
            <div className="anime">
                {sorted?.slice(0, 5).map((anime) => (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                        <h5>{anime.title}</h5>
                    </Link>
                ))}
            </div>
        </SidebarStyled>
    );
}

const SidebarStyled = styled.div`
    margin-top: 2rem;
    background-color: #fff;
    border-top: 5px solid #e5e7eb;
    padding: 2rem 5rem 2rem 2rem;
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;

        @media screen and (max-width: 768px) {
            font-size: 1.2rem;
            text-align: center;
        }
    }

    .anime {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150px;

        @media screen and (max-width: 768px) {
            width: 100%;
        }

        img {
            width: 100%;
            border-radius: 5px;
            border: 5px solid #e5e7eb;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
        }

        a {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            color: #27AE60;
            text-align: center;

            h5 {
                font-size: 1.1rem;

                @media screen and (max-width: 768px) {
                    font-size: 1rem;
                }
            }
        }
    }
`;

export default Sidebar;
