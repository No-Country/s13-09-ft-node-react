import { Footer } from "../components/footer";
import { CreateTurnComponent } from "../components/createTurn";
export const metadata = {
    title: 'Crear Turno | HealthMate',
    description: 'Crear Turno',
  };
  
export default function CreateTurn() {
    return <>
        <CreateTurnComponent/>
        <Footer />
    </>
}