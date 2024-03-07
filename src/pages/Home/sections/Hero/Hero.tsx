import { Container, Grid, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar2.jpg"

const Hero = () => {


    const StyledHero = styled("div")(() => ({
        backgroundColor: "black"
    }))

    const StyledImg = styled("img")(() => ({
        width: "20%",
        borderRadius: "50%",
    }))

    return (
        <>
            <StyledHero>
                 <Container>
                 <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid item xs={8}>
                        xs=4
                    </Grid>
                </Grid>
                 </Container>
            </StyledHero>
        </>
    )
}

export default Hero