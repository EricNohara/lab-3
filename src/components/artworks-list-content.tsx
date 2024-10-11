import { useState, useEffect } from "react";
import { Artwork } from "../types";
import styled from "styled-components";

const ArtworkPreviewDiv = styled.div`
  margin: 3rem;
  padding: 1rem;
  width: 20rem;
  background-color: lightblue;
`;

const ArtworkPreview = ({ artwork }: { artwork: Artwork }) => {
  return (
    <ArtworkPreviewDiv>
      <h3>{artwork.title}</h3>
      <p>{artwork.place_of_origin}</p>
      <p>{artwork.medium_display}</p>
    </ArtworkPreviewDiv>
  );
};

export default function ArtworksListContent() {
  const [numArtworks, setNumArtworks] = useState(5);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (numArtworks > 0) {
          const res = await fetch(
            `https://api.artic.edu/api/v1/artworks?limit=${numArtworks}&fields=title,place_of_origin,medium_display`
          );
          data = await res.json();
        } else {
          data = { data: [] };
        }
        setArtworks(data.data);
      } catch (err) {
        console.error(err);
        return <div>Error: {(err as Error).message}</div>;
      }
    };

    fetchData();
  }, [numArtworks]);

  return (
    <div>
      <input
        type="number"
        placeholder="Number of Artworks"
        value={numArtworks}
        onChange={(e) => {
          const newNum = Number(e.target.value);
          if (newNum >= 0) setNumArtworks(Number(e.target.value));
        }}
      />
      <div>
        {artworks.map((art, index) => (
          <ArtworkPreview artwork={art} key={index} />
        ))}
      </div>
    </div>
  );
}
