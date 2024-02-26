import { Footer } from "../components/footer";
import { CreateTurnComponent } from "../components/createTurn";
import Navbar from "../components/Navbar"

export const metadata = {
    title: 'Crear Turno | HealthMate',
    description: 'Crear Turno',
  };
  
export default function CreateTurn() {
    return <>
        <Navbar/>
        <CreateTurnComponent/>
        <Footer />
    </>
}