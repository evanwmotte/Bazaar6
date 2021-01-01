import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import ImgCarousel from "../../components/Carousel"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Container, Button } from '@material-ui/core/';
import MediaCard from '../../components/Card';
import { createUser } from '../../services/http/authHttp';
import ApexChart from '../../components/BudgetChart'
import { GridCarousel } from '../../components/GridCarousel'
import OrdersList from '../../components/OrdersList'
import UserAPI from '../../utils/UserAPI'

function Dashboard(props) {

    const [ budget, setBudget] = useState()
    const [ spent, setSpent] = useState()

    useEffect(() => {
        getBudget()
    }, [])

    const getBudget = () => {
        UserAPI.getBudget()
    }

    const updateBudget = () => {
        UserAPI.updateBudget({"budget": 500})
    }

    return (

        <MiniDrawer>
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} sm={4} lg={4}>
                        <Paper>
                            <ApexChart
                                amount={75}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} sm={8} lg={8}>
                        <Paper>
                            <OrdersList />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} sm={8} lg={8}>
                        <Paper>
                            <OrdersList />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} sm={4} lg={4}>
                        <Paper>
                            <ApexChart
                                amount={75}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </MiniDrawer>
    );
}


export default Dashboard;