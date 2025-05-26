import { useEffect } from "react";
import { Head } from '@inertiajs/react'
import { Alien } from '@phosphor-icons/react';
import Heading from '../components/Titles/Titles.jsx'
import Button from '../components/Button/Button.jsx';


export default function Home({ user }) {

    return (
        <>
        <Heading as="h1">  OpenFest </Heading>
  
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Button color="violet" type="primary" variant="text" as="a" href="https://google.com"> Texte </Button>
            <Button color="violet" type="primary" variant="left"> <Alien size={24}></Alien> Texte </Button>
            <Button color="violet" type="primary" variant="right"> Texte <Alien size={24}></Alien> </Button>
            <Button color="violet" type="primary" variant="only"> <Alien size={24}></Alien> </Button>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
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
        </>
    )
}