import React from 'react'
import '../../App.css'
import SectionPage from '../SectionPage'
import Cards from '../cards'
import { FooterContainer } from '../../containers/footer'

export function Home () {
    return(
        <>
        < SectionPage />
        <Cards />
        <FooterContainer />
        </>
    )
}

