import { Footer } from "../components/footer"
import Navbar from "../components/Navbar"
import {DashBoardComponents} from "../components/dashboard"

export const metadata = {
    title: 'Dashboard | HealthMate',
    description: 'Dashboard',
};
  

export default function DashBoard() {

    return <>
        <Navbar/>
        <DashBoardComponents/>
        <Footer/>
    </>
}
