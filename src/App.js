import logo from './logo.svg';
import './App.css';

import Header from "./components/header";
import Section from "./components/section";
import ListItem from "./components/listItem";

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
]

const channelListData = [
  {
    url: "https://www.twitch.tv/baiano",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/05396d4d-7af0-4b9b-8c7e-c03563b4d448-profile_image-150x150.png",
    alt: "Imagem de Baiano"
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-150x150.png",
    alt: "Imagem de Alanzoka"
  },
  {
    url: "https://www.twitch.tv/steph",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/4d7c3a97-a7dd-4695-a11d-d86858ebb0e9-profile_image-150x150.png",
    alt: "Imagemd de Steph"
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que mais curto jogar"
          class="games-list"
        >
          {
            gameListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco"
          class="channel-list"
        >
          {
            channelListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        {/*  
        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          class="social-list"
        >

        </Section>
        */}

      </main>
    </div>
  );
}

export default App;
