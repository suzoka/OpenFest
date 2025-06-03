import { useEffect } from "react";
import { Head } from '@inertiajs/react'
import { Alien } from '@phosphor-icons/react';
import Heading from '../components/Titles/Titles.jsx'
import Button from '../components/Button/Button.jsx';
import Label from "../components/Label/Label.jsx";
import Team from "../components/Team/Team.jsx";
import Partners from "../components/Partners/Partners.jsx";
import Stats from "../components/Stats/Stats.jsx";


export default function Home({ user }) {

    return (
        <>
        <Heading as="h1">  OpenFest </Heading>
        
        <Stats title="Festivals en France chaque année" color="yellow" number={"100+"} />

  
      <div style={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
        <div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button color="violet" type="primary" variant="text" as="a" href="https://google.com"> Texte </Button>
            <Button color="violet" type="primary" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="violet" type="primary" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="violet" type="primary" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
          <div style={{ display: "flex", gap: "5px"}}>
            <Button color="violet" type="secondary" variant="text"> Texte </Button>
            <Button color="violet" type="secondary" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="violet" type="secondary" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="violet" type="secondary" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button color="violet" type="outlined" variant="text"> Texte </Button>
            <Button color="violet" type="outlined" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="violet" type="outlined" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="violet" type="outlined" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button color="red" type="primary" variant="text"> Texte </Button>
            <Button color="red" type="primary" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="red" type="primary" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="red" type="primary" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button color="red" type="secondary" variant="text"> Texte </Button>
            <Button color="red" type="secondary" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="red" type="secondary" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="red" type="secondary" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button color="red" type="outlined" variant="text"> Texte </Button>
            <Button color="red" type="outlined" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="red" type="outlined" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="red" type="outlined" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button color="yellow" type="primary" variant="text"> Texte </Button>
            <Button color="yellow" type="primary" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="yellow" type="primary" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="yellow" type="primary" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button color="yellow" type="secondary" variant="text"> Texte </Button>
            <Button color="yellow" type="secondary" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="yellow" type="secondary" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="yellow" type="secondary" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button color="yellow" type="outlined" variant="text"> Texte </Button>
            <Button color="yellow" type="outlined" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="yellow" type="outlined" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="yellow" type="outlined" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
        </div>
      </div>

      <div style={{marginBottom: "50px"}}>
        <div style={{ display: "flex", gap: "30px", marginLeft: "5px", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column",  gap: "10px", justifyContent: "center" }}>
            <p style={{fontFamily: "Poppins_Bold"}}  > Labels avec couleur prédéfinie</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <Label color="violet"> color="violet"</Label>
              <Label color="red"> color="red"</Label>
              <Label color="yellow"> color="yellow"</Label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column",  gap: "10px", justifyContent: "center" }}>
            <p style={{fontFamily: "Poppins_Bold"}}  > Labels avec couleur personnalisée</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <Label color="#8E42E0" textcolor="#FAFAFA"> color="#8E42E0" textcolor="#FAFAFA"</Label>
              <Label color="#F83B3B" textcolor="#FAFAFA"> color="#F83B3B" textcolor="#FAFAFA"</Label>
              <Label color="#FFF000" textcolor="#151515"> color="#FFF000" textcolor="#151515"</Label>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
        <Team
          name="Lou-Anne Dubille"
          role={[
              { label: "Dev", color: "red" },
              { label: "Gestion de Projet", color: "yellow" },
            ]}
          image="/images/bg_team.png"
          description="UX/UI Designer, Intégrateur web, Cheffe de projet"
        />

      <Team
          name = "Thomas Bansront"
          role = {[
              { label: "Créa", color: "violet" },
              { label: "Podcasteur", color: '#8E42E0' },
            ]}
          image = "/images/bg_team.png"
          description = "Rédacteur, Community manager, Mixeur, Chef d’équipe Créa"
      />
      </div>


      <div style={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
        <Partners
            name="APF France Handicap"
            role={[{ label: "Association"}]}
            image="/images/apf.png"
            description="Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Partners
            name="Université Gustave EIffel - IUT de Marne-la-Vallée"
            role={[{ label: "Université", color: "yellow"}]}
            image="/images/iut.png"
            description="Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Partners
            name="Ministère de la culture"
            role={[{ label: "Ministère", color: "red"}]}
            image="/images/ministere.png"
            description="Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>

        </>
    )
}